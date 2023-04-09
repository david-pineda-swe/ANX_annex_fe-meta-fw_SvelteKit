<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import MenuNavigationList from "./menu-navigation-list.svelte";


  export let nav: NavigationConfig;
  export let locationClasses: string;
  export let targetActions: {};

  const [locationMark] = locationClasses.split(' ');

  // TODO - navigationType
  // [] navigationType
</script>



<!-- NAV_MENU -->
<nav id="{nav.elementId}-{locationMark}" class="nav-menu {nav.classes}">
  {#if nav.navListLabel}
    <h3 class="nav-menu-label">
      {nav.navListLabel}
    </h3>
  {/if}

  <MenuNavigationList
    elementId={nav.elementId}
    locationMark={locationMark}
    navListItems={nav.navListItems}
    targetActions={targetActions}>
    <slot slot="A">
      <slot name="A"/>
    </slot>
  </MenuNavigationList>
</nav>



<style>
  .nav-menu {
    margin-bottom: 20px;
  }
</style>
