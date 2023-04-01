<script lang="ts">
  import RenderErrorOut from './render-error-out.svelte';
  import ContentTierCarriage from './content-tier-carriage.svelte';
  import type { PageModelResult } from 'src/global';

  export let pageModel: PageModelResult;

  // console.log('\n>> PAGE MODEL @ RENDER_CONTROLLER:\n', pageModel);

  // VERIFY PAGE MODEL FULFILLMENT
  const { success, allContentIsResolved, allTiersAreResolved, contentStructure } = pageModel;
  export let erroredOut: boolean = !success || !allTiersAreResolved || !allContentIsResolved;

  // console.log('>> PAGE ERRORED OUT:', erroredOut);
</script>

{#if erroredOut}
  <!-- FAIL -->
  <RenderErrorOut {pageModel}/>
{:else}
  <!-- OK: RENDER FIRST TIER -->
  <ContentTierCarriage contentTier={contentStructure}/>
{/if}