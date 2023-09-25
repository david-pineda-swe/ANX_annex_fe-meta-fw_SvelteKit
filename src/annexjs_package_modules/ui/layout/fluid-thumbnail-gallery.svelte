<script lang="ts">
  import { sortByCount, sortEvenly } from "@annexjs/utils";
  import FluidThumbnailGroup from "./fluid-thumbnail-group.svelte";

	// Default gallery Config
	let galleryConfig: any = {
		backgroundStyles: "url('./images/sample/sample_geo_texture.jpg')",
		// backgroundStyles: "rgba(77, 132, 189, 0.33)",
		// backgroundStyles: "red",
		sortMethod: 'COLUMNS-3', // ['COLUMNS', 'ROWS']
		// sortMethod: 'ROWS-3',
		tileSize: 'md', // [sm, md, lg] default = sm
		centerList: true,
		//
		vertRowSpacing: '20px',
		opacity: '1',
		// TODO - vertical row spacing 
		//
		// allBoxStyles: "border: 3px solid white;",
		tiles: [
			{
				image: '',
				// backgroundStyles: 'green',
				backgroundStyles: "url('./images/sample/sample_leather_texture.jpg')",
				// boxStyles: 'border: 5px solid fuchsia;',
				title: '1',
				message: '1-tile'
			},
			{
				image: '',
				backgroundStyles: 'blue',
				title: '2',
				message: '2-tile'
			},
			{
				image: '',
				backgroundStyles: 'fuchsia',
				title: '3',
				message: '3-tile'
			},
			{
				image: '',
				backgroundStyles: 'purple',
				title: '4',
				message: '4-tile'
			},
			{
				image: '',
				backgroundStyles: 'red',
				title: '5',
				message: '5-tile'
			},
			{
				image: '',
				backgroundStyles: 'orange',
				title: '6',
				message: '6-tile'
			},
			{
				image: '',
				// backgroundStyles: 'teal',
				backgroundStyles: "url('./images/sample/sample_canvas_texture.jpg')",
				title: '7',
				message: '7-tile'
			},
			{
				image: '',
				backgroundStyles: 'gray',
				title: '8',
				message: '8-tile'
			},
			{
				image: '',
				backgroundStyles: 'yellow',
				boxStyles: 'border: 5px solid green;',
				title: '9',
				message: '9-tile'
			},
			{
				image: '',
				backgroundStyles: 'brown',
				title: '10',
				message: '10-tile'
			},
		],
		// infiniteTiles: false,
		// maxWidth: "300px",
		// maxheight: "500px"
	};
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
		{#each groupedTiles as tileGroup}
			<FluidThumbnailGroup
				{tileGroup}
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
