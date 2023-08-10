<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "./util/split-requirements";
  import TierC_Input from "./tier-C-input.svelte";

  export let inputReqs: InputRequirements = null;
  const { fi, node } = splitRequirements(inputReqs);
</script>

<div class="form-fieldgroup {node.classes}">
    {#each node.subNodes as subNode}
        <TierC_Input inputReqs={{fi, node: subNode}}/>
    {:else}
            <!-- TODO - empty list -->
    {/each}
</div>
