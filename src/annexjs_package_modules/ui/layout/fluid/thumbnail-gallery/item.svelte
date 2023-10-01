<!-- TODO - Extend with hover effects -->

<script lang="ts">
	import WrapAction from "@annexjs/ui/interact/wrap-action.svelte";
	import ItemDescription from "./item-description.svelte";

	export let item: any = {};
	export let groupingClasses: string = '';
	export let galleryConfig: any = {};
	export let targetActions: any = {};
	export let handle: any = {};
	
	const { tileSize, allBoxStyles, useDescriptions, allDescriptLocations, allDescriptClasses, vertRowSpacing } = galleryConfig;
	const { backgroundStyles, boxStyles, title, message, descriptLocation, descriptClasses, navItem } = item;

	// CLASSES
	let classes: string = `ftn-gallery-item ${groupingClasses}`;
	let descriptClass: string = '';
	
	if (descriptLocation || allDescriptLocations) {
		const use = (descriptLocation) ? descriptLocation : allDescriptLocations;
		switch(use) {
			case 2:
				descriptClass = 'tp-m';
				break;
			case 3:
				descriptClass = 'tp-r';
				break;
			case 4:
				descriptClass = 'md-l';
				break;
			case 5:
				descriptClass = 'md-m';
				break;
			case 6:
				descriptClass = 'md-r';
				break;
			case 7:
				descriptClass = 'bt-l';
				break;
			case 8:
				descriptClass = 'bt-m';
				break;
			case 9:
				descriptClass = 'bt-r';
				break;
			default:
				descriptClass = 'tp-l';
				break;
		}
	}

	if (descriptClasses || allDescriptClasses) {
		const use = (descriptClasses) ? descriptClasses : allDescriptClasses;
		descriptClass = `${descriptClass} ${use}`;
	}

	// STYLES
	let style: string = '';

	if (allBoxStyles) {
		style = `${style} ${allBoxStyles}`;
	}
	if (backgroundStyles) {
		style = `${style} background: ${backgroundStyles};`;
	}
	if (boxStyles) {
		style = `${style} ${boxStyles}`;
	}
	if (vertRowSpacing) {
		style = `${style} margin-top: ${vertRowSpacing};`;
	}

	// DISPLAY
	const tileSizeSupportsDisplay = tileSize !== undefined;
	const displayDescription = useDescriptions && tileSizeSupportsDisplay;
</script>

<div class={classes} {style}>
	{#if navItem}
		<WrapAction
			containedAction={true}
			{navItem}
			{targetActions}
			{handle}
		>
			{#if displayDescription}
				<ItemDescription
					{descriptClass}
					{title}
					{message}
				/>
			{/if}
		</WrapAction>
	{:else}
		{#if displayDescription}
			<ItemDescription
				{descriptClass}
				{title}
				{message}
			/>
		{/if}
	{/if}
</div>

<style lang='scss'>
	.ftn-gallery-item {
		position: relative;
		width: 75px;
		height: 75px;
		margin: 0 auto;

		// d: 75, sm: 150, md: 225, lg: 300

		&.sm {
			width: 150px;
			height: 150px;
		}
		
		&.md {
			width: 225px;
			height: 225px;
			flex: 0 0 225px; // flex-grow, flex-shrink, flex-basis
		}
		&.lg {
			width: 300px;
			height: 300px;
			flex: 0 0 300px;
		}
	}
</style>
