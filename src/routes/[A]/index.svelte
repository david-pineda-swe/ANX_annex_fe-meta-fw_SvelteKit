<script context="module" lang="ts">
  // DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
  import { annexRouter } from '@annexjs/core';
  
  // x SHOULD HAVE ACCESS TO THE ANNEX CONFIG
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph/content-driver-proto'
  // was >
  // import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR ROUTE_SEQUNECE >>>
    // X should be coming from Svelte store if previously loaded

    console.log('>> CDP SITEGRAPH:', SiteGraph);

    const content = await annexRouter.fulfillDynamicContentRequest({
      tierPositionKey: 'A', // of a tierSequenceIndex
      // tierPositionLabel: 'APPLE', // of a tierSequenceIndex
      routeStructure: SiteGraph.routeStructure,
      serializedUrlPath: ctx.page.params
    });

    console.log(">> WHAT IS CONTENT @ TIER_A:", content);

    return { 
      props: {
        content
      }
    };
  }
</script>
