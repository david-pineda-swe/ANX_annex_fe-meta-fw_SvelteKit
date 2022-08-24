<script lang="ts">
  import ErrorOutDefault from '@annexjs/core/content-caster/error-out-default.svelte';

  export let pageModel;

  const { success, allContentIsResolved, allTiersAreResolved } = pageModel;

  let erroredOut: boolean;
  let header: string;
  let subHeader: string;
  let contentStructure: any; // TODO - type or interface for | also null default
  
  // 1.) verify fulfillment
  if (!success) {
    // FAIL > 
    erroredOut = true;
    if (!allTiersAreResolved) {
      header = 'Sorry, Wrong Page!';
      subHeader = 'The route you are trying to reach is not available. Please got to the home page or check if the URL is correct.'
    } else if (!allContentIsResolved) {
      header = 'Oh No! This page is broken!';
      subHeader = 'There was an error trying to collect the content required for this page. Please refresh the page or try again later.'
    } else {
      header = 'Ooops!'
      subHeader = 'Please excuse the mess. Something went wrong.'
    }

    contentStructure = {
      header,
      subHeader
    };
  } else {
    // OK > 
    // 2.) Verify and validate pageRoute model
    // 2-a.) Verify flow control
    // VERIFY ROUTE RELATED CONCERNS
    // 2-b.) // TODO - singular or nested page route via flowControl.e_subRoutesRender
    // 3.) Push pageModel.targetPageRoute.content => contentlooper
  }

  export const contentFulfillment = {
    erroredOut,
    contentStructure
  }
</script>

{#if contentFulfillment.erroredOut}
  <ErrorOutDefault contentFulfillment={contentFulfillment}/>
{:else}
  <h1>I shoud start on the CONTENT_CASTER.CONTENT_LOOPER next...</h1>
{/if}