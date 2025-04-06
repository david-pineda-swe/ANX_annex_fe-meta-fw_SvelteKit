<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { isEmpty } from "annex/utils";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const { fi, node } = formTier;
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
