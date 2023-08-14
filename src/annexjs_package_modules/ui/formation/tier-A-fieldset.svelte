<script lang="ts">
  import { shouldShow } from './util/should-show';

  import TierB_Fieldgroup from './tier-B-fieldgroup.svelte';
  import TierC_Input from './tier-C-input.svelte';

  export let fi: any = null;

  const formNodes = fi._nodes ? fi._nodes : [];
</script>

{#each formNodes as node}
  <!-- TODO - PRE/POST HRs at each tier -->

  {#if node.type === 'FIELDSET' && shouldShow(node)}
    <fieldset class="form-fieldset {node.classes}">
      <legend>{node.legend}</legend>

      {#each node.subNodes as subNode}
        {#if subNode.type === 'FIELDGROUP' && shouldShow(subNode)}
          <TierB_Fieldgroup inputReqs={{ fi, node: subNode }} />
        {/if}

        {#if subNode.type === 'INPUT' && shouldShow(subNode)}
          <TierC_Input inputReqs={{ fi, node: subNode }} />
        {/if}
        <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
      {:else}
        <!-- TODO - empty list -->
      {/each}
    </fieldset>
  {:else if node.type === 'FIELDGROUP' && shouldShow(node)}
    <TierB_Fieldgroup inputReqs={{ fi, node }} />
  {:else if node.type === 'INPUT' && shouldShow(node)}
    <TierC_Input inputReqs={{ fi, node }} />
  {:else}
    <!-- TODO - GRACEFUL FAIL -->
    <h3>There was Nothing to render! sorry</h3>
  {/if}
{:else}
  <h3>There was Nothing to iterate over and render! sorry</h3>
{/each}

<style lang="scss">
  .form-fieldset {
    padding: 15px 0 5px;
    border-top: 1px solid var(--lt-gray-00);
    legend {
      font-weight: bold;
      padding: 0 5px;
    }
  }
</style>
