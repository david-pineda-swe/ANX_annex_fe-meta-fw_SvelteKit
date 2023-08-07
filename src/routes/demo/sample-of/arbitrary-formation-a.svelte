<script>
    // NOTE - Formation Sample instance
    import FormInterface from "@annexjs/ui/formation/_form-interface";
    import FormPlotter from "@annexjs/ui/formation/_form-plotter.svelte";
    
    // NOTE - CUSTOM SCENARIO PROPS FROM PARENT CONTEXT GO HERE <<< 
    
    const Form_A = new FormInterface({
        formInstance: "ARB_TEST_FORM_A"
    });
    console.log(">> FORMATION_A SAMPLE WORKS!!");

    Form_A.testInstance();
</script>



<FormPlotter
    formId={Form_A._formInstance}
    supportClasses={"test support-classes"}
>
    <!-- TODO - Plan for multiple slot injection -->
    <h2>Test form content slot</h2>
</FormPlotter>



<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->