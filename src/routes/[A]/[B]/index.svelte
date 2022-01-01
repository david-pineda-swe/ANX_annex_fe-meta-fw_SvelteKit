<script context="module" lang="ts">

  import { annexRouter, annexContentDriver } from '@annex/core';
  import { ProtoSiteGraph as SiteGraph } from '$lib/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP >>>

    // STAGE 1: VALIDATE ROUTE
    let route = await annexRouter.validatePathRequest({
      routeProgression: ['A', 'B'],
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

    // STAGE 2: Collected contentGraph via config.pageId
    route = await annexContentDriver.collectContent(route);

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