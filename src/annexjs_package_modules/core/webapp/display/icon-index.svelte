<script lang="ts">
  // ICONIFY -
  // DOCS - https://docs.iconify.design/icon-components/svelte/
  // https://www.npmjs.com/package/@iconify/svelte
  // https://github.com/iconify/iconify
  //
  // list icons: https://docs.iconify.design/icons/icon-set-basics.html

  // SVELTE-FA -
  // TODO - REPLACE FA - need a lib with a default export in order to define icon selector dynamically 
  // DOCS - https://cweili.github.io/svelte-fa/
  // https://www.npmjs.com/package/svelte-fa
  // REF - Icon directory by category: https://fontawesome.com/icons/categories

  import Icon from '@iconify/svelte';
  import Fa from 'svelte-fa'; // X
  import { faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons'; // X

  export let designation: string;

  const [iconSelector, librarySelector] = designation.split('_');  
</script>



{#if librarySelector === "FA"}
  {#if iconSelector === 'faSquareCaretLeft'}
  <!-- HACK - REPLACE THIS WORKING EXAMPLE -->
    <Fa icon={faSquareCaretLeft} />
  {/if}
{:else}
  <!-- DEFAULT -->
  <Icon icon={iconSelector} />
{/if}



<style></style>