<script lang="ts">
  import { isEmpty } from "annex/utils";

  export let node:any = null;
  const { id, label, inputType, required, contextMeta, status: input } = node;
  
  const notExcluded = !['SUBMIT_BTN', 'CUSTOM_BTN'].includes(inputType);
  const useLabel = notExcluded && label && !contextMeta?.hideLabel;
  const labelCopy = `${label}${(required) ? ' *' : ''}`;

  $: isDisabled = $input.disabled;
  $: checkDisabled = isDisabled ? ' disabled' : '';
  
  $: fieldHasErrors = !isEmpty($input.errors);
  $: checkHasErrors = (fieldHasErrors) ? ' has-errors' : '';

  $: fieldHasHints = !isEmpty($input.hints);
  
  $: plusDerivedClasses = `${checkDisabled}${checkHasErrors}`;
</script>



<div class={`form-field${plusDerivedClasses}`}>
  {#if useLabel}
    <label for={id}>
      {labelCopy}
    </label>
  {/if}

  {#if fieldHasErrors}
    <ul class="show-list input errors">
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
    <ul class="show-list input hints">
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
  }
</style>