<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters

	import { validateRouteRequest } from '../../app/router';

	import { ProtoSiteGraph as SiteGraph } from '../../lib/fixtures/site-graph'

	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx, SiteGraph);

		// REQS
		const routeTiers = ["A"];
		const { sitemap } = SiteGraph;
		const requestedRouteParams = ctx.page.params;
		

		// TBD: POSSIBLE ADAPTER >>>
		const route = await validateRouteRequest({
			routeTiers,
			sitemap,
			requestedRouteParams
		});
	

		// 4.) re-route to 404 or pass through if tierSegment config is satisfied
		if (!route.allTiersAreSatisfied || !route.config) {
			// FAIL // TODO: ADD << TO HIGHLIGHT CASES
			console.error("(!)SHOULD 404(!)");
			throw new Error(`Could not find tier ${route.lastTier} segment`);
		} else {
			// OK
			console.log('>> TARGET_CONFIG:');
			console.table(route.config);
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
