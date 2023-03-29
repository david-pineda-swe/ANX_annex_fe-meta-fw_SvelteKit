<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import MenuNavigation from "./menu-navigation.svelte";

  export let navigations: Array<NavigationConfig>
  export let locationClasses: string;
  export let targetActions: {};

  // TODO - MENU_PLOTTER SUB FEATURES
  // [] mobileOnly
  // [] menuOrder
</script>


<!-- NAVIGATION_GROUP -->
<div class="nav-group {locationClasses}">
  {#each navigations as nav}
    <MenuNavigation
      nav={nav}
      locationClasses={locationClasses}
      targetActions={targetActions}>
        <slot slot="A">
          <slot name="A"/>
        </slot>
    </MenuNavigation>
  {/each}
</div>

<style></style>