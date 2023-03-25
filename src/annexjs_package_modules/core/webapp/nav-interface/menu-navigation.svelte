<script lang="ts">
  import type { NavigationConfig } from "src/global";

  import MenuNavigationItem from "./menu-navigation-item.svelte";

  export let nav: NavigationConfig;
  export let locationClasses: string;

  const [locationMark] = locationClasses.split(' ');

  // TODO - MENU_PLOTTER SUB FEATURES
  // [] navigationType
  // [] renderActive
</script>


<!-- NAV_MENU -->
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



<style></style>