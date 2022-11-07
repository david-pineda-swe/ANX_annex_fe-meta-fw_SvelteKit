// TODO: CONSIDER SURPLUS META REMOVAL IF IN DISPLAY/PERFORMACE MODE
//x TEMPORARY FIXTURE FOR DEVELOPMENT >>>

// TODO: CONCEPTUALIZE A STATIC CMS CONVENTION 
// import { contentModel as demoContentModel } from '$pec/fixtures/content-graph/material-icons';

export const collectDynamicContentFor = async function(pageModel: PageModelResult):Promise<PageModelResult> {
  const { pageRouteSequence } = pageModel;
  let primaryContentIsResolved = false;
  let allSecondaryContentIsResolved = false;
  let allContentIsResolved = false;
  
  try {
    // TODO: LOGGER - VERBOSE INFO >>

    // A.) COLLECT TARGET ROUTE PRIMARY CONTENT
    // TODO: USE "SHARED" SINGLE ASYNC REQUEST METHOD
    // via target_x_PageRoute.content.contentId (service.requestForContentModel)
    // const requestForPrimaryContent = await {
    //   success: true,
    //   result: demoContentModel // DEMO: fixture <<< 
    // };

    // TODO: if (!requestForPrimaryContent.success) =>
    // FAIL out
    // else CONTINUE...
    // ! MOCKING THE REQUEST AND RESPONSE RESULT
    primaryContentIsResolved = true;
    // target_x_PageRoute.content = requestForPrimaryContent.result;

    // B.) COLLECT REMAINING SECONDARY CONTENT
    // X: ABSTRACT
    let hasErrors = false;
    const hydratedRoutes = await pageRouteSequence.map((pageRoute, sequenceIndex) => {
      // TODO: USE .promiseAll() >
      // TODO: REQUEST FOR EACH SUB [pageRouteSequence]
      if (sequenceIndex === 0) { // << First PAGE_ROUTE.CONTENT was already collected
        // Bypass and re-use previously collected pageRoute contentModel
        return {...pageRoute};
      } else {
        // Collect contentModel(s) for current route.content.contentId (service.requestForContentModel)
        // TODO: USE "SHARED" SINGLE ASYNC REQUEST METHOD
        const requestForSecondaryContent = {
          success: true,
          result: { // DEMO: fixture <<<  // X replace with mock method
            contentId: 'static-demo-content',
            meta: {
              notes: 'demo',
            },
            schema: []
          },
          error: 'This is a test error for secondary contentModel Request'
        }

        if (!requestForSecondaryContent.success) {
          hasErrors = true;

          // FAIL: RECORD ControlError TO LOGGER AND PAGE MODEL RESULT
          
          // TODO: RECORD ERROR to LOGGER
          const { routeTier, routeSlug } = pageRoute;
          
          pageRoute.error = {
            severity:'high', // TODO: USE => warn, hign, priority
            process: `hydratedRoutes - ${routeTier}: ${routeSlug}`,
            error: requestForSecondaryContent.error
          };
        } else {
          // OK
          pageRoute.contentModel = requestForSecondaryContent.result;
        }

        return pageRoute;
      }
    });

    const requestForHydratedRoutes = {
      hasErrors,
      routeResults: hydratedRoutes
    }

    // X <<<

    if (requestForHydratedRoutes.hasErrors) {
      // FAIL out
      // TODO: ?
    } else {
      // OK
      allSecondaryContentIsResolved = true;
      if (primaryContentIsResolved && allSecondaryContentIsResolved) {
        allContentIsResolved = true;
      }
    }

    // Recapture pageModel type for return
    const hydratedPageModel = {...pageModel, ...{
      allContentIsResolved
    }};

    // TODO: LOGGER - VERBOSE INFO >>
    // console.log('>> RESULT OF hydratedPageModel:', hydratedPageModel);
    
    return hydratedPageModel;

  } catch (err) {
    // TODO: INTEGRATE LOGGER ERROR HANDLING
    // add errors to pageModel for graceful failing
    return pageModel;
  }
};

export const stackNestedContentStructure = async function(pageModel: PageModelResult, targetTier: string):Promise<PageModelResult> {
  const { pageRouteSequence } = pageModel;
  let independentRouteMarked = false;

  // C into => B into => A
  const contentStructure = pageRouteSequence.reverse().reduce((lastTierContent, pageRoute: PageRoute ) => {
    const { tier, content, flowControl: { D_published, E_renderAsParentRoute, F_renderAsIndependentRoute } } = pageRoute;
    
    const isIndependentTargetTier = F_renderAsIndependentRoute && tier === targetTier;
    const noPreviousContent = lastTierContent === null;
    const shouldProvideParentTierContent = !independentRouteMarked && lastTierContent && E_renderAsParentRoute;
    const provideContent = (noPreviousContent || shouldProvideParentTierContent) && D_published;
    
    const contentTier = {
      tier,
      content: (provideContent) ? content : null,
      subRouteContent: (lastTierContent) ? lastTierContent : null
    }
    
    if (isIndependentTargetTier) {
      // ! OVERRIDE AND REMOVE SUB ROUTE CONTENT
      independentRouteMarked = true;
      contentTier.subRouteContent = null;
    }

    return contentTier;
  }, null);

  return {
    ...pageModel,
    ...{
      contentStructure,
      success: true
    }
  };
};

export default { collectDynamicContentFor, stackNestedContentStructure };