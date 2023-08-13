<script lang="ts">
  import type { InputRequirements } from "src/global";
  import { splitRequirements } from "../util/split-requirements";

  export let inputReqs: InputRequirements = {
     fi: undefined,
     node: undefined
   };
  const { fi, node } = splitRequirements(inputReqs);
  // disabled
  // on focusOut
  // on change
  // name={node.dataKey} // for validation matching
  // autocomplete
  // required
  // value={targetValue}
  // placeholder={node.placeholder}
</script>

<input
  type="text"
  id={node.id}
  class={node.classes}
/>

