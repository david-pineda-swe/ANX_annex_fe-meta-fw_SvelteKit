<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import TierA_Fieldset from './tier-A-fieldset.svelte';
  import TierC_Input from './tier-C-input.svelte';
  import { shouldShow } from './util/should-show';

  export let inputReqs: InputRequirements;
  const { fi, node } = inputReqs;
</script>

<div class="form-fieldgroup {node.classes}">
  {#each node.subNodes as n}
    {#if n.type === 'FIELDSET' && shouldShow(n)}
      <TierA_Fieldset inputReqs={{ fi, node: n }} />
    {:else}
      <TierC_Input inputReqs={{ fi, node: n }} />
    {/if}
  {:else}
    <!-- TODO - empty list -->
  {/each}
</div>
