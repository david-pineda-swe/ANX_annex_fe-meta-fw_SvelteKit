<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import { shouldShow } from './util/should-show';

  import StandardInputIndex from './standard/_input-index.svelte';
  import InputBaseLayout from './input-base-layout.svelte';

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { node } = formTier;
</script>

{#if shouldShow(node)}
  <InputBaseLayout {node}>
    <!-- TODO - PASS OUTLINE TO THIS TIER FOR "inputSetType" [STANDARD, EXTENDED, DYNAMIC, BETA] -->
    <StandardInputIndex {formTier} />
  </InputBaseLayout>
{/if}
