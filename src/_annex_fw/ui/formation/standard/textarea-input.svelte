<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(inputReqs);
  const { node } = inputReqs;
  const {id, classes, dataPointKey, placeholder, status } = node;

  // autocomplete
  // value={targetValue} // TODO - consider prepop
  // TODO - LOW PRIORIY - ADD CLICK DRAG RESIZING FOR MOBILE
</script>

<textarea
  {id}
  class={classes}
  name={dataPointKey}
  {placeholder}
  disabled={$status.disabled}
  required={$status.required}
  on:focusout={(e) => inputHandler.updateTextEntry(e)}
></textarea>