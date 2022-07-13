//x TEMPORARY FIXTURE FOR DEVELOPMENT >>>
import { contentModel as demoContentModel } from '$pec/fixtures/content-graph/material-icons';

const collectContentForDynamic = async function(contentResult: ContentResult):Promise<ContentResult> {
  const { targetPageRoute, pageRouteSequence } = contentResult;
  let primaryContentIsResolved = false;
  let allSecondaryContentIsResolved = false;
  let allContentModelsAreResolved = false;
  
  try {
    // TODO: LOGGER - VERBOSE INFO >>
    // console.log('>> Start collectContentForDynamic(contentResult):', contentResult);

    // A.) COLLECT TARGET ROUTE PRIMARY CONTENT
    // TODO: USE "SHARED" SINGLE ASYNC REQUEST METHOD
    // via targetPageRoute.contentId (service.requestForContentModel)
    const requestForPrimaryContent = await {
      success: true,
      result: demoContentModel // DEMO: fixture <<< 
    };

    // TODO: if (!requestForPrimaryContent.success) =>
    // FAIL out
    // else CONTINUE...
    primaryContentIsResolved = true;
    targetPageRoute.contentModel = requestForPrimaryContent.result;

    // B.) COLLECT REMAINING SECONDARY CONTENT
    // X: ABSTRACT
    let hasErrors = false;
    const hydratedRoutes = await pageRouteSequence.map((pageRoute) => {
      // TODO: USE .promiseAll() >
      // TODO: REQUEST FOR EACH SUB [pageRouteSequence]
      if (pageRoute.contentId === targetPageRoute.contentId) {
        // Bypass and re-use previously collected pageRoute contentModel
        return {...pageRoute};
      } else {
        // Collect contentModel(s) for current route.contentId (service.requestForContentModel)
        // TODO: USE "SHARED" SINGLE ASYNC REQUEST METHOD
        const requestForSecondaryContent = {
          success: true,
          result: { // DEMO: fixture <<< 
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
        allContentModelsAreResolved = true;
      }
    }

    // Recapture contentResult type for return
    const hydratedPageModel = {...contentResult, ...{
      allContentModelsAreResolved,
      collectedRoutes: hydratedRoutes
    }};

    // TODO: LOGGER - VERBOSE INFO >>
    // console.log('>> RESULT OF hydratedPageModel:', hydratedPageModel);
    
    return hydratedPageModel;

  } catch (err) {
    // TODO: INTEGRATE LOGGER ERROR HANDLING
    // add errors to contentResult for graceful failing
    return contentResult;
  }
};

// // //

export default { collectContentForDynamic };