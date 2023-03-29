<script lang="ts">
  import { page } from '$app/stores'; // X - nav sample to be deprecated for dynamic siteGraph nav

  import type { NavigationConfig } from 'src/global';
  import filterTargetNavigations from '@annexjs/core/webapp/nav-interface/filter-target-navigations';
    import MenuPlotter from './menu-plotter.svelte';

  export let toggeleMenuTray: any; // << action

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_DESKTOP'
  });

  console.log('>> HEADER_DESKTOP HAS MENUS:', targetNavigations);

  // TARGET_ACTIONS
  const targetActions = {
    handleToggleMenuTray: (provided) => {
      const targetSide = provided[0];
      toggeleMenuTray(`${targetSide}_TRAY`);
    }
  };

  // TODO - PROJECT CONFIG FOR TRAY-TOGGLE CONTROL OF POSITIONING
  // TODO - PROJECT CONFIG FOR MODULE-CONTROL POSITIONING
</script>



<header class="desktop-header hidden sm:flex">
  {#if $$slots["insert-header-desktop-aa"]}
    <div class="corner">
      <slot name="insert-header-desktop-aa"/>
    </div>
  {/if}

  <div class="menu-interface primary-menu">
    <svg class="menu-motif left" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>

    {#if targetNavigations}
      <MenuPlotter
        navigations={targetNavigations}
        locationClasses='header-desktop-menu'
        targetActions={targetActions}/>
    {/if}

    <!-- 
      TODO - GET ACTIVE LINK WORKING
      <ul>
      <li><button on:click={toggeleMenuTray('RT_TRAY')}>Right</button></li>
      <li class:active={$page.url.pathname === '/'}><a data-sveltekit-preload-data href="/">Home</a></li>
      <li class:active={$page.url.pathname === '/about'}><a data-sveltekit-preload-data href="/about">About</a></li>
      <li class:active={$page.url.pathname === '/contact'}><a data-sveltekit-preload-data href="/contact">Contact</a></li>
      <li class:active={$page.url.pathname === '/privacy-policy'}><a data-sveltekit-preload-data href="/privacy-policy">Privacy Policy</a></li>
      <li class:active={$page.url.pathname === '/sitemap'}><a data-sveltekit-preload-data href="/sitemap">Site Map</a></li>
      <li class:active={$page.url.pathname === '/test-a'}><a data-sveltekit-preload-data href="/test-a">Test A</a></li>
      <li class:active={$page.url.pathname === '/test-a/test-b'}><a data-sveltekit-preload-data href="/test-a/test-b">test B</a></li>
      <li class:active={$page.url.pathname === '/test-a/test-b/test-c'}><a data-sveltekit-preload-data href="/test-a/test-b/test-c">test C</a></li>
      <li><button on:click={toggeleMenuTray('LT_TRAY')}>Left</button></li>
    </ul> -->

    <svg class="menu-motif right" viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
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
