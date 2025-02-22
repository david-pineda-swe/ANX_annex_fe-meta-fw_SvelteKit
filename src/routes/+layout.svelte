<script>
	import NavInterface from 'annex/core/webapp/nav-interface.svelte';
	import Footer from 'annex/core/webapp/nav-interface/footer.svelte';
	
	import InsertHeaderDesktopA from '$pec/components/interface/menus/insert-header-desktop-a.svelte';
	import InsertHeaderDesktopB from '$pec/components/interface/menus/insert-header-desktop-b.svelte';
	import InsertHeaderMobile from "$pec/components/interface/menus/insert-header-mobile.svelte";

	import InsertTrayTop from '$pec/components/interface/menus/insert-tray-top.svelte';
	import InsertTrayRight from '$pec/components/interface/menus/insert-tray-right.svelte';
	import InsertTrayBottom from '$pec/components/interface/menus/insert-tray-bottom.svelte';
	import InsertTrayLeft from '$pec/components/interface/menus/insert-tray-left.svelte';
	import InsertFooter from '$pec/components/interface/menus/insert-footer.svelte';
	
	import generateProjectConfiguration from "$pec/config/project";
	import '../app.scss';

	import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';

	const { navigations } = generateProjectConfiguration();	
</script>


<svelte:head>
	<!-- VERIFY - THIS IS THE RIGHT LOCATION FOR PROJECT WIDE IMPORTS AND HEAD CONFIGS -->
	<!-- TODO - integrate settings from project.theme configurations -->
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&display=swap');
	</style>

	<!-- TODO - ADD SUPPORT FOR SPEC-PROJECT CONFIGURATION -->
	<link rel="icon" type="image/x-icon" href={logo}>
</svelte:head>


<NavInterface navigations={navigations}>
	<!-- INSERT_HEADER_DESKTOP_A -->
	<InsertHeaderDesktopA slot="insert-header-desktop-a"/>
	<!-- INSERT_HEADER_DESKTOP_B -->
	<InsertHeaderDesktopB slot="insert-header-desktop-b"/>

	<!-- INSERT_HEADER_MOBILE -->
	<InsertHeaderMobile slot="insert-header-mobile"/>

	<!-- TOP_TRAY_INTERFACE -->
	<InsertTrayTop slot="insert-tray-tp"/>
	<!-- RIGHT_TRAY_INTERFACE -->
	<InsertTrayRight slot="insert-tray-rt"/>
	<!-- BOTTOM_TRAY_INTERFACE -->
	<InsertTrayBottom slot="insert-tray-bt"/>
	<!-- LEFT_TRAY_INTERFACE -->
	<InsertTrayLeft slot="insert-tray-lt"/>
	
	<!-- PAGE_LAYOUT_SLOT -->
	<div class="page-layout" slot="page-layout">
		<main id="page-content">
			<slot />
		</main>
		
		<Footer navigations={navigations}>
			<InsertFooter slot="insert-footer"/>
		</Footer>
		
	</div>
</NavInterface>



<style>
	main {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		min-height: 800px;
		padding: 0 0 100px;
	}
</style>
