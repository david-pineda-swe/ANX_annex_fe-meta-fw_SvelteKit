<script context="module" lang="ts">
	export async function load(ctx) {
		console.log('>> TST CTX on [CATEGORY]-[RESOURCE]-[ID]:', ctx.page.params);
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
<h1>{slugs.resource}</h1>
<h1>{slugs.id}</h1>