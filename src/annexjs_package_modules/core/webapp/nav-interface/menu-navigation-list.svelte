<script lang="ts">
  import type { NavigationNode } from "src/global";
  import MenuNavigationItem from "./menu-navigation-item.svelte";

  export let elementId: string;
  export let locationMark: string;
  export let navListItems: Array<NavigationNode>
  export let targetActions: {};
</script>



<ul
  id="{elementId}-{(locationMark) ? `${locationMark}-list` : "list"}"
  class="nav-menu-list">
  {#each navListItems as navItem}
    <MenuNavigationItem
      navItem={navItem}
      targetActions={targetActions}>
        <slot slot="A">
          <slot name="A"/>
        </slot>
    </MenuNavigationItem>
  {/each}
</ul>



<style></style>
