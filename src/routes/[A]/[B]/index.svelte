<script context="module" lang="ts">

  import { annexRouter } from '@annexjs/core';
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'
import Contact from 'src/routes/contact.svelte';

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP >>>

    const content = await annexRouter.fulfillDynamicContentRequest({
      tierPositionKey: 'B', // of a tierSequenceIndex
      // tierPositionLabel: 'BANANA', // of a tierSequenceIndex
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    })

    console.log(">> WHAT IS CONTENT TIER_B:", content);

    return { 
      props: {
        content
      }
    };
  }
</script>