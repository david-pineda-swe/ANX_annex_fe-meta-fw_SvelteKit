<script context="module" lang="ts">

	import { validateRouteRequest } from '../../../app/router';
	import { ProtoSiteGraph as SiteGraph } from '../../../lib/fixtures/site-graph'

	export async function load(ctx) {
		// REQS
		const routeProgression = ['A', 'B'];
		// TODO: POSSIBLE ADAPTER FOR SITEMAP>>>
		const { sitemap } = SiteGraph;
		const requestedRouteParams = ctx.page.params;

		const route = await validateRouteRequest({
			routeProgression,
			sitemap,
			requestedRouteParams
		});

		if (!route.allTiersAreSatisfied || !route.config) {
			// FAIL
			console.error(`(!)404: ${route.lastTier} - ROUTE IS NOT VALID(!)`);
			throw new Error(`Could not find tier: ${route.lastTier} segment`);
		} else {
			// OK
			console.log(">> SHOULD RENDER <<");
			console.log(`>> TIER CONFIGS @ ${route.lastTier}:`);
			route.segmentConfigs.forEach(config => console.table(config));
			
			return { 
			props: {
				page: route.config,
				route
			} };
		}
	}
</script>