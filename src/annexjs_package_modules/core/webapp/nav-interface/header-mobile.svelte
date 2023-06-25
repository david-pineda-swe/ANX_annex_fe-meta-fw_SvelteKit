<script lang="ts">
  import type { NavigationConfig } from 'src/global';
  import filterTargetNavigations from '@annexjs/core/webapp/nav-interface/filter-target-navigations';
    import MenuPlotter from './menu-plotter.svelte';

  export let toggleMenuTray: any;

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_MOBILE'
  });

  // TARGET_ACTIONS
  const targetActions = {
    handleToggleMenuTray: (provided) => {
      const targetSide = provided[0];
      toggleMenuTray(`${targetSide}_TRAY`);
    }
  };
</script>



<header class="mobile-header sm:hidden">
  {#if targetNavigations}
    <MenuPlotter
      navigations={targetNavigations}
      locationClasses='header-mobile-menu'
      targetActions={targetActions}>
        <slot slot="A">
          <slot name="insert-header-mobile"/>
        </slot>
    </MenuPlotter>
  {/if}
</header>



<style>
  header.mobile-header {
    justify-content: space-between;
  }
</style>
