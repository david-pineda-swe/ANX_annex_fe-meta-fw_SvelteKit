<script context="module" lang="ts">

  import { annexRouter } from '@annexjs/core';
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph/content-driver-proto'
  // was >
  // import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR ROUTE_SEQUENCE RESOLVER >>>

    console.log('>> CDP SITEGRAPH:', SiteGraph);

    const content = await annexRouter.fulfillDynamicContentRequest({
      tierPositionKey: 'C', // of a tierSequenceIndex
      // tierPositionLabel: 'COOK', // of a tierSequenceIndex
      routeStructure: SiteGraph.routeStructure,
      serializedUrlPath: ctx.page.params
    });

    console.log(">> WHAT IS PAGE_MODEL @ TIER_C:", content);

    return { 
      props: {
        content
      }
    };
  }
</script>