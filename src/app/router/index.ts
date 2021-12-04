// todo: Create a class
// - that constructs the router
// - based off of the first consume of the site-graph
// - to svelte store maybe?

interface verifiedRoute {
	allTiersAreSatisfied: boolean;
	// routeConfig: any; // TODO
	lastTier: string;
}

export function validateRouteRequest():verifiedRoute {
	// NOTE: REQUIRES SiteGraph.siteMap, routeTiers
	return {
		allTiersAreSatisfied: true,
		lastTier: "A"
	};
}
