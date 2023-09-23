<script lang="ts">
	import FluidThumbnailItem from "./fluid-thumbnail-item.svelte";

  export let tileGroup: unknown = [];
	export let centerList: boolean = false;
  export let columnClasses: string = '';

	//@ts-ignore
	const tiles: Array<unknown> = tileGroup;

	const isCentered = (centerList) ? ' centered' : '';
	const isMarquee = (columnClasses.includes('marquee')) ? ' marquee' : '';
	let classes: string = `tile-group${isCentered}${isMarquee}`;
</script>

<div class={classes}>
	{#each tiles as tile }
		<FluidThumbnailItem {tile} {columnClasses} />
	{/each}
</div>

<style lang="scss">
  .tile-group {
		display: flex;
		
		&.centered {
			justify-content: space-evenly;

		}

		&.marquee {
			flex-wrap: wrap;
		}
	}

</style>
