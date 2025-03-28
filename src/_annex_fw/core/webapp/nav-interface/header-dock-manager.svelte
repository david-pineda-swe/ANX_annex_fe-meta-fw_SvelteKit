<script lang="ts">
  import type { NavigationConfig } from 'globalTypes';
  import filterTargetNavigations from 'annex/core/webapp/nav-interface/filter-target-navigations';
  import MenuPlotter from './menu-plotter.svelte';
  import type { Snippet } from 'svelte';
  import { usingMobile } from 'annex/core/webapp/stores/reactive-media';

  interface HeaderDockManagerSig {
    headerIsFixed: boolean;
    toggleMenuTray: (selectedTray: string) => void;
    navigations: Array<NavigationConfig>;
    DHinsert?: Snippet;
    MHinsert?: Snippet;
  }
  const props = $props();

  const {
    headerIsFixed,
    toggleMenuTray,
    navigations,
    //
    DHinsert,
    MHinsert,
  } = props as HeaderDockManagerSig;

  const mobileNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_MOBILE'
  });

  const desktopNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_DESKTOP'
  });
 

  // TARGET_ACTIONS
  const targetActions = {
    handleToggleMenuTray: (provided: any) => {
      const targetSide = provided[0];
      toggleMenuTray(`${targetSide}_TRAY`);
    }
  };

  // TODO - ADD TO CONSOLE DIAGNOSTIC

  // TODO - PROJECT CONFIG FOR CONTROL OF MENU TRAY POSITIONING
</script>

<div
  class="header-dock"
  class:top-fixed={headerIsFixed}
>
  {#if $usingMobile}
    <!-- MOBILE_HEADER  -->
    <header class="mobile-header">
      {@render MHinsert?.()}
   
   {#if mobileNavigations}
        <div class="menu-interface mobile-header-dock primary-menu">
          <MenuPlotter
            navigations={mobileNavigations}
            locationClasses="mobile"
            {targetActions}
          />
        </div>
      {/if}
    </header>
  {/if}

  {#if !$usingMobile}
    <!-- DESKTOP_HEADER -->
    <header class="desktop-header">
      {@render DHinsert?.()}

      {#if desktopNavigations}
        <div class="menu-interface desk-header-dock primary-menu">
          <MenuPlotter
            navigations={desktopNavigations}
            locationClasses="desktop"
            {targetActions}
          />
        </div>
      {/if}
    </header>
  {/if}
  


      <!-- TODO - ADD SUPPORT FOR MOTIF VISUAL ELEMENTS -->
    <!-- <svg class="menu-motif left" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg> -->



    <!-- TODO - ADD SUPPORT FOR MOTIF VISUAL ELEMENTS -->
    <!-- <svg class="menu-motif right" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg> -->
</div>


<style lang="scss">
  .header-dock {
    position: relative;

    &.top-fixed {
      position: fixed;
      top: 0px;
      width: 100%;
    }
    
    header {
      display: flex;
      flex-direction: column;
      // border: 1px solid red;
    }
  }
</style>
