<script lang="ts">
	import Counter from '$pec/components/Counter.svelte';
	import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
				<img src={logoType} alt="Free4m IO" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		Addition of the Annex.js "Module Development Workflow"
	</h2>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
