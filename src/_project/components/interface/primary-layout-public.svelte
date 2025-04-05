<script lang="ts">
  import type { Snippet } from 'svelte';
	import NavInterface from 'annex/core/webapp/nav-interface.svelte';	
	import InsertHeader from '$pec/components/interface/menus/insert-header.svelte';
	import InsertFooter from '$pec/components/interface/menus/insert-footer.svelte';
	import InsertTrayTop from '$pec/components/interface/menus/insert-tray-top.svelte';
	import InsertTrayRight from '$pec/components/interface/menus/insert-tray-right.svelte';
	import InsertTrayBottom from '$pec/components/interface/menus/insert-tray-bottom.svelte';
	import InsertTrayLeft from '$pec/components/interface/menus/insert-tray-left.svelte';
	import Footer from 'annex/core/webapp/nav-interface/footer.svelte';
	
	import generateProjectConfiguration from "$pec/config/project";
	const { navigations } = generateProjectConfiguration();

  interface MainLayoutSig {
    children?: Snippet
  }
  const props = $props();
  const { children } = props as MainLayoutSig;
</script>


<NavInterface navigations={navigations}>
  {#snippet HeaderInsert()}
    <InsertHeader/>
  {/snippet}

	<!-- TOP_TRAY_INTERFACE -->
  {#snippet TrayTopInsert()}
	  <InsertTrayTop/>
  {/snippet}
	<!-- RIGHT_TRAY_INTERFACE -->
  {#snippet TrayRightInsert()}
    <InsertTrayRight/>
  {/snippet}
	<!-- BOTTOM_TRAY_INTERFACE -->
  {#snippet TrayBottomInsert()}
	  <InsertTrayBottom/>
  {/snippet}
	<!-- LEFT_TRAY_INTERFACE -->
  {#snippet TrayLeftInsert()}
	  <InsertTrayLeft/>
  {/snippet}
	
	<!-- PAGE_LAYOUT -->
  {#snippet pageLayout()}
    <div class="page-layout">
      <main id="page-content">
        {@render children?.()}
      </main>
      
      <Footer {navigations}>
        <InsertFooter/>
      </Footer>
      
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
