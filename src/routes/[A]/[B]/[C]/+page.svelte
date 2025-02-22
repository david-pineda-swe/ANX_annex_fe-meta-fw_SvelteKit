<script lang="ts">
  import type { DynamicRouteData } from 'src/global';
  import ContentPlotter from 'annex/core/content-plotter/render-controller.svelte';
  import { contentNavigation } from 'annex/core/webapp/stores/navigation-outlines';
  
  export let data: DynamicRouteData; // = requestedModels
  // console.log('>> TEST DYNAMIC_ROUTE_DATA [C]:', data);

  contentNavigation.set(data.contentNavigation); // STORE SET
</script>

<ContentPlotter pageModel={data.pageModel}/>