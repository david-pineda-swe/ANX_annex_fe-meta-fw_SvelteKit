<script context="module" lang="ts">
	// DOCS: https://kit.svelte.dev/docs#layouts-error-pages

	export async function load(ctx) {
		console.log('>> TST CTX on [404_ERROR]:', ctx, ctx.error);
		let { error, page } = ctx;
		return {
			props: {
				error,
				page
			}
		};
	}
</script>

<script>
	export let error;
	export let page;
</script>

<div class="page-404-wrapper">
	
	<section class="content">
		<h1>
			Whoops!...
		</h1>
		<h2>
			The page: {page.path} that you are trying to reach is no longer in service.
		</h2>
		<p>
			Please hang up and try again.
		</p>

		<p>Error: {error.message}</p>
	</section>
</div>