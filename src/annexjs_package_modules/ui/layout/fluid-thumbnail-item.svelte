<script lang="ts">
  export let tile: any = {};
  console.log('>> WORKING TILE:', tile);
  const { backgroundColor } = tile;

  let tileStyle: string = '';

  if (backgroundColor) {
    tileStyle = `${tileStyle} background-color: ${backgroundColor};`
  }
  
</script>

<div class="ftn-gallery-tile" style={tileStyle}>{tile.title}</div>

<style lang='scss'>
  .ftn-gallery-tile {
    min-width: 100px;
    min-height: 100px;
    border: 1px solid white;
  }
</style>

<!-- markup (zero or more items) goes here -->