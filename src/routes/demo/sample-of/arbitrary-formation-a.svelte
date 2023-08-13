<script lang="ts">
    // NOTE - Formation Sample instance
    import FormationInterface from "@annexjs/ui/formation/_interface";
    import FormPlotter from "@annexjs/ui/formation/form-plotter.svelte";

    import { formA_outline } from "./arbitrary-formation_outlines";
    
    // NOTE - CUSTOM SCENARIO PROPS FROM PARENT CONTEXT GO HERE <<< 

    // TODO - PROVIDE AND API/STORE CLIENT FOR NETWORK REQUEST HANDLING
    const Form_A = new FormationInterface({
        formOutline: formA_outline
    });

    // console.log(">> FORMATION_A SAMPLE WORKS!!");
    Form_A.verifyInstance();
</script>



<FormPlotter
    formInterface={Form_A}
>
    <!-- TODO - Plan for multiple slot injection -->
    <h2>Test form content slot</h2>
</FormPlotter>



<!-- <style lang="scss">
    /* your styles go here */
</style> -->
