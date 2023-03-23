<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import MenuNavigationItem from "./menu-navigation-item.svelte";
  // import { page } from '$app/stores'; // TODO - use for "$page.url.pathname active page check"
  export let navigations: Array<NavigationConfig>
  export let locationClasses: string;

  const [locationMark] = locationClasses.split(' ');

  // [] navigationType
  // [] mobileOnly
  // [] menuOrder
  // [] renderActive
</script>

<!-- NAVIGATION -->
<div class="nav-group {locationClasses}">
  {#each navigations as nav}
    <div id="{nav.elementId}-{locationMark}" class="nav-menu {nav.classes}">
      {#if nav.navListLabel}
        <h3 class="nav-menu-label">
          {nav.navListLabel}
        </h3>
      {/if}
  
      <ul id="{nav.elementId}-{locationMark}-list" class="nav-menu-list">
        {#each nav.navListItems as navItem}
          <MenuNavigationItem
            navItem={navItem}
            renderActive={nav.renderActive}/>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .test-render {
    border: 1px solid red;
  }
</style>