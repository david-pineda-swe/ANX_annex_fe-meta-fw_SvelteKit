<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const { node } = splitRequirements(inputReqs);
  const { id, classes, label, status } = node;
</script>
 
<button
  type="submit"
  {id}
  class={`form-submit-btn primary w-full ${classes}`}
  disabled={$status.disabled}
>
  {label}
</button>
