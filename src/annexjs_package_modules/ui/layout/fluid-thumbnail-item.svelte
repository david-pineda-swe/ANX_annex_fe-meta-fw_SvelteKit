<script lang="ts">
  import FluidThumbnailItemDescription from "./fluid-thumbnail-item-description.svelte";

	export let tile: any = {};
	export let groupingClasses: string = '';
	export let galleryConfig: any = {};
	
	const { allBoxStyles, useDescriptions, allDescriptLocations, allDescriptClasses } = galleryConfig;
	const { backgroundStyles, boxStyles, title, message, descriptLocation, descriptClasses, actionNode } = tile;

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
</script>

{#if actionNode}
	<h1>nerp</h1>
{:else}
	<div class={classes} {style}>
		{#if useDescriptions}
			<FluidThumbnailItemDescription
				{descriptClass}
				{title}
				{message}
			/>
		{/if}
	</div>
{/if}

<style lang='scss'>
	.ftn-gallery-item {
		position: relative;
		min-width: 75px;
		min-height: 75px;
		padding: 10px;

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

<!-- markup (zero or more items) goes here -->