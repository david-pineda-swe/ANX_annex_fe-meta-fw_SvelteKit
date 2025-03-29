<script lang="ts">
  import type { InputRequirements } from 'src/global';
  import TierC_Input from './tier-C-input.svelte';

  export let inputReqs: InputRequirements;
  const { fi, node } = inputReqs;
</script>

<div class="form-fieldgroup {node.classes}">
  {#each node.subNodes as subNode}
    <TierC_Input inputReqs={{ fi, node: subNode }} />
  {:else}
    <!-- TODO - empty list -->
  {/each}
</div>
