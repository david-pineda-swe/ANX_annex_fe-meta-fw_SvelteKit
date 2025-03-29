<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const { node } = formTier;
  const { id, classes, label, status } = node;
  const inputHandler = new FormationInputHandler(formTier);
</script>
 
<button
  type="button"
  {id}
  class={`form-btn primary w-full ${classes}`}
  disabled={$status.disabled}
  on:click={(e) => inputHandler.useTargetAction(e)}
>
  {label}
</button>