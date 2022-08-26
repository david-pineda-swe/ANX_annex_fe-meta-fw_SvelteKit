<script lang="ts">
  import ErrorOutDefault from '@annexjs/core/content-caster/error-out-default.svelte';

  export let pageModel;

  const { success, allContentIsResolved, allTiersAreResolved } = pageModel;
  export let erroredOut: boolean = !success || !allTiersAreResolved || !allContentIsResolved;

  if (success) {
    // OK > 
    // 2.) Verify and validate pageRoute model
    // 2-a.) Verify flow control
    // VERIFY ROUTE RELATED CONCERNS
    // 2-b.) // TODO - singular or nested page route via flowControl.e_subRoutesRender
    // 3.) Push pageModel.targetPageRoute.content => contentlooper
  }
</script>

{#if erroredOut}
  <ErrorOutDefault {pageModel}/>
{:else}
  <h1>I shoud start on the CONTENT_CASTER.CONTENT_LOOPER next...</h1>
{/if}