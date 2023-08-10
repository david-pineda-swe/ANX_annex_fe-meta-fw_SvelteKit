<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import { splitRequirements } from './util/split-requirements';
  import { shouldShow } from './util/should-show';
  import StandardInputIndex from './standard/_input-index.svelte';

  export let inputReqs: InputRequirements = null;
  const { fi, node } = splitRequirements(inputReqs);
</script>

{#if shouldShow(node)}
  <!-- TODO - PASS OUTLINE TO THIS TIER FOR "inputSetType" -->
  <!-- TODO - BASE LAYOUT GOES HERE -->
  <StandardInputIndex {inputReqs} />
{/if}

<!-- <style lang="scss">
    /* your styles go here */
</style> -->
