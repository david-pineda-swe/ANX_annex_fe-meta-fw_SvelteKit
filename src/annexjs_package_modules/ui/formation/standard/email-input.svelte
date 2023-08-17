<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(inputReqs);
  const { node } = splitRequirements(inputReqs);
  const {id, classes, dataPointKey, placeholder, status } = node;
  // value={targetValue}
</script>

<input
  type="email"
  {id}
  class={classes}
  name={dataPointKey}
  {placeholder}
  disabled={$status.disabled}
  required={$status.required}
  on:focusout={(e) => inputHandler.validateLastEntry(e)}
/>

