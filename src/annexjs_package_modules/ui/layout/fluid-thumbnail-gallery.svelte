<script lang="ts">
  import { sortByCount } from "@annexjs/utils";
  import FluidThumbnailGroup from "./fluid-thumbnail-group.svelte";

	// Default gallery Config
	let galleryConfig: any = {
		backgroundStyles: "url('./images/sample/sample_geo_texture.jpg')",
		// backgroundStyles: "rgba(77, 132, 189, 0.33)",
		// backgroundStyles: "red",
		columnCount: 3, // [1, 2, 3, false] false for infinite
		// columnCount: 4,
		tileSize: 'md', // [sm, md, lg] default = sm
		centerList: true,
		//
		vertRowSpacing: '20px',
		opacity: '1',
		// TODO - vertical row spacing 
		//
		tileBorder: "",
		tiles: [
			{
				image: '',
				// backgroundStyles: 'green',
				backgroundStyles: "url('./images/sample/sample_leather_texture.jpg')",
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
				title: '9',
				message: '9-tile'
			},
		],
		// infiniteTiles: false,
		// maxWidth: "300px",
		// maxheight: "500px"
	};
	const {
		backgroundStyles,
		columnCount,
		tileSize,
		vertRowSpacing,
		tiles
	} = galleryConfig;

	let galleryStyle: string = '';

	if (backgroundStyles) {
		galleryStyle = `${galleryStyle} background: ${backgroundStyles};`;
	}

  if (vertRowSpacing) {
    galleryStyle = `${galleryStyle} padding-bottom: ${vertRowSpacing};`;
  }

	// CLASSES
	let columnClasses: string;
	if (Number.isInteger(columnCount)) {
		columnClasses = `column-count-${columnCount}`;
	} else {
		columnClasses = 'marquee'
	}

	columnClasses = `${columnClasses}${(tileSize) ? ` ${tileSize}` : ''}`;

	let classes: string = `ftn-gallery ${columnClasses}`;

	let groupedTiles: Array<unknown>;
	if (columnCount) {
		groupedTiles = sortByCount(tiles, columnCount);
	} else {
		groupedTiles = [tiles];
	}
</script>

<div class={classes} style={galleryStyle}>
	{#if galleryConfig.tiles}
		{#each groupedTiles as tileGroup}
			<FluidThumbnailGroup
				{tileGroup}
				{galleryConfig}
				{columnClasses}
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
