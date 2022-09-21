<script lang="ts">
  import ContentPlotter from '@annexjs/core/content-plotter/render-controller.svelte';
  export let data: DynamicRouteData;
</script>

<ContentPlotter pageModel={data.pageModel}/>