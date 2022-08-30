<script lang="ts">
  import RenderErrorOut from './render-error-out.svelte';
import RenderContentCarriage from './render-content-carriage.svelte';

  export let pageModel;

  // VERIFY PAGE MODEL FULFILLMENT
  const { success, allContentIsResolved, allTiersAreResolved } = pageModel;
  export let erroredOut: boolean = !success || !allTiersAreResolved || !allContentIsResolved;

  if (success) {
    // VERIFY AND VALIDATE CONTENT
    // OK > 
    // 2.) Verify and validate pageRoute model
    // 2-a.) Verify flow control
    // VERIFY ROUTE RELATED CONCERNS
    // 2-b.) // TODO - singular or nested page route via flowControl.e_renderAsParentRoute
    // 3.) Push pageModel.pageRouteSequence[0].content => contentlooper
  }
</script>

{#if erroredOut}
  <!-- FAIL -->
  <RenderErrorOut {pageModel}/>
{:else}
  <!-- OK -->
  <RenderContentCarriage {pageModel}/>
{/if}