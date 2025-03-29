<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";
  import IconIndex from "annex/ui/copy/icon-index.svelte";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(formTier);
  const { node } = formTier;
  const {id, classes, dataPointKey, placeholder, status } = node;

  let toggledPrivate = true;
  $: type = (toggledPrivate) ? 'password' : 'text';

  const toggleInputType = () => {
    toggledPrivate = !toggledPrivate
  };
  // autocomplete
  // value={targetValue} // TODO - consider prepop
</script>

<input
  {type}
  {id}
  class={classes}
  name={dataPointKey}
  {placeholder}
  disabled={$status.disabled}
  required={$status.required}
  on:focusout={(e) => inputHandler.updateTextEntry(e)}
/>
<button
  type="button"
  id="pw-visibility-toggle"
  class="icon-action-btn at-right"
  on:click={() => toggleInputType()}
>
  {#if toggledPrivate}
  <IconIndex designation={`ICONIFY_mdi:eye-outline_medium|s2|white`}/>
  {:else}
  <IconIndex designation={`ICONIFY_mdi:eye-off-outline_medium|s2|white`}/>
  {/if}
</button>