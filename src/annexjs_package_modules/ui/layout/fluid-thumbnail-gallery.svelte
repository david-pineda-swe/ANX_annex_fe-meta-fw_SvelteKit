<script lang="ts">
  import { groupItemsByCount } from "@annexjs/utils/sort/group-items";
  import FluidThumbnailGroup from "./fluid-thumbnail-group.svelte";

	// Default gallery Config
	let galleryConfig: any = {
		backgroundColor: "red",
		columnCount: false, // [1, 2, 3, false] false for infinite
		// columnCount: 4,
		tileSize: 'md', // [sm, md, lg] default = sm
		centerList: true,
		// TODO - vertical row spacing 
		//
		tileBorder: "",
		tiles: [
			{
				image: '',
				backgroundColor: 'green',
				title: '1',
				message: '1-tile'
			},
			{
				image: '',
				backgroundColor: 'blue',
				title: '2',
				message: '2-tile'
			},
			{
				image: '',
				backgroundColor: 'fuchsia',
				title: '3',
				message: '3-tile'
			},
			{
				image: '',
				backgroundColor: 'fuchsia',
				title: '4',
				message: '4-tile'
			},
			{
				image: '',
				backgroundColor: 'red',
				title: '5',
				message: '5-tile'
			},
			{
				image: '',
				backgroundColor: 'orange',
				title: '6',
				message: '6-tile'
			},
		],
		// infiniteTiles: false,
		// maxWidth: "300px",
		// maxheight: "500px"
	};
	const {
		backgroundColor,
		columnCount,
		tileSize,
		centerList,
		tiles
	} = galleryConfig;

	let galleryStyle: string = '';

	if (backgroundColor) {
		galleryStyle = `${galleryStyle} background-color: ${backgroundColor}`;
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
		groupedTiles = groupItemsByCount(tiles, columnCount);
	} else {
		groupedTiles = [tiles];
	}
</script>

<div class={classes} style={galleryStyle}>
	{#if galleryConfig.tiles}
		{#each groupedTiles as tileGroup}
			<FluidThumbnailGroup {tileGroup} {centerList} {columnClasses}/>
		{/each}
	{/if}
</div>

<style lang="scss">
	.ftn-gallery {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
