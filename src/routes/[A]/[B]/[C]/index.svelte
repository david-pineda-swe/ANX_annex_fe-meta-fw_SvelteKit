<script context="module" lang="ts">

  import { annexRouter } from '@annex/core';
  import { ProtoSiteGraph as SiteGraph } from '$lib/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR >>>

    const route = await annexRouter.validatePathRequest({
      routeProgression: ['A', 'B', 'C'],
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

    if (!route.allTiersAreSatisfied) {
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
        route
      } };
    }
  }
</script>