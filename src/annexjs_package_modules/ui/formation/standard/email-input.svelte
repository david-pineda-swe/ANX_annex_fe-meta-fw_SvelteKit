<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { node } = splitRequirements(inputReqs);
  const inputHandler = new FormationInputHandler(inputReqs);

  // value={targetValue}
</script>

<input
  type="email"
  id={node.id}
  class={node.classes}
  name={node.dataPointKey}
  placeholder={node.placeholder}
  disabled={node.status.disabled}
  on:focusout={(e) => inputHandler.validateLastEntry(e)}
/>

