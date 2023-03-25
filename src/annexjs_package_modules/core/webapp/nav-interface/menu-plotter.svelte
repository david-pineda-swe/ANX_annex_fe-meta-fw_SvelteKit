<script lang="ts">
  import type { NavigationConfig } from "src/global";
  import MenuNavigation from "./menu-navigation.svelte";

  export let navigations: Array<NavigationConfig>
  export let locationClasses: string;

  // TODO - MENU_PLOTTER SUB FEATURES
  // [] mobileOnly
  // [] menuOrder
</script>


<!-- NAVIGATION_GROUP -->
<div class="nav-group {locationClasses}">
  {#each navigations as nav}
    <MenuNavigation
      nav={nav}
      locationClasses={locationClasses}/>
  {/each}
</div>

<style></style>