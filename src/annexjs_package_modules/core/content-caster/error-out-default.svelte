<script lang="ts">
  export let contentFulfillment;
  export const {header, subHeader} = contentFulfillment.contentStructure;
</script>

<h1>{header}</h1>
<h2>{subHeader}</h2>

<style>
  h2 {
    text-align: center;
  }
</style>