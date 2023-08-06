<script lang="ts">
    // your script goes here

    import FieldgroupPlotter from "./fieldgroup-plotter.svelte";
    import InputPlotter from "./input-plotter.svelte";

    const formNodes = []; // controller.outline.layouts.formNodes = []
</script>



{#each formNodes as node}

    <!-- TODO - PRE/POST HRs -->

    {#if node.type === 'FIELDSET' && !node.hide}
        <fieldset class="form-fieldset {node.classes}">
            <legend>{node.legend}</legend>

            {#each node.subNodes as subNode}
                 {#if subNode.type === 'FIELDGROUP' && !node.hide}
                      <FieldgroupPlotter node={subNode}/>
                 {/if}
     
                 {#if subNode.type === 'INPUT' && !node.hide}
                      <InputPlotter node={subNode}/>
                 {/if}
            {:else}
                 <!-- TODO - empty list -->
            {/each}
        </fieldset>
    {/if}

    {#if node.type === 'FIELDGROUP' && !node.hide}
         <FieldgroupPlotter {node}/>
    {/if}

    {#if node.type === 'INPUT' && !node.hide}
        <InputPlotter node={node}/>
    {/if}
{/each}



<style lang="scss">
    /* your styles go here */
</style>
