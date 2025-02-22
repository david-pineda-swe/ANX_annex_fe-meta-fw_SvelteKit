<script lang="ts">
  import type { NavigationConfig } from 'src/global';
  import filterTargetNavigations from 'annex/core/webapp/nav-interface/filter-target-navigations';
  import MenuPlotter from './menu-plotter.svelte';

  export let toggleMenuTray: any; // << action

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_DESKTOP'
  });

  // TARGET_ACTIONS
  const targetActions = {
    handleToggleMenuTray: (provided) => {
      const targetSide = provided[0];
      toggleMenuTray(`${targetSide}_TRAY`);
    }
  };

  // TODO - PROJECT CONFIG FOR CONTROL OF TRAY POSITIONING
</script>



<header class="desktop-header hidden sm:flex">
  {#if $$slots["insert-header-desktop-aa"]}
    <div class="corner">
      <slot name="insert-header-desktop-aa"/>
    </div>
  {/if}

  <div class="menu-interface primary-menu">
    <!-- TODO - ADD SUPPORT FOR MOTIF VISUAL ELEMENTS -->
    <!-- <svg class="menu-motif left" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg> -->

    {#if targetNavigations}
      <MenuPlotter
        navigations={targetNavigations}
        locationClasses='header-desktop-menu'
        targetActions={targetActions}/>
    {/if}

    <!-- TODO - ADD SUPPORT FOR MOTIF VISUAL ELEMENTS -->
    <!-- <svg class="menu-motif right" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg> -->
  </div>

  {#if $$slots["insert-header-desktop-bb"]}
    <div class="corner">
      <slot name="insert-header-desktop-bb"/>
    </div>
  {/if}
</header>



<style>
  header {
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }
</style>
