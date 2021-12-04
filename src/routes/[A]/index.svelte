<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	import { ProtoSiteGraph as SiteGraph } from '../../lib/fixtures/site-graph'

	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx, SiteGraph);

		// REQS
		const routeTiers = ["A"];
		const { sitemap } = SiteGraph;

		// ===

		// params
		const lastTier = routeTiers[routeTiers.length - 1];
		const segmentConfigs = routeTiers.map((currentTier, i, tiers) => {
			const requestedRouteSlug = ctx.page.params[currentTier];
			let tierConfig: any = (i === 0) ? sitemap : tiers[i - 1];

			// Find tierConfig by routeTier & routeSlug match
			const foundConfig = tierConfig.possibleRoutes.filter((routeConfig: any) => {
				return routeConfig.routeTier === currentTier && routeConfig.routeSlug === requestedRouteSlug;
			})[0];

			return foundConfig;
		});
		
		// All tiers are satisfied w/ a config
		const allTiersAreSatisfied = segmentConfigs.every((config) => {
			return config !== undefined; // TODO: or empty() util
		});
		
		// Target config was the match found for the last tier designation
		const routeConfig = segmentConfigs.filter(config => config && config.routeTier === lastTier)[0];
		
	

		// 4.) re-route to 404 or pass through if tierSegment config is satisfied
		if (!allTiersAreSatisfied || !routeConfig) {
			console.error("(!)SHOULD 404(!)");
			throw new Error(`Could not find tier ${lastTier} segment`);
		} else {
			console.log('>> TARGET_CONFIG:');
			console.table(routeConfig);
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
