<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const { node } = splitRequirements(inputReqs);
  const { id, classes, label, status } = node;
  const inputHandler = new FormationInputHandler(inputReqs);
</script>
 
<button
  type="button"
  {id}
  class={`form-btn ${classes}`}
  disabled={$status.disabled}
  on:click={(e) => inputHandler.useTargetAction(e)}
>
  {label}
</button>