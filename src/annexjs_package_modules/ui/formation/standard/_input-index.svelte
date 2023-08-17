<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  
  import EmailInput from "./email-input.svelte";
  import TextInput from "./text-input.svelte";
  import { isEmpty } from "@annexjs/uitils";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { node } = splitRequirements(inputReqs);
  const { inputType } = node;

  const inputIndex: any = {
    EMAIL: EmailInput,
    TEXT: TextInput
  };

  const targetComponent = inputIndex[inputType];  
  const hasComponent = !isEmpty(targetComponent);

  if (!hasComponent) {
    console.warn(`>> PROVIDED INPUT_TYPE: "${inputType}" IS NOT SUPPORTED!`);
  }
</script>

{#if hasComponent}
  <svelte:component this={targetComponent} {inputReqs} />
{:else}
  <h3>Input not supported!</h3>
{/if}
