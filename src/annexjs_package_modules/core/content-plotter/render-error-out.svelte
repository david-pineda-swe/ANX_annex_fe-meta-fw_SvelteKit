<script lang="ts">
  export let pageModel

  const { allContentIsResolved, allTiersAreResolved } = pageModel;

  let header: string;
  let subHeader: string;
  
  // 1.) verify fulfillment
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
</script>

<h1>{header}</h1>
<h2>{subHeader}</h2>

<style>
  h2 {
    text-align: center;
  }
</style>