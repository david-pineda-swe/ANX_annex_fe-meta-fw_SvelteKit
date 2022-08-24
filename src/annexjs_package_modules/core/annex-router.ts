import { annexContentDriver } from ".";

// import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'
import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph/content-driver-proto'

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
  // routeStructure: PageRoute,
  serializedUrlPath: SerializedAnnexRouteSchema
}

// TODO: SHOULD BE COMING FROM THE ANNEX.CONFIG
const TIER_SEQUENCE_INDEX = {
  A: 'APPLE',
  B: 'BANANA',
  C: 'COOK'
};

const validateRouteForTier = async function(pathValidationQuery: PathValidationQuery):Promise<PageModelResult> {
  const {tierPositionKey, tierPositionLabel, serializedUrlPath} = pathValidationQuery;

  // TODO: POSSIBLE ADAPTER FOR ROUTE_SEQUNECE >>>
  // X should be coming from Svelte store if previously loaded
  // TODO: ACCESS TO SITE-GRAPH
  console.log('>> SITE_GRAPH FIXTURE:', SiteGraph);
  const routeStructure = SiteGraph.routeStructure; // fix <<<<<<<<<<<<<<<<<<<<<<<<<<<<
  

  // TODO: ABSTRACT THE DERIVED TIER PROGRESSION
  let tierPosition: string;
  let tierSequence: Array<string>;
  let indexOfTargetTier: number;

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

  const tempRouteResults = [];

  const pageRouteSequence = await tierProgression.map((currentTier: string, i: number) => {
    let targetRoute: PageRoute;
    const requestedRouteSlug = serializedUrlPath[currentTier];

    if (i === 0) {
      targetRoute = routeStructure;
    } else {
      // Find targetTierRoute by routeTier index & routeSlug match from parent
      const parentTierRoute = tempRouteResults[i - 1];
      targetRoute = parentTierRoute.subRoutes.filter((pageRoute: PageRoute) => {
        const { tier, slug } = pageRoute;
        return tier === currentTier && slug === requestedRouteSlug;
      })[0];

    }

    // TODO: ERROR HANDLE FOR NULL RESULT

    tempRouteResults.push(targetRoute);
    return targetRoute;
  });

  // ! All tiers must be satisfied w/ a PAGE_ROUTE
  const allTiersAreResolved = pageRouteSequence.every((pageRoute) => {
    return pageRoute !== undefined; // TODO: or empty() util
  });
  
  const targetPageRoute = pageRouteSequence.filter(pageRoute => pageRoute && pageRoute.tier === tierPosition)[0];
  
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

const fulfillPageModelRequestedBy = async function(pathValidationQuery: PathValidationQuery):Promise<PageModelResult> {
  try {
    // STAGE 1: VALIDATE URL_PATH for PAGE_ROUTE_SEQUENCE
    const incomingPageModel = await validateRouteForTier(pathValidationQuery);

    if (!incomingPageModel.allTiersAreResolved) {
      // FAIL: (!) No PageRoute model for requested URL path (!) 
      const { tierPosition, targetPageRoute} = incomingPageModel;

      const errorMessage = (incomingPageModel.targetPageRoute)
      ? `(!) 404 - Tier: ${tierPosition} Route Slug: ${targetPageRoute.slug} - ROUTE IS NOT VALID(!)`
      : `(!) No PageRoute model for requested URL path (!) `

      console.error(errorMessage);
      // throw new Error(errorMessage); // FIX <<
      return incomingPageModel
    } else {
      // STAGE 2: HYDRATE contentModel(s) FOR ALL TIERS on PAGE_ROUTE_SEQUENCE
      const hydratedPageModel = await annexContentDriver.collectContentForDynamic(incomingPageModel);
  
      // TODO: LOGGER - VERBOSE INFO >>
      // hydratedPageModel.pageRouteSequence.forEach(routeConfig => console.table(routeConfig));
  
      // Validate that all content is collected
      if (!hydratedPageModel.allContentIsResolved) {
          // FAIL: 
          // todo: test missing content fail over
      } else {
        hydratedPageModel.success = true;
      }
  
      return hydratedPageModel;
    }
  } catch(err) {
    console.log('>> MERP');
    
    // todo: test error handling
    // todo: infra error logging goes here

    // page.success = false;
    // page.errors = [err];

    // ! return  a dummy error ContentResult for testing;
  }
}

export default { validateRouteForTier, fulfillPageModelRequestedBy };