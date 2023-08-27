<script lang="ts">
  import TierA_Fieldset from "./tier-A-fieldset.svelte";

  export let formInterface: any;
  export const fi = formInterface;
  
  const { _hasRequiredFields, _defaultSubmitActivated, handleFormSubmissionFor } = fi;

  const useDefaultSubmit = !fi.hasTargetSubmitButton();
  $: disabled = !$_defaultSubmitActivated;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleFormSubmissionFor(event);
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
  class={`formation ${fi._formClasses}`}
  on:submit={e => handleSubmit(e)}
>

  <TierA_Fieldset {fi}/>

  {#if useDefaultSubmit}
    <div class={`form-field${(disabled) ? ' disabled': ''}`}>
      <!-- TODO - form errors list HERE -->
      <button
        type="submit"
        class="form-submit-btn default primary w-full"
        {disabled}
      >Submit</button>
    </div>
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
