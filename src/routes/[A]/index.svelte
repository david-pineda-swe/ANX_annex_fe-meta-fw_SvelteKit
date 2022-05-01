<script context="module" lang="ts">
  // DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters

  import { annexRouter } from '@annexjs/core';
  import { ProtoSiteGraph as SiteGraph } from '$pec/fixtures/site-graph'

  export const load = async (ctx) => {
    // TODO: POSSIBLE ADAPTER FOR SITEMAP>>>

    const route = await annexRouter.validatePathRequest({
      routeProgression: ['A'], // todo: change to "routePath"
      sitemap: SiteGraph.sitemap,
      serializedUrlPath: ctx.page.params
    });

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
        }
      };
    }
  }
</script>
