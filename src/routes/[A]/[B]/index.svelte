<script context="module" lang="ts">

  import { annexRouter } from '@annex/core';
  import { ProtoSiteGraph as SiteGraph } from '$lib/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP >>>

    // STAGE 1: VALIDATE ROUTE
    let route = await annexRouter.validatePathRequest({
      routeProgression: ['A', 'B'],
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

    // STAGE 2: Collect contentGraph
    //TODO: COLLECT IN ADAPTER
    const contentGraph = {
      contentId: 'fdsa', 
      pageId: 'asdf',
      contentFor: 'material-icons',
      someData: 'foo',
      sections: [
        // NOTE: Section Element Components
        {
          header: 'Material Icons',
          subHeader: 'Some stuff about the feature',
          layoutClass: 'single-col', // example: ['single-col', 'double-col', 'single-row', etc]
          componentType: 'gallery',
          subComponents: [
            // NOTE: Content Sub Components
            {
              label: 'yadda',
              subLabel: 'yadda bing bang', 
              layoutClass: 'portrait',
              componentType: 'feature-card',
              content: [
                // NOTE: last descendant Element list
                // h3 
                // hr 
                // br 
                // p
                // a
                // img
              ]
            }
          ]
        }
      ]
    }

    // NOTE: Merge route and contentGraph for COTNENT_DRIVER iteration and render
    route = {...route, ...{content:contentGraph}};

    console.log(">> WHAT IS ROUTE:", route);
    

    if (!route.allTiersAreSatisfied || !route.config) {
      // FAIL
      console.error(`(!)404: ${route.lastTier} - ROUTE IS NOT VALID(!)`);
      throw new Error(`Could not find tier: ${route.lastTier} segment`);
    } else {
      // OK
      console.log(">> SHOULD RENDER <<");
      console.log(`>> TIER CONFIGS @ ${route.lastTier}:`);
      route.segmentConfigs.forEach(config => console.table(config));
      
      return { 
      props: {
        page: route.config,
        route
      } };
    }
  }
</script>