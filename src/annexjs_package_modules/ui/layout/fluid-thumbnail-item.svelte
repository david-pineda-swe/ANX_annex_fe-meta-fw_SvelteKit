<script lang="ts">
  export let tile: any = {};
  export let columnClasses: string = '';
  // console.log('>> WORKING TILE:', tile);
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
    min-width: 75px;
    min-height: 75px;
    border: 1px solid white;

    // d: 75, sm: 150, md: 225, lg: 300

    &.sm {
      width: 150px;
      height: 150px;
    }
    
    &.md {
      width: 225px;
      height: 225px;
      flex: 0 0 225px; // flex-grow, flex-shrink, flex-basis
    }
    &.lg {
      width: 300px;
      height: 300px;
      flex: 0 0 300px;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->