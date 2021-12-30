<script context="module" lang="ts">

  import { annexRouter } from '@annex/core';
  import { ProtoSiteGraph as SiteGraph } from '$lib/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP >>>

    const route = await annexRouter.validatePathRequest({
      routeProgression: ['A', 'B'],
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

    //TODO: STAGE 2 DATA COLLECT IN ADAPTER
    const contentGraph = {
      contentId: 'fdsa', 
      pageId: 'asdf',
      contentFor: 'material-icons',
      someData: 'foo',
      contentBlocks: [
        // NOTE: Section Components
        {
          header: 'Material Icons',
          subHeader: 'Some stuff about the feature',
          layoutClass: 'single-col', // note: ['single-col', 'double-col', 'single-row', etc]
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