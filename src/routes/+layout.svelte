<script>
	import NavInterface from 'annex/core/webapp/nav-interface.svelte';
	import Footer from 'annex/core/webapp/nav-interface/footer.svelte';
	
	import DesktopHeaderInsert from '$pec/components/interface/menus/insert-header-desktop.svelte';
	import MobileHeaderInsert from "$pec/components/interface/menus/insert-header-mobile.svelte";

	import InsertTrayTop from '$pec/components/interface/menus/insert-tray-top.svelte';
	import InsertTrayRight from '$pec/components/interface/menus/insert-tray-right.svelte';
	import InsertTrayBottom from '$pec/components/interface/menus/insert-tray-bottom.svelte';
	import InsertTrayLeft from '$pec/components/interface/menus/insert-tray-left.svelte';
	import InsertFooter from '$pec/components/interface/menus/insert-footer.svelte';
	
	import generateProjectConfiguration from "$pec/config/project";
	import 'annex/core/_styles.scss';
	import '$pec/_styles.scss';

	import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';

  const { children } = $props();

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
  {#snippet desktopHeaderInsert()}
    <DesktopHeaderInsert/>
  {/snippet}
  {#snippet mobileHeaderInsert()}
    <MobileHeaderInsert/>
  {/snippet}

	<!-- TOP_TRAY_INTERFACE -->
	<InsertTrayTop slot="insert-tray-tp"/>
	<!-- RIGHT_TRAY_INTERFACE -->
	<InsertTrayRight slot="insert-tray-rt"/>
	<!-- BOTTOM_TRAY_INTERFACE -->
	<InsertTrayBottom slot="insert-tray-bt"/>
	<!-- LEFT_TRAY_INTERFACE -->
	<InsertTrayLeft slot="insert-tray-lt"/>
	
	<!-- PAGE_LAYOUT_SLOT -->
  {#snippet pageLayout()}
    <div class="page-layout">
      <main id="page-content">
        {@render children?.()}
      </main>
		
	  </div>
  {/snippet}
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
