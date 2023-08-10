<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  
  import TextInput from "./text-input.svelte";

  export let inputReqs: InputRequirements = null;
  const { fi, node } = splitRequirements(inputReqs);
</script>

{#if node.inputType === "TEXT"}  
  <TextInput {inputReqs}/>
{:else}
  <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
  <h3>Input not supported!</h3>
{/if}
