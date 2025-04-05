<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import MenuNavigationList from "./menu-navigation-list.svelte";

  // TODO - S5_MIGRATE
  export let toggleMenuTray: any;
  export let nav: NavigationConfig;
  export let locationClasses: string;
  export let targetActions: {};

  const [locationMark] = locationClasses.split(' ');
</script>



<nav id="{nav.elementId}-{locationMark}" class="nav-menu {nav.classes}">
  {#if nav.navListLabel}
    <h3 class="nav-menu-label">
      {nav.navListLabel}
    </h3>
  {/if}

  <MenuNavigationList
    {toggleMenuTray}
    elementId={nav.elementId}
    locationMark={locationMark}
    levelDepth={'0'}
    navigationType={nav.navigationType}
    navListItems={nav.navListItems}
    targetActions={targetActions}>
    <slot slot="A">
      <slot name="A"/>
    </slot>
  </MenuNavigationList>
</nav>
