<script lang="ts">
  import TierA_Fieldset from "./tier-A-fieldset.svelte";

  export let formInterface: any;
  export const fi = formInterface;
  
  const { _hasRequiredFields, _defaultSubmitActivated } = fi;

  const useDefaultSubmit = !fi.hasTargetSubmitButton();
  $: disabled = !$_defaultSubmitActivated;

  const handleSubmit = (e) => {
    // TODO - If interface submit action was provided or default

    e.preventDefault();
    // TODO - Consider tracking and conversion analytics
    // TEST - DEFAULT FORM FUNC
    console.log("This is a test submit!", e);
    const data = new FormData(e.target);
    console.log('>> DATA FOR PRE-FLIGHT SUBMISSION:',[...data.entries()]);
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
