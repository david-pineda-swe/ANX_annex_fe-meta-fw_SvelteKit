<script lang="ts">
  import type { NavigationConfig } from 'globalTypes';
  import filterTargetNavigations from 'annex/core/webapp/nav-interface/filter-target-navigations';
  import MenuPlotter from './menu-plotter.svelte';
  import type { Snippet } from 'svelte';
  import { usingMobile } from 'annex/core/webapp/stores/reactive-media';
  import { toggleMenuTray } from '../stores/menu-trays';

  interface HeaderDockManagerSig {
    headerIsFixed: boolean;
    navigations: Array<NavigationConfig>;
    //
    HeaderInsertSpot?: Snippet;
  }
  const props = $props();

  const {
    headerIsFixed,
    navigations,
    //
    HeaderInsertSpot,
  } = props as HeaderDockManagerSig;

  // TODO - create a project config that matches
  // target navs to media break points
  const asdf = {
    is_SM: 'MENU_A',
    is_MD: 'MENU_B',
    is_LG: 'MENU_C',
    is_XL: 'MENU_D',
  }
  // Object.keys(asdf).map to fill;
  // return object with nav index

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
</script>



<div
  class="header-dock"
  class:top-fixed={headerIsFixed}
>
  {#if $usingMobile}
    <!-- MOBILE_HEADER  -->
    <header class="mobile-header">
      {@render HeaderInsertSpot?.()}
   
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
      {@render HeaderInsertSpot?.()}

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
