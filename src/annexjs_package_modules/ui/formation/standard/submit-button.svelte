<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";
  import { isEmpty } from "@annexjs/uitils";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const { fi, node } = splitRequirements(inputReqs);
  const { _formLevelErrors } = fi;
  const { id, classes, label, status } = node;

  $: formHasErrors = !isEmpty($_formLevelErrors);
</script>
 
<button
  type="submit"
  {id}
  class={`form-submit-btn primary w-full ${classes}`}
  disabled={$status.disabled}
>
  {#if formHasErrors}
    Invalid Form
  {:else}
    {label}
  {/if}
</button>
