<script lang="ts">
  import { is_empty } from "svelte/internal";

  export let node:any = null;
  const { id, label, inputType, setupConfig, status: input } = node;
  
  const notExcluded = !['SUBMIT_BTN', 'CUSTOM_BTN'].includes(inputType);
  const useLabel = notExcluded && label && !setupConfig?.hideLabel;

  $: isDisabled = $input.disabled;
  $: checkDisabled = isDisabled ? ' disabled' : '';
  
  $: fieldHasErrors = !is_empty($input.errors);
  $: checkHasErrors = (fieldHasErrors) ? ' has-errors' : '';

  $: fieldHasHints = !is_empty($input.hints);
  
  $: plusDerivedClasses = `${checkDisabled}${checkHasErrors}`;
</script>



<div class={`form-field${plusDerivedClasses}`}>
  {#if useLabel}
    <label for={id}>
      {label}
    </label>
  {/if}

  {#if fieldHasErrors}
    <ul class="input-list errors">
      {#each $input.errors as error}
        <li class="error-message">
          {error}
        </li>
      {/each}
    </ul>
  {/if}

  <div class="input-container">
    <slot/>
  </div>

  {#if fieldHasHints && !isDisabled}
    <ul class="input-list hints">
      {#each $input.hints as hint}
        <li class="hint-message">
          {hint}
        </li>
      {/each}
    </ul>
  {/if} 
</div>

<style lang="scss">
  .form-field {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: calc(var(--block-bottom-margin));
    // border: 1px solid red;

    // label {
    //   border: 1px solid green;
    // }

    .input-container {
      margin-bottom: var(--item-bottom-margin);
      // border: 1px solid blue;
    }

    .input-list {
      width: 100%;
      list-style: disc;
      // border: 1px solid fuchsia;
    }
  }
</style>