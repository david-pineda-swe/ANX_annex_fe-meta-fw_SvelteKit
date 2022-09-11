<script lang="ts">
	import NavInterface from '@annexjs/core/webapp/nav-interface.svelte';
	import Header from '$pec/components/header/Header.svelte';
	import '../app.css';
</script>

<NavInterface>
	<!-- TODO - $PEC COMP FOR HANDLING MOBILE SCENARIO -->
	<!-- TODO - SLOTS FOR EACH NAV TRAY POLE TOP, LEFT, RIGHT, BOTTOM -->
	<!-- TODO - $PEC COMP FOR HANDLING DT SCENARIO -->

	<!-- DESKTOP_NAVIGATION_SLOT -->
	<div class="desktop-navigation" slot="desktop-navigation">
			<Header />
	</div>
	
	<!-- PAGE_LAYOUT_SLOT -->
	<div class="page-layout" slot="page-layout">
		<main id="page-content">
			<slot />
		</main>
		
		<!-- TODO - $PEC CONTAINER FOR FOOTER -->
		<footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer>
	</div>
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
