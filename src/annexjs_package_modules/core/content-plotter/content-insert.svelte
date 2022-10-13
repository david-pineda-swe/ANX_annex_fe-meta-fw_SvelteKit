<script lang="ts">
  import MarkdownBlock from "./content-insert/markdown-block.svelte";

  export let contentSegment: any; // TODO - type cast this <<<
  const {component: {componentTag, element: {mdInsert}}} = contentSegment;
</script>

{#if componentTag === 'md-block' && mdInsert}
  <MarkdownBlock {mdInsert}/>
{/if}