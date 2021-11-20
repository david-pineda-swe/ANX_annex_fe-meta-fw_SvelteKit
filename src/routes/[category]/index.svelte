<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]:', ctx.page.params);
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
