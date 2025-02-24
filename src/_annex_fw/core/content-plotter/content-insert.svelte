<script lang="ts">
  import RenderMarkdownWith from "./content-insert/render-markdown-with.svelte";
  import staticContentIndex from "$pec/fixtures/site-graph/content";

  export let contentSegment: any; // TODO - type cast
  const {component: {componentTag, element: {mdInsert}}} = contentSegment;

  let targetStaticContent: string;

  const usingDynamicContent = (componentTag === 'md-block-insert' && mdInsert);
  const usingStaticContent = (componentTag === 'md-block-swap' && mdInsert);

  const swapInsertForTargetContent = async() => {  
    targetStaticContent = staticContentIndex[mdInsert];
    // TODO - NULL CHECK HERE <<<
  };

  if (usingStaticContent) {
    swapInsertForTargetContent();
  }
</script>

{#if usingDynamicContent}
  <RenderMarkdownWith {mdInsert}/>
{/if}

{#if usingStaticContent}
  <RenderMarkdownWith {targetStaticContent}/>
{/if}

<!-- TODO - ACCOUNT FOR CUSTOM FIGURE / FORM OR INTERFACE COMPONENT -->
