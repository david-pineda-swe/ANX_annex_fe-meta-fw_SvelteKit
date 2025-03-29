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
  const { id, classes, dataPointKey, setupConfig: { valueOptions } } = node;

  //
  let radioOptions = [...valueOptions];
  const configuredClasses = (classes) ? ` ${classes}` : '';
  
  _formData.subscribe((data: any) => {
    // TODO - optimize by validating change if dataKey mathces current
    const targetDataPoint = data[dataPointKey];
    radioOptions = radioOptions.map((ro) => {
      return {
        ...ro,
        ...{
          selected: targetDataPoint === ro.value
        }
      }
    });
  });
  
  // TODO - FIGURE OUT $status.disabled
</script>

<div {id} class={`radio-btn-list${configuredClasses}`}>
  {#each radioOptions as rbo}
    <div class="radio-btn-container{(rbo.selected) ? ' checked' : ''}">
      <input
        type="radio"
        id={rbo.id}
        class={`form-radio-btn radio-input`}
        name={dataPointKey}
        value={rbo.value}
        on:click={(e) => inputHandler.updateRadioSelection(e)}
      />
      <label for={rbo.id}>
        {rbo.label}
      </label>
    </div>
  {/each}
</div>

<style lang="scss">
  .radio-btn-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>