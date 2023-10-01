<script lang="ts">
	import { mediaIs } from "@annexjs/core/webapp/stores/reactive-media";
	import GalleryItem from "./item.svelte";

	export let itemGroup: unknown = [];
	export let galleryConfig: any;
	export let groupingClasses: string = '';
	export let targetActions: any = null;
	export let handle: any = null;

	const { centerList, opacity } = galleryConfig;

	//@ts-ignore
	const items: Array<unknown> = itemGroup;

	const isMarquee = groupingClasses.includes('marquee');
	const style: string = `opacity: ${opacity}`;
</script>

<div
	class="item-group"
	class:centered={centerList}
	class:marquee={isMarquee}
	class:small={$mediaIs.sm}
	{style}
>
	{#each items as item}
		<GalleryItem
			{item}
			{groupingClasses}
			{galleryConfig}
			{targetActions}
			{handle}
		/>
	{/each}
</div>

<style lang="scss">
	.item-group {
		display: flex;
		flex-direction: column;
		
		&.centered {
			justify-content: space-around;

		}

		&.marquee {
			flex-wrap: wrap;
		}

		&.small {
			flex-direction: row;
		}
	}
</style>
