<script lang="ts">
  import FluidThumbnailItem from "./fluid-thumbnail-item.svelte";

	// Default gallery Config
	let galleryConfig: any = {
		backgroundColor: "red",
		columnCount: 1, // [1, 2, 3, false] false for infinite
		tileSize: '', // [sm, md, lg] default = sm
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
		],
		// infiniteTiles: false,
		// maxWidth: "300px",
		// maxheight: "500px"
	};
	const { backgroundColor, columnCount } = galleryConfig;

	let galleryStyle: string = '';

	if (backgroundColor) {
		galleryStyle = `${galleryStyle} background-color: ${backgroundColor}`;
	}

	// CLASSES
	let columnClass: string;
	switch(columnCount) {
		case 1:
			columnClass = 'single';
			break;
		case 2:
			columnClass = 'double';
			break;
		case 3:
			columnClass = 'tri';
			break;
		default:
			columnClass = 'marquee'
	}

	let classes: string = `ftn-gallery ${columnClass}`;

</script>

<div class={classes} style={galleryStyle}>
	{#if galleryConfig.tiles}
		{#each galleryConfig.tiles as tile }
			<FluidThumbnailItem {tile} {columnClass} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.ftn-gallery {
		height: 100%;
		 display: flex;
		
		&.single {
			flex-direction: column;
		}
	}
</style>

<!-- markup (zero or more items) goes here -->