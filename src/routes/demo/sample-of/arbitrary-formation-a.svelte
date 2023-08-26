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
        },
        handleTestAction_C: (params: any) => {
          console.log('>> USER CHECKED:', params.node.label, params.event.target.checked);
          // console.log(params.fi);
        }
      }
    });

    // X - TESTING
    Form_A.verifyInstance();
</script>

<FormPlotter
    formInterface={Form_A}
>
    <!-- TODO - Plan for multiple slot injection -->
    <h2>Test form content slot</h2>
</FormPlotter>
