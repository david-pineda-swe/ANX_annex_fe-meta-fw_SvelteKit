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

  const { id, classes } = node; // TODO - FIGURE OUT $status.disabled
  const derivedListClasses = (classes) ? ` ${classes}` : '';

  //
  const { dataPointKey, targetActionParams: { valueOptions } } = node;
  let radioOptions = [...valueOptions];

  node.status.subscribe((data: any) => {
    radioOptions = radioOptions.map((ro) => {
      return {
        ...ro,
        ...{
          selected: data.selected === ro.value
        }
      }
    });
  });

  //
  const handleSelection = (event: any) => {
    inputHandler.updateSelected(event);
    inputHandler.useTargetAction(event);
  }

  // TODO - FIGURE OUT $status.disabled
</script>

<div class={`radio-btn-list${derivedListClasses}`}>
  {#each radioOptions as rbo}
    <div class="radio-btn-container {(rbo.selected) ? 'checked' : ''}">
      <label for={rbo.id}>
        {rbo.label}
      </label>
      <input
        type="radio"
        id={`${id}-${rbo.id}`}
        class={`form-radio-btn radio-input`}
        name={dataPointKey}
        value={rbo.value}
        on:click={(e) => handleSelection(e)}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .radio-btn-list {
    display: flex;
    .radio-btn-container {
      position: relative;
      display: flex;
      input[type="radio"].form-radio-btn {
        opacity: 0;
      }
    }
  }
</style>