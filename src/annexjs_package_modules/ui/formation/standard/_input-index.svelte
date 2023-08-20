<script lang="ts">
  import { isEmpty } from "@annexjs/uitils";
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  
  import CheckboxButton from "./checkbox-button.svelte";
  import CustomButton from "./custom-button.svelte";
  import EmailInput from "./email-input.svelte";
  import PasswordInput from "./password-input.svelte";
  import RadioButton from "./radio-button.svelte";
  import SubmitButton from "./submit-button.svelte";
  import TextInput from "./text-input.svelte";
  import TextareaInput from "./textarea-input.svelte";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { node } = splitRequirements(inputReqs);
  const { inputType } = node;

  const inputIndex: any = {
    CHECKBOX_BTN: CheckboxButton,
    CUSTOM_BTN: CustomButton,
    EMAIL: EmailInput,
    PASSWORD: PasswordInput,
    RADIO_BTN: RadioButton,
    SUBMIT_BTN: SubmitButton,
    TEXT: TextInput,
    TEXTAREA: TextareaInput
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
