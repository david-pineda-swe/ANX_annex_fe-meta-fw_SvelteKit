import { annexRouter } from '@annexjs/core';
import type { LoadEvent } from '@sveltejs/kit';
import type { DynamicRouteData } from 'src/global';

  // TODO - VERIFY WHAT HAPPEMS TO request.params IF URL INCLUDES QUERY PARAMS

  export const load = async (request: LoadEvent): Promise<DynamicRouteData> => {    
    const pageModel = await annexRouter.renderURLrequestedModels({
      tierPositionKey: 'A', // of a tierSequenceIndex
      // tierPositionLabel: 'APPLE', // of a tierSequenceIndex
      serializedUrlPath: request.params
    });

    // DEBUG -
    // console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_A:", pageModel);

    return {
      pageModel
    };

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
  // TODO - [] verify pageModel data can get to layout
  // TODO - [] parse main navigation from site-graph
  // TODO - [] consider secondary navigation models
  // TODO - [] render on mobile first
  // TODO - [] render on desktop
  // TODO - [] document
  // TODO - [] 