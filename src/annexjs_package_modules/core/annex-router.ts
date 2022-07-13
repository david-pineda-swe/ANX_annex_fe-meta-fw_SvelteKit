import { annexContentDriver } from ".";

// TBD: Create a dynamic router class that will
// - that constructs the router
// - based off of the first consume of the site-graph
// - to svelte store maybe?
// in order to perform ops
// export default class AnnexRouter {
// };

// TODO: CREATE AN INTERFACE FOR A SITE GRAPH
// NOTE: 1ST LEVEL OF CONTENT LEVEL MODULES
// NOTE: INHERITS <CONTENT_LEVEL_MODULE>

interface SerializedAnnexRouteSchema { // ! TODO verify and refactor
  A: string,
  B: string,
  C: string,
}

interface PathValidationQuery {
  tierPositionKey?: string,
  tierPositionLabel?: string,
  sitemap: PageRoute,
  serializedUrlPath: SerializedAnnexRouteSchema
}

// TODO: SHOULD BE COMING FROM THE ANNEX.CONFIG
const TIER_SEQUENCE_INDEX = {
  A: 'APPLE',
  B: 'BANANA',
  C: 'COOK'
};

const validateRouteForTier = async function(pathValidationQuery: PathValidationQuery):Promise<ContentResult> {
  const {tierPositionKey, tierPositionLabel, sitemap, serializedUrlPath} = pathValidationQuery;
  
  // TODO: ABSTRACT THE DERIVED TIER PROGRESSION
  let tierPosition;
  let tierSequence;
  let indexOfTargetTier;

  // TODO: ACCOUNT FOR DEFAULT AND ALIAS tierPosition(s)
  // TODO: ERROR IF NEITHER KEY OR LABEL WAS PROVIDED
  if (tierPositionKey) {
    tierPosition = tierPositionKey;
    tierSequence = Object.keys(TIER_SEQUENCE_INDEX);
    indexOfTargetTier = tierSequence.indexOf(tierPosition);
  } else if (tierPositionLabel) {
    // should be using tierPositionlabel...
    tierPosition = tierPositionLabel;
    tierSequence = Object.values(TIER_SEQUENCE_INDEX);
    indexOfTargetTier = tierSequence.indexOf(tierPosition);
  } else {
    // TODO: HANDLE NO POSITION PROVIDED ERROR
  }

  const tierProgression = tierSequence.slice(0, indexOfTargetTier + 1)
  //

  console.log('>> TEST: What is the TIER_PROGRESSION:', tierProgression);

  const tempRouteResults = [];

  // SEGMENT CONFIG DRILL DOWN >>>
  const pageRouteSequence = await tierProgression.map((currentTier: string, i: number) => {
    const requestedRouteSlug = serializedUrlPath[currentTier];

    // Find targetTierConfig by routeTier index & routeSlug match from parent
    const parentTierRouteConfig = (i === 0) ? sitemap : tempRouteResults[i - 1];

    console.log('>> >> TEST parentTierRouteConfig:', currentTier, parentTierRouteConfig);

    const targetRoute = parentTierRouteConfig.subRoutes.filter((config: { routeTier: string; routeSlug: string; }) => {
      return config.routeTier === currentTier && config.routeSlug === requestedRouteSlug;
    })[0];

    // TODO: ERROR HANDLE FOR NULL RESULT

    tempRouteResults.push(targetRoute);
    return targetRoute;
  });

  // ! All tiers must be satisfied w/ a config
  const allTiersAreResolved = pageRouteSequence.every((config) => {
    return config !== undefined; // TODO: or empty() util
  });

  // ! Target config was the match found for the last tier designation
  const targetPageRoute = pageRouteSequence.filter(config => config && config.routeTier === tierPosition)[0];

  return {
    // state
    allTiersAreResolved,
    // models
    tierPosition,
    tierSequence,
    targetPageRoute,
    pageRouteSequence
  };
}

// - for dynamic page hydration management
// todo: make pageRequestResult interface
const fulfillDynamicContentRequest = async function(pathValidationQuery: PathValidationQuery) :Promise<ContentResult> {
  try {
    // STAGE 1: VALIDATE ROUTE - on PAGE_MODEL
    const validatedPageModel = await validateRouteForTier(pathValidationQuery);
  
    if (!validatedPageModel.allTiersAreResolved) {
      // FAIL:
      const { tierPosition, targetPageRoute: { routeSlug }} = validatedPageModel;
      console.error(`(!)404 - Tier: ${tierPosition} Route Slug: ${routeSlug} - ROUTE IS NOT VALID(!)`);
      throw new Error(`Could not find Tier: ${tierPosition} Route Slug: ${routeSlug} segment`);
    }

    // STAGE 2: HYDRATE contentModel(s) FOR ALL TIERS - on PAGE_MODEL
    const hydratedPageModel = await annexContentDriver.collectContentForDynamic(validatedPageModel);

    // TODO: LOGGER - VERBOSE INFO >>
    // hydratedPageModel.collectedRoutes.forEach(routeConfig => console.table(routeConfig));

    // Validate that all content is collected
    if (!hydratedPageModel.allContentModelsAreResolved) {
        // FAIL: 
        // todo: test missing content fail over
    } else {
      hydratedPageModel.success = true;
    }

    return hydratedPageModel;
  } catch(err) {
    // todo: test error handling
    // todo: infra error logging goes here

    // page.success = false;
    // page.errors = [err];

    // ! return  a dummy error ContentResult for testing;
  }
}

export default { validateRouteForTier, fulfillDynamicContentRequest };