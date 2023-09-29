<script lang="ts">
	import GalleryItem from "./item.svelte";

  export let itemGroup: unknown = [];
	export let galleryConfig: any;
  export let groupingClasses: string = '';

	const { centerList, vertRowSpacing, opacity } = galleryConfig;

	//@ts-ignore
	const items: Array<unknown> = itemGroup;

	const isCentered = (centerList) ? ' centered' : '';
	const isMarquee = (groupingClasses.includes('marquee')) ? ' marquee' : '';
	const classes: string = `item-group${isCentered}${isMarquee}`;
	const style: string = `margin-top: ${vertRowSpacing}; opacity: ${opacity}`;
</script>

<div class={classes} {style}>
	{#each items as item}
		<GalleryItem {item} {groupingClasses} {galleryConfig}/>
	{/each}
</div>

<style lang="scss">
  .item-group {
		display: flex;
		
		&.centered {
			justify-content: space-around;

		}

		&.marquee {
			flex-wrap: wrap;
		}
	}

</style>
