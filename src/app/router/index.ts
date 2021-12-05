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

export async function validateRouteRequest(routeQuery: routeQueryArgs):Promise<validatedRoute> {
	const {routeProgression, sitemap, requestedRouteParams} = routeQuery;

	// params
	const lastTier = routeProgression[routeProgression.length - 1];
	const segmentConfigs = [];

	// SEGMENT CONFIG DRILL DOWN >>>
	await routeProgression.map((currentTier: string, i: number) => {
		const requestedRouteSlug = requestedRouteParams[currentTier];

		// Find targetTierConfig by routeTier & routeSlug match from parent
		const parentTierConfig = (i === 0) ? sitemap : segmentConfigs[i - 1];

		console.log('>> >> TEST parentTierConfig:', currentTier, parentTierConfig);

		const foundConfig = parentTierConfig.possibleRoutes.filter((config: { routeTier: string; routeSlug: string; }) => {
			return config.routeTier === currentTier && config.routeSlug === requestedRouteSlug;
		})[0];

		segmentConfigs.push(foundConfig);
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
		config,
		lastTier,
		segmentConfigs
	};
}
