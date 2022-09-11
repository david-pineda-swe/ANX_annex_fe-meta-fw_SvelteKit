<script lang="ts">
	import NavInterface from '@annexjs/core/webapp/nav-interface.svelte';
	import Header from '$pec/components/header/Header.svelte';
	import '../app.css';
</script>

<NavInterface>
	<!-- TODO - COMP FOR HANDLING DT SCENARIO -->
	<!-- TODO - $PEC CONTAINER FOR DT HEADER NAVIGATION -->
	<div class="desktop-navigation">
			<Header />
	</div>
	
	<main class="page-content">
		<slot />
	</main>
	
	<!-- TODO - $PEC CONTAINER FOR FOOTER -->
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</NavInterface>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		border: 2px solid green;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
