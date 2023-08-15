<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";

  export let inputReqs: InputRequirements = {
    fi: undefined,
    node: undefined
  };
  const { fi, node } = splitRequirements(inputReqs);
  // on focusOut
  // on change
  // x
  // value={targetValue}
</script>

<input
  type="email"
  id={node.id}
  class={node.classes}
  name={node.dataPointKey}
  placeholder={node.placeholder}
  disabled={node.disabled}
/>

