<script lang="ts">
  import FluidThumbnailItem from "./fluid-thumbnail-item.svelte";

	// Default gallery Config
	let galleryConfig: any = {
		backgroundColor: "red",
		columnCount: 1,
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
		],
		// infiniteTiles: false,
		// maxWidth: "300px",
		// maxheight: "500px"
	};
	const { backgroundColor } = galleryConfig;

	let galleryStyle: string = '';

	if (backgroundColor) {
		galleryStyle = `${galleryStyle} background-color: ${backgroundColor}`;
	}
</script>

<div class="ftn-gallery" style={galleryStyle}>
	{#if galleryConfig.tiles}
		{#each galleryConfig.tiles as tile }
			<FluidThumbnailItem {tile} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.ftn-gallery {
		height: 100%;
	}
</style>

<!-- markup (zero or more items) goes here -->