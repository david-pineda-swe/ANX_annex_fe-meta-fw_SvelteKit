<script lang="ts">
    // NOTE - Formation Sample instance
    import FormationInterface from "@annexjs/ui/formation/_interface";
    import FormPlotter from "@annexjs/ui/formation/form-plotter.svelte";

    import { formA_outline } from "./arbitrary-formation_outlines";
    
    // NOTE - CUSTOM SCENARIO PROPS FROM PARENT CONTEXT GO HERE <<< 

    // TODO - PROVIDE AND API/STORE CLIENT FOR NETWORK REQUEST HANDLING
    const Form_A = new FormationInterface({
        formOutline: formA_outline,
        targetActions: {
          handleTestAction_A: (params: any) => {
            console.log(`>> THIS IS CUSTOM ACTION A!`);
            console.log(`>> USING PARAMS:`, params);
          },
          handleTestAction_B: (params: any) => {
            console.log('>> USER SELECTED:', params.event.target.value);
          }
        }
        // TODO - CONSIDER FORM LEVEL PRE-LOAD & TRACKING STATE
    });

    // TODO - FINISH BASIC FORM INPUTS
    // TODO - VALIDATION GATE
    // TODO - HANDLE FORM SUBMITION
    // TODO - INTEGRATE ZFD FORM SUBMISSION
    // TODO - STANDARD NETWORK CLIENT
    // TODO - LOOK AT SVELTE COMPONENT PROP SIMPLIFICATION OF INPUT INDEX
    // TODO - LOOK FOR AN API TO TEST AGAINST
    // TODO - REQUEST ERROR HANDLING GEN / SPEC
    // TODO - REQUEST SUCCESS HANDLING AND RESET / PROCESSION

    // TODO - FORM LEVEL ERRORS
    // TODO - DEFAULT ERRORS AND HINTS ON AUGMENTATION
    // TODO - FORM INITIALIZATION schema PRE-LOAD 
    // TODO - FORM STATE TRACKING 
    // TODO - EXTEND CUSTOM_BTN to allow template interpolation from form level state to button.node.label
    // TODO - TARGET FORM LEVEL SCHEMA STATE FOR ALL INPUTS

    // console.log(">> FORMATION_A SAMPLE WORKS!!");
    // Form_A.verifyInstance();
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
