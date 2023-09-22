<script lang="ts">
  export let tile: any = {};
  export let columnClass: string = 'single';
  console.log('>> WORKING TILE:', tile);
  const { backgroundColor } = tile;

  let style: string = '';

  if (backgroundColor) {
    style = `${style} background-color: ${backgroundColor};`
  }

  let classes: string = `ftn-gallery-tile ${columnClass}`;
  
</script>

<div class={classes} {style}>{tile.title}</div>

<style lang='scss'>
  .ftn-gallery-tile {
    min-width: 100px;
    min-height: 100px;
    border: 1px solid white;

    &.single {
      margin: 0 auto;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->