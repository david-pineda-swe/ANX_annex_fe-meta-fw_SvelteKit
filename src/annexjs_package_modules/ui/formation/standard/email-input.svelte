<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";

  export let inputReqs: InputRequirements = null;
  const { fi, node } = splitRequirements(inputReqs);
  // disabled
  // on focusOut
  // on change
  // name={node.dataKey} // for validation matching
  // value={targetValue}
  // placeholder={node.placeholder}
</script>

<input
  type="email"
  id={node.id}
  class={node.classes}
/>

