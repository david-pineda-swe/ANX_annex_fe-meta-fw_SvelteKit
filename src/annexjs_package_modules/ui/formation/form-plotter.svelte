<script lang="ts">
    import TierA_Fieldset from "./tier-A-fieldset.svelte";

    export let formInterface: any;
    export const fi = formInterface;

    console.log(`>> what fi:`, fi);
    

    const handleSubmit = (e) => {
        // TODO - If interface submit action was provided or default

        e.preventDefault();
        // TODO - Consider tracking and conversion analytics
        // 
        console.log("This is a test submit!", e);
    };
</script>


<form
    id={fi._formId}
    class={`formation ${fi._classes}`}
    on:submit={e => handleSubmit(e)}
>

  <!-- TODO - consider state/scenario slots - toasts and validation messaging -->
  <slot />

  <TierA_Fieldset {fi}/>

  <!-- TODO - CONDITIONAL DEFAULT SUBMIT BUTTON - if no submit expresion is provided in the outline -->
  <button class="form default submit-btn" type="submit">Submit</button>
</form>



<style lang="scss">
    /* your styles go here */
</style>
