<script context="module" lang="ts">
  import { annexRouter } from '@annexjs/core';
  import ContentPlotter from '@annexjs/core/content-plotter/render-controller.svelte';

  export const load = async (ctx) => {
    const pageModel = await annexRouter.fulfillPageModelRequestedBy({
      tierPositionKey: 'B', // of a tierSequenceIndex
      // tierPositionLabel: 'BANANA', // of a tierSequenceIndex
      serializedUrlPath: ctx.page.params
    })

    // DEBUG =
    console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_B:", pageModel);

    return { 
      props: {
        pageModel
      }
    };
  }
</script>

<script>
  export let pageModel;
</script>

<ContentPlotter {pageModel}/>