<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(formTier);
  const { fi, node } = formTier;
  const { _formData } = fi;
  const {id, classes, dataPointKey, placeholder, status } = node;

  // autocomplete
  // value={targetValue} // TODO - consider prepop
</script>

<input
  type="text"
  {id}
  class={classes}
  {placeholder}
  name={dataPointKey}
  value={$_formData[dataPointKey]}
  required={$status.required}
  disabled={$status.disabled}
  on:focusout={(e) => inputHandler.updateTextEntry(e)}
/>
