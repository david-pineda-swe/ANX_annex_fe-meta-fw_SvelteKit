<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx.page.params);
		// 1.) Collect params
		// 2.) verify param from FIRST tier hierarchy
		// 2.a) Create a tier config abstraction
		// 3.) pass through or re-route to 404 if category param is satisfied
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

<h1>{slugs.category}</h1>
