<script lang="ts">
	import NavInterface from '@annexjs/core/webapp/nav-interface.svelte';
	import MobileHeader from '$pec/components/header/mobile-header.svelte';
	import DesktopHeader from '$pec/components/header/desktop-header.svelte';
	import '../app.css';
</script>

<NavInterface>
	<!-- TODO - SLOTS FOR EACH NAV TRAY POLE TOP, LEFT, RIGHT, BOTTOM -->

	<!-- MOBILE_NAVIGATION_SLOT -->
	<MobileHeader slot="mobile-header"/>

	<!-- DESKTOP_NAVIGATION_SLOT -->
	<DesktopHeader slot="desktop-header"/>
	
	<!-- PAGE_LAYOUT_SLOT -->
	<div class="page-layout" slot="page-layout">
		<main id="page-content" class="container mx-auto">
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
