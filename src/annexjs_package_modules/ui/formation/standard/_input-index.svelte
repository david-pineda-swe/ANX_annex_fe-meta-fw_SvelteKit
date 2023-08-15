<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  
  import EmailInput from "./email-input.svelte";
  import TextInput from "./text-input.svelte";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { fi, node } = splitRequirements(inputReqs);
</script>

{#if node.inputType === "EMAIL"}  
  <EmailInput {inputReqs}/>
{:else if node.inputType === "TEXT"}  
  <TextInput {inputReqs}/>
{:else}
  <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
  <h3>Input not supported!</h3>
{/if}
