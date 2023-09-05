<script lang="ts">
  import { isEmpty } from "@annexjs/utils";
  import TierA_Fieldset from "./tier-A-fieldset.svelte";

  export let formInterface: any;
  export const fi = formInterface;
  
  const { _formId, _hasRequiredFields, _defaultSubmitActivated, _formLevelErrors, handleFormSubmission } = fi;

  const useDefaultSubmit = !fi.hasTargetSubmitButton();
  $: disabled = !$_defaultSubmitActivated;

  $: formHasErrors = !isEmpty($_formLevelErrors);
  $: checkFormHasErrors = (formHasErrors) ? ' has-errors' : '';

  $: plusDerivedClasses = `${checkFormHasErrors}`;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleFormSubmission(event);
  };
</script>



<div class="form-content pre-block">
  <!-- TODO - consider state/scenario slots - toasts and validation messaging -->
  <slot />
</div>

<div class="form-status-hud">
  {#if _hasRequiredFields}
    <div>* indicates required field</div>
  {/if}
</div>

<form
  id={fi._formId}
  class={`formation ${fi._formClasses}${plusDerivedClasses}`}
  on:submit={e => handleSubmit(e)}
>

  <TierA_Fieldset {fi}/>

  {#if useDefaultSubmit}
    <div class={`form-field${(disabled) ? ' disabled': ''}`}>
      <!-- TODO - form errors list HERE -->
      <button
        type="submit"
        id={`formation-submit-default${_formId ? `-${_formId}` : ''}`}
        class="form-submit-btn default primary w-full"
        {disabled}
      >
      {#if formHasErrors}
        Invalid Form
      {:else}
        Submit
      {/if}
    </button>
    </div>
  {/if}

  {#if formHasErrors}
    <ul class="show-list form errors">
      {#each $_formLevelErrors as error}
        <li class="error-message">
          {error.label}: {error.message}
        </li>
      {/each}
    </ul>
  {/if}
</form>

<div class="form-content post-block">
  <!-- TODO - consider state/scenario slots - toasts and validation messaging -->
  <!-- <slot /> -->
</div>



<style lang="scss">
  .form-status-hud {
    display: flex;
    justify-content: flex-end;
    color: white;
  }
  .form-content {
    margin-bottom: var(--block-bottom-margin);
  }
  .formation {
    margin-bottom: var(--block-bottom-margin);
  }
</style>
