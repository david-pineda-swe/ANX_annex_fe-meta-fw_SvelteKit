<script lang="ts">
	import NavInterface from '@annexjs/core/webapp/nav-interface.svelte';

	import generateProjectConfiguration from "$pec/config/project";
	import TopTray from '$pec/components/interface/menus/tray-top.svelte';
	import RightTray from '$pec/components/interface/menus/tray-right.svelte';
	import BottomTray from '$pec/components/interface/menus/tray-bottom.svelte';
	import LeftTray from '$pec/components/interface/menus/tray-left.svelte';
	import Footer from '$pec/components/interface/footer.svelte';

	import '../app.scss';

	const { navigations } = generateProjectConfiguration();	
</script>

<NavInterface navigations={navigations}>
	<!-- TOP_TRAY_INTERFACE -->
	<TopTray slot="tray-interface-tp"/>

	<!-- RIGHT_TRAY_INTERFACE -->
	<RightTray slot="tray-interface-rt"/>
	
	<!-- BOTTOM_TRAY_INTERFACE -->
	<BottomTray slot="tray-interface-bt"/>
	
	<!-- LEFT_TRAY_INTERFACE -->
	<LeftTray slot="tray-interface-lt"/>
	
	<!-- PAGE_LAYOUT_SLOT -->
	<div class="page-layout" slot="page-layout">
		<main id="page-content" class="container mx-auto">
			<slot />
		</main>
		
		<Footer/>
		
	</div>
</NavInterface>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		/* border: 2px solid green; */
	}
</style>
