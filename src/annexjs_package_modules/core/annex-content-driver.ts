// TODO: CONSIDER SURPLUS META REMOVAL IF IN DISPLAY/PERFORMACE MODE
//x TEMPORARY FIXTURE FOR DEVELOPMENT >>>

// TODO: CONCEPTUALIZE A STATIC CMS CONVENTION 
// import { contentModel as demoContentModel } from '$pec/fixtures/content-graph/material-icons';

const collectContentForDynamic = async function(pageModel: PageModelResult):Promise<PageModelResult> {
  const { targetPageRoute, pageRouteSequence } = pageModel;
  let primaryContentIsResolved = false;
  let allSecondaryContentIsResolved = false;
  let allContentIsResolved = false;
  
  try {
    // TODO: LOGGER - VERBOSE INFO >>

    // A.) COLLECT TARGET ROUTE PRIMARY CONTENT
    // TODO: USE "SHARED" SINGLE ASYNC REQUEST METHOD
    // via targetPageRoute.content.contentId (service.requestForContentModel)
    // const requestForPrimaryContent = await {
    //   success: true,
    //   result: demoContentModel // DEMO: fixture <<< 
    // };

    // TODO: if (!requestForPrimaryContent.success) =>
    // FAIL out
    // else CONTINUE...
    // ! MOCKING THE REQUEST AND RESPONSE RESULT
    primaryContentIsResolved = true;
    // targetPageRoute.content = requestForPrimaryContent.result;

    // B.) COLLECT REMAINING SECONDARY CONTENT
    // X: ABSTRACT
    let hasErrors = false;
    const hydratedRoutes = await pageRouteSequence.map((pageRoute) => {
      // TODO: USE .promiseAll() >
      // TODO: REQUEST FOR EACH SUB [pageRouteSequence]
      if (pageRoute.content.nodeId === targetPageRoute.content.nodeId) {
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

// // //

export default { collectContentForDynamic };