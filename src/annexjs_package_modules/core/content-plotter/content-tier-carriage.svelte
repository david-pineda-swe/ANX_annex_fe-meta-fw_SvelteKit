<script>
  import ContentTierCarriage from './content-tier-carriage.svelte';
  import ContentSegmentCarriage from './content-segment-carriage.svelte';

  export let contentTier;

  // DEBUG -
  console.log('>> CONTENT_TIER_CARRIAGE USES:', contentTier);

  const { tier, content, subRouteContent } = contentTier;

  // NOTE - TIER LOGIC GOES HERE <<<
  // - ANNEX vs. $PEC TIERS
  // TODO - needs access to a config file for the $pec provided tier carriage
</script>


<div class="content-tier tier-{tier}">
  <!-- TODO: CREATE A CONFIG FOR RENDER DEBUGS -->
  <h1 class="debug-header">DEBUG WORKING_TIER: {tier}</h1>
  
  <ContentSegmentCarriage contentSegment={content}/>

  {#if subRouteContent}
    <ContentTierCarriage contentTier={subRouteContent}/>
  {/if}
</div>

<style>
  .content-tier {
    border: 2px dotted blue; 
  }
</style>
