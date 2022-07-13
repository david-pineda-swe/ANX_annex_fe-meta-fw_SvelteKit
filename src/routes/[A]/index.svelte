<script context="module" lang="ts">
  // DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters
  import { annexRouter } from '@annexjs/core';
  
  // x SHOULD HAVE ACCESS TO THE ANNEX CONFIG
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP >>>
    // X should be coming from Svelte store if previously loaded

    const content = await annexRouter.fulfillDynamicContentRequest({
      tierPositionKey: 'A', // of a tierSequenceIndex
      // tierPositionLabel: 'APPLE', // of a tierSequenceIndex
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

    console.log(">> WHAT IS CONTENT TIER_A:", content);

    return { 
      props: {
        content
      }
    };
  }
</script>
