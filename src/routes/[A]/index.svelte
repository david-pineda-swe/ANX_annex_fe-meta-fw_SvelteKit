<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx);

		const ROUTE_TIER = "A";
		// TODO: make a drill down map mech

		// 1.) Create an nTier config abstraction (TBD in the sitegraph implementation)
		// NOTE: tierUser or tierOrg could proceed
			// levels: user or org, cat, resources, id
		const tierConfig = { // << Should come from SITE_GRAPH.siteMap.nTiers config obj
			// rootTier
			possibleRoutes: [{
				routeKey: "A",
				routeType: "category", // >> product, articles, resources, projects
				routeSlug: "merp",
				possibleRoutes: []
			}]
			// todo: consider loose leaf routes
		}

		// 2.) Collect params
		const requestedRouteSlug = ctx.page.params[ROUTE_TIER];
		
		// 3.) verify tier param is a possible match from tier config hierarchy
		const tierSegmentConfig = tierConfig.possibleRoutes.filter((tier) => {
			return tier.routeKey === ROUTE_TIER && requestedRouteSlug === tier.routeSlug;
		});
		
		// 4.) re-route to 404 or pass through if tierSegment config is satisfied
		if (!tierSegmentConfig[0]) {
			console.error("(!)SHOULD 404(!)");
			throw new Error('Could not find tier A segment');
		} else {
			console.log('>> FIRST_TIER_SEGMENT_CONFIG:', tierSegmentConfig);
			console.table(tierSegmentConfig[0]);
			console.log(">> SHOULD RENDER <<");
			
			
			// x
			let slugs = ctx.page.params;
			
			let d = { 
			props: {
				slugs,
			} };
			
			console.log('>> MODULE FOUND:', d);
			
			return d;
		}
	}
</script>

<script>
	export let slugs;
</script>

<!-- <h1>{slugs.A}</h1> -->
