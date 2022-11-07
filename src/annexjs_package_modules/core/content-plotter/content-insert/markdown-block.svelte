<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import type { GrayMatterFile } from 'gray-matter';

  export let mdInsert: GrayMatterFile<string>;

  // TODO - DEBUG LOGGER HERE
  // console.log('TEST MD_INSERT:', mdInsert);

</script>

<!-- TODO - MD COMPONENT RENDERING - SEE NOTION INTEGRATION NOTES -->
<SvelteMarkdown source={mdInsert.content}/>