<script context="module" lang="ts">
  import { annexRouter } from '@annexjs/core';
  import ContentPlotter from '@annexjs/core/content-plotter/render-controller.svelte';

  export const load = async (ctx) => {
    const pageModel = await annexRouter.fulfillPageModelRequestedBy({
      tierPositionKey: 'A', // of a tierSequenceIndex
      // tierPositionLabel: 'APPLE', // of a tierSequenceIndex
      serializedUrlPath: ctx.page.params
    });

    console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_A:", pageModel);

    return { 
      props: {
        pageModel
      }
    };

    // x FOR TESTING THE CONTENT_CASTER.RenderErrorOut
    // return {
    //   props: {
    //     pageModel: {
    //       success: false,
    //       allTiersAreResolved: true,
    //       allContentIsResolved: false
    //     }
    //   }
    // };
  }
</script>

<script>
  export let pageModel;
</script>

<ContentPlotter {pageModel}/>