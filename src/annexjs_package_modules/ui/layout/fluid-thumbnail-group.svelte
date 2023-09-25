<script lang="ts">
	import FluidThumbnailItem from "./fluid-thumbnail-item.svelte";

  export let tileGroup: unknown = [];
	export let galleryConfig: any;
  export let groupingClasses: string = '';

	const { centerList, vertRowSpacing, opacity } = galleryConfig;

	//@ts-ignore
	const tiles: Array<unknown> = tileGroup;

	const isCentered = (centerList) ? ' centered' : '';
	const isMarquee = (groupingClasses.includes('marquee')) ? ' marquee' : '';
	const classes: string = `tile-group${isCentered}${isMarquee}`;
	const style: string = `margin-top: ${vertRowSpacing}; opacity: ${opacity}`;
</script>

<div class={classes} {style}>
	{#each tiles as tile}
		<FluidThumbnailItem {tile} {groupingClasses} {galleryConfig}/>
	{/each}
</div>

<style lang="scss">
  .tile-group {
		display: flex;
		
		&.centered {
			justify-content: space-around;

		}

		&.marquee {
			flex-wrap: wrap;
		}
	}

</style>
