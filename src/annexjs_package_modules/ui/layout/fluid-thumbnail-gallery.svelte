<script lang="ts">
  import { sortByCount, sortEvenly } from "@annexjs/utils";
  import ItemGroup from "@annexjs/ui/layout/fluid/thumbnail-gallery/item-group.svelte";

	// Default gallery Config
	export let galleryConfig: any = {};

	const {
		backgroundStyles,
		sortMethod,
		tileSize,
		vertRowSpacing,
		tiles
	} = galleryConfig;

  let groupedTiles: Array<unknown>;
  let factorCount = null;
  const [sortBy, count] = (sortMethod) ? sortMethod.split('-') : '';
  factorCount = parseInt(count);
  const makeColumns = sortBy === 'COLUMNS' && factorCount;
  const makeRows = sortBy === 'ROWS' && factorCount;

   // GROUPING METHOD
  if (makeColumns) {
    groupedTiles = sortByCount(tiles, factorCount);
  } else if (makeRows) {
    groupedTiles = sortEvenly(tiles, factorCount);
  } else {
    groupedTiles = [tiles];
  }

  // STYLES
	let galleryStyle: string = '';

	if (backgroundStyles) {
		galleryStyle = `${galleryStyle} background: ${backgroundStyles};`;
	}

  if (vertRowSpacing) {
    galleryStyle = `${galleryStyle} padding-bottom: ${vertRowSpacing};`;
  }

	// CLASSES
	let groupingClasses: string;
	if (makeColumns) {
		groupingClasses = `columns`;
  } else if (makeRows) {
    groupingClasses = `rows`;
	} else {
		groupingClasses = 'marquee'
	}

	groupingClasses = `${groupingClasses}${(tileSize) ? ` ${tileSize}` : ''}`;

	let classes: string = `ftn-gallery ${groupingClasses}`;
</script>

<div class={classes} style={galleryStyle}>
	{#if galleryConfig.tiles}
		{#each groupedTiles as itemGroup}
			<ItemGroup
				{itemGroup}
				{galleryConfig}
				{groupingClasses}
			/>
		{/each}
	{/if}
</div>

<style lang="scss">
	.ftn-gallery {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	// .asdf {
	// 	background-color: rgba(77, 132, 189, 0.33);
	// }
</style>
