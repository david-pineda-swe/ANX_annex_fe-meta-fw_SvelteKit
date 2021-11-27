<script context="module" lang="ts">
	export async function load(ctx) {
		console.log('>> TST CTX on [A]-[B]-[C]:', ctx.page.params);
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
<h1>{slugs.B}</h1>
<h1>{slugs.C}</h1>