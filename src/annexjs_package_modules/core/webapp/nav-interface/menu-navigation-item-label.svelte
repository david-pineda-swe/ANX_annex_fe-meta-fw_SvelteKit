<script lang="ts">
  import { isEmpty } from "@annexjs/uitils";
  import type { NavigationNode } from "src/global";

  export let navItem: NavigationNode;

  // console.log('>> NAV_ITEM_LABEL:', navItem);

  const {
    label,
    icon,
    image,
    displayTypes
  } = navItem;

  const displayRun = (isEmpty(displayTypes)) ? ['label'] : displayTypes
</script>



<span class="menu-nav-item-label">
  {#each displayRun as display}
    {#if display === 'label'}
      {label}
    {:else if display === 'icon'}
      icon - tbd
    {:else if display === 'image'}
      image - tbd
    {/if}
  {/each}
</span>



<style></style>