import { annexRouter } from '@annexjs/core';
import type { LoadEvent } from '@sveltejs/kit';
import type { DynamicRouteData } from 'src/global';

  export const load = async (request:LoadEvent): Promise<DynamicRouteData> => {
    const pageModel = await annexRouter.renderURLrequestedModels({
      tierPositionKey: 'C', // of a tierSequenceIndex
      // tierPositionLabel: 'COOK', // of a tierSequenceIndex
      serializedUrlPath: request.params
    });

    // DEBUG -
    // console.log(">> WHAT IS THE HYDRATED_PAGE_MODEL @ TIER_C:", pageModel);

    return { 
      pageModel
    };
  }