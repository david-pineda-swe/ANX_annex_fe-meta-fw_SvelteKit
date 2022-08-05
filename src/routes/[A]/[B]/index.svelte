<script context="module" lang="ts">

  import { annexRouter } from '@annexjs/core';
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph/content-driver-proto'
  // was >
  // import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR ROUTE_SEQUENCE RESOLVER >>>

    console.log('>> CDP SITEGRAPH:', SiteGraph);

    const content = await annexRouter.fulfillDynamicContentRequest({
      tierPositionKey: 'B', // of a tierSequenceIndex
      // tierPositionLabel: 'BANANA', // of a tierSequenceIndex
      routeSequence: SiteGraph.routeSequence,
      serializedUrlPath: ctx.page.params
    })

    console.log(">> WHAT IS CONTENT @ TIER_B:", content);

    return { 
      props: {
        content
      }
    };
  }
</script>