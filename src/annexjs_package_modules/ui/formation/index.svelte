<script lang="ts">
    export const formId: string = "";
    export const supportClasses: string = "";

    const handleSubmit = (e) => {
        // TODO - If controller submit action was provided or default


        e.preventDefault();
        // TODO - Consider tracking and conversion analytics
        // 
        console.log("This is a test submit!", e);
    };
</script>


<form
    id={formId}
    class={`formation ${supportClasses}`}
    on:submit={e => handleSubmit(e)}
>
  <slot />

  <!-- TODO - CONDITIONAL DEFAULT SUBMIT BUTTON - if no submit expresion is provided in the outline -->
  <button class="form default submit-btn" type="submit">Submit</button>
</form>



<style lang="scss">
    /* your styles go here */
</style>
