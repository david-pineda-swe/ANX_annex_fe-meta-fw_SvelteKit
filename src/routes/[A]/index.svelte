<script context="module" lang="ts">
  // DOCS: https://kit.svelte.dev/docs#routing-advanced-rest-parameters

  import { testAnnexCore } from '@annex/core';

  import { validateRouteRequest } from '$annex-app/router';
  import { ProtoSiteGraph as SiteGraph } from '$lib/fixtures/site-graph'

  export const load = async (ctx) => {
    testAnnexCore();

    // REQS
    const routeProgression = ['A'];
    // TODO: POSSIBLE ADAPTER FOR SITEMAP>>>
    const { sitemap } = SiteGraph;
    const requestedRouteParams = ctx.page.params;

    const route = await validateRouteRequest({
      routeProgression,
      sitemap,
      requestedRouteParams
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
