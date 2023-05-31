<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import type { GrayMatterFile } from 'gray-matter';

  export let mdInsert: GrayMatterFile<string> = null;
  export let targetStaticContent: string = null;

  const renderContent = (targetStaticContent) ? targetStaticContent : mdInsert.content;

</script>

<!-- TODO - MD COMPONENT RENDERING - SEE NOTION INTEGRATION NOTES (MDSVEX) -->
<SvelteMarkdown source={renderContent}/>