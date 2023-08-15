<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { fi, node } = splitRequirements(inputReqs);

  const inputHandler = new FormationInputHandler(fi);

  // on focusOut
  // on change
  // autocomplete
  // required
  // x
  // value={targetValue}
</script>

<input
  type="text"
  id={node.id}
  class={node.classes}
  name={node.dataPointKey}
  placeholder={node.placeholder}
  disabled={node.disabled}
/>

