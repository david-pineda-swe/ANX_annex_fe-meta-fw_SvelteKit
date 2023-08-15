<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import { splitRequirements } from './util/split-requirements';
  import { shouldShow } from './util/should-show';

  import StandardInputIndex from './standard/_input-index.svelte';
  import InputBaseLayout from './input-base-layout.svelte';

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { fi, node } = splitRequirements(inputReqs);
</script>

{#if shouldShow(node)}
  <InputBaseLayout {node}>
    <!-- TODO - PASS OUTLINE TO THIS TIER FOR "inputSetType" -->
    <StandardInputIndex {inputReqs} />
  </InputBaseLayout>
{/if}
