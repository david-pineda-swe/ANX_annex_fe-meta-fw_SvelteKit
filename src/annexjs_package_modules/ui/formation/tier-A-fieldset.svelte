<script lang="ts">
    import { shouldShow } from "./util/should-show";

    import TierB_Fieldgroup from "./tier-B-fieldgroup.svelte";
    import TierC_Input from "./tier-C-input.svelte";

    // X SAMPLE
    const formNodes = []; // controller.outline.layouts.formNodes = []
</script>



{#each formNodes as node}

    <!-- TODO - PRE/POST HRs -->

    {#if node.type === 'FIELDSET' && shouldShow(node)}
        <fieldset class="form-fieldset {node.classes}">
            <legend>{node.legend}</legend>

            {#each node.subNodes as subNode}
                 {#if subNode.type === 'FIELDGROUP' && shouldShow(node)}
                      <TierB_Fieldgroup node={subNode}/>
                 {/if}
     
                 {#if subNode.type === 'INPUT' && shouldShow(node)}
                      <TierC_Input node={subNode}/>
                 {/if}
                 <!-- TODO - GRACEFUL FAIL FOR NOTHING MATCHED -->
            {:else}
                 <!-- TODO - empty list -->
            {/each}
        </fieldset>
    {:else if node.type === 'FIELDGROUP' && shouldShow(node)}
         <TierB_Fieldgroup {node}/>
    {:else if node.type === 'INPUT' && shouldShow(node)}
        <TierC_Input node={node}/>
    {:else}
        <!-- TODO - GRACEFUL FAIL -->
        <h3>There was Nothing to render! sorry</h3>
    {/if}
{:else}
    <h3>There was Nothing to iterate over and render! sorry</h3>
{/each}



<style lang="scss">
    /* your styles go here */
</style>
