<script lang="ts">
  import RenderErrorOut from './render-error-out.svelte';
import ContentTierCarriage from './content-tier-carriage.svelte';

  export let pageModel: PageModelResult;

  // VERIFY PAGE MODEL FULFILLMENT
  const { success, allContentIsResolved, allTiersAreResolved, contentStructure } = pageModel;
  export let erroredOut: boolean = !success || !allTiersAreResolved || !allContentIsResolved;
</script>

{#if erroredOut}
  <!-- FAIL -->
  <RenderErrorOut {pageModel}/>
{:else}
  <!-- OK: RENDER FIRST TIER -->
  <ContentTierCarriage contentTier={contentStructure}/>
{/if}