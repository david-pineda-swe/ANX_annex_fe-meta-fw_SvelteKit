<script lang="ts">
  import TierA_Fieldset from "./tier-A-fieldset.svelte";

  export let formInterface: any;
  export const fi = formInterface;

  const useDefaultSubmit = !fi.hasTargetSubmitButton();

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

<form
  id={fi._formId}
  class={`formation ${fi._formClasses}`}
  on:submit={e => handleSubmit(e)}
>

  <TierA_Fieldset {fi}/>

  {#if useDefaultSubmit}
    <button
      type="submit"
      class="form default submit-btn"
      disabled
    >Submit</button>
  {/if}
</form>

<div class="form-content post-block">
  <!-- TODO - consider state/scenario slots - toasts and validation messaging -->
  <!-- <slot /> -->
</div>



<style lang="scss">
  .form-content {
    margin-bottom: var(--block-bottom-margin);
  }
  .formation {
    margin-bottom: var(--block-bottom-margin);
  }
</style>
