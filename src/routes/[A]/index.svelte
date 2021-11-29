<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	import { ProtoSiteGraph as SiteGraph } from '../../lib/fixtures/site-graph'

	export async function load(ctx) {

		console.log('>> TST CTX on [CATEGORY]:', ctx, SiteGraph);

		const ROUTE_TIERS = ["A"];

		// 1.) Create an nTier config abstraction (TBD in the sitegraph implementation)
		const { sitemap } = SiteGraph;

		// // TODO: make below into a sharable tier config collector util
		const LAST_TIER = ROUTE_TIERS[ROUTE_TIERS.length - 1];

		// 2.) Map through tier levels...
		const segmentConfigs = ROUTE_TIERS.map((stage, i, tiers) => {
			const requestedRouteSlug = ctx.page.params[stage];
			let tierConfig: any = (i === 0) ? sitemap : tiers[i - 1];

			// 3.) collect by verifying tier param is a possible match from tier config hierarchy
			const foundConfig = tierConfig.possibleRoutes.filter((tier: any) => {
				return tier.routeTier === stage && tier.routeSlug === requestedRouteSlug;
			})[0];

			return foundConfig;
		});
		
		const allTiersAreSatisfied = segmentConfigs.every((config) => {
			return config !== undefined; // TODO or empty() util
		});
		
		const targetConfig = segmentConfigs.filter(config => config && config.routeTier === LAST_TIER)[0];
		
		// 4.) re-route to 404 or pass through if tierSegment config is satisfied
		if (!allTiersAreSatisfied || !targetConfig) {
			console.error("(!)SHOULD 404(!)");
			throw new Error(`Could not find tier ${LAST_TIER} segment`);
		} else {
			console.log('>> TARGET_CONFIG:');
			console.table(targetConfig);
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
