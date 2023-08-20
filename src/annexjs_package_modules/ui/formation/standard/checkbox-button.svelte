<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";
  import IconIndex from "@annexjs/ui/copy/icon-index.svelte";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(inputReqs);
  const { node } = splitRequirements(inputReqs);
  const {id, description, classes, dataPointKey, status } = node;

  const handleCheckboxSelection = (event: any) => {
    inputHandler.updateCheckbox(event);
    inputHandler.useTargetAction(event);
  }
  // value={targetValue} // TODO - consider prepop
</script>

<div class="checkbox-btn-container{($status.checked) ? ' checked' : ''}">
  <input
    type="checkbox"
    {id}
    class={`form-checkbox-btn ${classes}`}
    name={dataPointKey}
    checked={$status.checked}
    disabled={$status.disabled}
    on:click={(e) => handleCheckboxSelection(e)}
  />

  <label for={node.id}>
    {description}
  </label>

  <span class="check-helper">
    <IconIndex designation={`ICONIFY_mdi:check-bold_medium|s2|white`}/>
  </span>

</div>

<style lang="scss">
  .checkbox-btn-container {
    .check-helper {
      position: absolute;
      top: 0px;
      left: -12px;
      display: none;
    }

    &.checked {
      .check-helper {
        display: block;
      }
    }
  }

</style>