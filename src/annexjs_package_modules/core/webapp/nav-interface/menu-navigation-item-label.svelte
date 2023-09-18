<script lang="ts">
  import { isEmpty } from "@annexjs/utils";
  import type { NavigationNode } from "src/global";

  import IconIndex from "@annexjs/ui/copy/icon-index.svelte";

  export let navItem: NavigationNode;

  // console.log('>> NAV_ITEM_LABEL:', navItem);

  const {
    label,
    icon,
    image, // TODO <<
    displayTypes
  } = navItem;

  const displayRun = (isEmpty(displayTypes)) ? ['label'] : displayTypes
  const labelWasProvided = !isEmpty(label);
</script>



<span class="menu-nav-item-label">
  {#each displayRun as display}
    {#if display === 'label' && labelWasProvided}
      {label}
    {:else if display === 'icon'}
      <IconIndex designation={icon}/>
    {:else if display === 'image'}
      image - TBD
    {/if}
  {/each}
</span>



<style></style>