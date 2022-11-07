<script>
  import ContentTierCarriage from './content-tier-carriage.svelte';
  import ContentSegmentCarriage from './content-segment-carriage.svelte';
    import RenderErrorOut from './render-error-out.svelte';

  export let contentTier;

  // DEBUG -
  // console.log('>> CONTENT_TIER_CARRIAGE USES:', contentTier);

  const { tier, content, subRouteContent } = contentTier;

  const errorModel = {
    allTiersAreResolved: false
  }
  
</script>


{#if content}
  <!-- RENDER PARENT TIER -->
  <div class="content-tier tier-{tier}">
    <!-- TODO - CREATE A CONFIG FOR RENDER DEBUGS -->
    <h1 class="debug-header">DEBUG WORKING_TIER: {tier}</h1>
    
    <ContentSegmentCarriage contentSegment={content}/>

    {#if subRouteContent}
      <ContentTierCarriage contentTier={subRouteContent}/>
    {/if}
  </div>
{:else if subRouteContent}
  <!-- RENDER SUB TIER -->
  <ContentTierCarriage contentTier={subRouteContent}/>

{:else}
  <!-- UNPUBLISHED SCENARIO -->
  <RenderErrorOut pageModel={errorModel}/>
{/if}

<style>
  /* .content-tier {
    border: 2px dotted blue; 
  } */
</style>
