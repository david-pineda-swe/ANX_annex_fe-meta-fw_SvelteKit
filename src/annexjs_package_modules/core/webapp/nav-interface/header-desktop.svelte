<script lang="ts">
  import { page } from '$app/stores'; // X - nav sample to be deprecated for dynamic siteGraph nav

  import type { NavigationConfig } from 'src/global';
  import filterTargetNavigations from '@annexjs/core/webapp/nav-interface/filter-target-navigations';

  export let toggeleMenuTray: any;

  // Pull targetNav configs
  export let navigations: Array<NavigationConfig>;
  const targetNavigations = filterTargetNavigations({
    navigations,
    targetMenuLocation: 'HEADER_DESKTOP'
  });

  console.log('>> HEADER_DESKTOP HAS MENUS:', targetNavigations);

  // TODO - PROJECT CONFIG FOR TRAY-TOGGLE CONTROL OF POSITIONING
  // TODO - PROJECT CONFIG FOR MODULE-CONTROL POSITIONING
</script>



<header class="desktop-header hidden sm:flex">
  {#if $$slots["insert-header-desktop-aa"]}
    <div class="corner">
      <slot name="insert-header-desktop-aa"/>
    </div>
  {/if}

  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
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
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
    <!-- TODO - SLOT HERE -->
  </nav>

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

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav button,
  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
