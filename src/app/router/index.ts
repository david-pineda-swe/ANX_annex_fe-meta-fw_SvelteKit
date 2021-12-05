// todo: Create a class
// - that constructs the router
// - based off of the first consume of the site-graph
// - to svelte store maybe?

interface DynamicRouteConfiguration {
	routeTier: string,
	routeType: string,
	routeSlug: string,
	pageId: string,
	a_indexOnly: boolean,
	b_published: boolean,
	c_sitemapVisible: boolean,
	d_mainNavVisible: boolean,
	possibleRoutes: Array<DynamicRouteConfiguration>
}
interface SiteMap {
	routeSlug: string,
	pageId: string,
	possibleRoutes: Array<DynamicRouteConfiguration>
}

interface RouteKeyDictionary {
	A: string,
	B: string,
	C: string,
}

interface routeQueryArgs {
	routeProgression: Array<string>,
	sitemap: SiteMap,
	requestedRouteParams: RouteKeyDictionary
}
interface validatedRoute {
	allTiersAreSatisfied: boolean;
	config: DynamicRouteConfiguration
	lastTier: string;
	segmentConfigs: Array<DynamicRouteConfiguration>;
}

export function validateRouteRequest(routeQuery: routeQueryArgs):verifiedRoute {
	const {routeTiers, sitemap, requestedRouteParams} = routeQuery;

	// params
	const lastTier = routeTiers[routeTiers.length - 1];
	const segmentConfigs = routeTiers.map((currentTier, i, tiers) => {
		const requestedRouteSlug = requestedRouteParams[currentTier];
		const tierConfig = (i === 0) ? sitemap : tiers[i - 1];

		// Find tierConfig by routeTier & routeSlug match
		const foundConfig = tierConfig.possibleRoutes.filter((config) => {
			return config.routeTier === currentTier && config.routeSlug === requestedRouteSlug;
		})[0];

		return foundConfig;
	});
	
	// All tiers are satisfied w/ a config
	const allTiersAreSatisfied = segmentConfigs.every((config) => {
		return config !== undefined; // TODO: or empty() util
	});
	
	// Target config was the match found for the last tier designation
	const config = segmentConfigs.filter(config => config && config.routeTier === lastTier)[0];
	
	return {
		allTiersAreSatisfied,
		lastTier,
		config
	};
}
