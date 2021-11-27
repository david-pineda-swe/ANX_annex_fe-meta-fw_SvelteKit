<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx.page.params);
		// 1.) Create an nTier config abstraction (TBD in the sitegraph implementation)
		// NOTE: tierUser or tierOrg could proceed
			// levels: user or org, cat, resources, id
		const firstTierConfig = { // << Should come from SITE_GRAPH.siteMap.nTier[0] config obj
			routeKey: "A",
			routeType: "category"
			// todo: consider loose leaf routes
		}
		// 2.) Collect params
		const firstTierSegment = ctx.page.params[firstTierConfig.routeKey];
		console.log('>> FIRST_TIER_ROUTE:');
		console.table({
			firstTierSegment,
			routeType: firstTierConfig.routeType
		});
		
		// 3.) verify param from FIRST tier hierarchy
		// 4.) pass through or re-route to 404 if category param is satisfied
		
		// x
		let slugs = ctx.page.params;

		let d = { 
			props: {
				slugs,
			} };

		console.log('>> MODULE FOUND:', d);

		return d;
	}
</script>

<script>
	export let slugs;
</script>

<h1>{slugs.A}</h1>
