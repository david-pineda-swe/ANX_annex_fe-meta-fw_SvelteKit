<script lang="ts">
	import NavInterface from '@annexjs/core/webapp/nav-interface.svelte';

	import MobileHeader from '$pec/components/header/mobile.svelte';
	import DesktopHeader from '$pec/components/header/desktop.svelte';

	// TODO - $pec/TopTrayInterface
	// TODO - $pec/RightTrayInterface
	// TODO - $pec/BottomTrayInterface
	// TODO - $pec/LeftTrayInterface
	import '../app.css';
</script>

<NavInterface>
	<!-- TODO - SLOTS FOR EACH NAV TRAY POLE TOP, LEFT, RIGHT, BOTTOM -->
	<!-- TOP_TRAY_INTERFACE -->
	<div slot="tray-interface-tp">
		test TOP menu-tray | TBD by $pec/interface
	</div>
	<!-- RIGHT_TRAY_INTERFACE -->
	<div slot="tray-interface-rt">
		test RIGHT menu-tray | TBD by $pec/interface
	</div>
	<!-- BOTTOM_TRAY_INTERFACE -->
	<div slot="tray-interface-bt">
		test BOTTOM menu-tray | TBD by $pec/interface
	</div>
	<!-- LEFT_TRAY_INTERFACE -->
	<div slot="tray-interface-lt">
		test LEFT menu-tray | TBD by $pec/interface
	</div>

	<!-- MOBILE_HEADER_SLOT -->
	<MobileHeader slot="header-mobile"/>

	<!-- DESKTOP_HEADER_SLOT -->
	<DesktopHeader slot="header-desktop"/>
	
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
