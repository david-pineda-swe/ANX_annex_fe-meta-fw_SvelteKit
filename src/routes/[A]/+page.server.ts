import { annexRouter } from '@annexjs/core';
import type { LoadEvent } from '@sveltejs/kit';
import type { DynamicRouteData } from 'src/global';

  // TODO - VERIFY WHAT HAPPEMS TO request.params IF URL INCLUDES QUERY PARAMS

  export const load = async (request: LoadEvent): Promise<DynamicRouteData> => {
    const requestedModels = await annexRouter.renderURLrequestedModels({
      tierPositionKey: 'A', // of a tierSequenceIndex
      // tierPositionLabel: 'APPLE', // of a tierSequenceIndex
      serializedUrlPath: request.params
    });

    requestedModels.timeStamp = new Date();

    // DEBUG -
    console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_A:", requestedModels);
    // console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_A:", requestedModels.pageModel);
    // console.log(">> WHAT IS THE COTNENT_NAV_OUTLINE @ TIER_A:", requestedModels.contentNavigation);

    // return {
    //   pageModel: {},
    //   contentNavigation: []
    // };
    return requestedModels;

    // TODO - RETEST ERROR HANDLING
    // TODO -  CREATE PROJECT SPIN UP CHECK LIST
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

  // START HERE >>
  // TODO - [X] verify pageModel data can get to layout - via svelte store "navigation-outlines"
  // TODO - [x] parse main navigation from site-graph
  // TODO - [x] create project config and subset for navigation configuration
  // TODO - [] consider secondary navigation models
  // TODO - [] render on mobile first
  // TODO - [] render on desktop
  // TODO - [] document
  // TODO - [] 