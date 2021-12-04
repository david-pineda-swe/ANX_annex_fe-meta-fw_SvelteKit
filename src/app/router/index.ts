// todo: Create a class
// - that constructs the router
// - based off of the first consume of the site-graph
// - to svelte store maybe?

interface verifiedRoute {
	allTiersAreSatisfied: boolean;
	// routeConfig: any; // TODO
}

export function validateRouteRequest():verifiedRoute {
	return {
		allTiersAreSatisfied: true,
	};
}
