<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import FormationInputHandler from "../_input-interface";
  import IconIndex from "annex/ui/copy/icon-index.svelte";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(inputReqs);
  const { node } = splitRequirements(inputReqs);
  const {id, classes, label, dataPointKey, setupConfig, status } = node;
  const { onValue, description } = setupConfig;

  $: checked = $status.checked;

  const handleCheckboxSelection = (event: any) => {
    inputHandler.updateCheckbox(event);
    inputHandler.useTargetAction(event);
  }
</script>

<div class="checkbox-btn-container{(checked) ? ' checked' : ''}">
  <span class="check-helper">
    <IconIndex designation={`ICONIFY_mdi:check-bold_medium|s2|white`} on:click={(e) => handleCheckboxSelection(e)}/>
  </span>

  <input
    type="checkbox"
    {id}
    class={`form-checkbox-btn ${classes}`}
    name={dataPointKey}
    value={onValue}
    {checked}
    disabled={$status.disabled}
    on:click={(e) => handleCheckboxSelection(e)}
  />

  <label for={node.id}>
    {#if description}
      {description}
    {:else}
      {label}
    {/if}
  </label>


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