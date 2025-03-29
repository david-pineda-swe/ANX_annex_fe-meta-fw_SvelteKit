<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import TierA_Fieldset from './tier-A-fieldset.svelte';
  import TierC_Input from './tier-C-input.svelte';
  import { shouldShow } from './util/should-show';

  export let formTier: InputRequirements;
  const { fi, node } = formTier;
</script>

<div class="form-fieldgroup {node.classes}">
  {#each node.subNodes as n}
    {#if n.type === 'FIELDSET' && shouldShow(n)}
      <TierA_Fieldset formTier={{ fi, node: n }} />
    {:else}
      <TierC_Input formTier={{ fi, node: n }} />
    {/if}
  {:else}
    <!-- TODO - empty list -->
  {/each}
</div>
