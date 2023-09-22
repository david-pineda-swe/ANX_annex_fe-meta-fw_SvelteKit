<script lang="ts">
  export let tile: any = {};
  export let columnClasses: string = 'single';
  console.log('>> WORKING TILE:', tile);
  const { backgroundColor } = tile;

  let style: string = '';

  if (backgroundColor) {
    style = `${style} background-color: ${backgroundColor};`
  }

  let classes: string = `ftn-gallery-tile ${columnClasses}`;
  
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

    &.md {
      width: 150px;
      flex: 0 0 150px; // flex-grow, flex-shrink, flex-basis
    }
    &.lg {
      width: 300px;
      flex: 0 0 300px;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->