<script lang="ts">
	import { Button } from "sveltestrap";
	import FluidModal from "./fluid-modal.svelte";
	import { sortByCount, sortEvenly } from "@annexjs/utils";
	import ItemGroup from "@annexjs/ui/layout/fluid/thumbnail-gallery/item-group.svelte";

	// Default gallery Config
	export let galleryConfig: any = {};
	//
	export let targetActions: any = null;

	const {
		backgroundStyles,
		sortMethod,
		tileSize,
		vertRowSpacing,
		modal,
		items
	} = galleryConfig;

	let groupedItems: Array<unknown>;
	let factorCount = null;

	// GALLERY STATE
	const [sortBy, count] = (sortMethod) ? sortMethod.split('-') : '';
	factorCount = parseInt(count);
	const makeColumns = sortBy === 'COLUMNS' && factorCount;
	const makeRows = sortBy === 'ROWS' && factorCount;

	// MODAL STATE
	let size: any;
	let fullscreen: boolean;
	let whenFTNGprompted = false;
	let selectedNavItem: any;
	if (modal) {
		size = modal.size;
		fullscreen = modal.fullscreen;
	}

	// GROUPING METHOD
	if (makeColumns) {
		groupedItems = sortByCount(items, factorCount);
	} else if (makeRows) {
		groupedItems = sortEvenly(items, factorCount);
	} else {
		// MARQUEE
		groupedItems = [items];
	}

	// STYLES
	let galleryStyle: string = '';

	if (backgroundStyles) {
		galleryStyle = `${galleryStyle} background: ${backgroundStyles};`;
	}

	if (vertRowSpacing) {
		galleryStyle = `${galleryStyle} padding-bottom: ${vertRowSpacing};`;
	}

	// CLASSES
	let groupingClasses: string;
	if (makeColumns) {
		groupingClasses = `columns`;
	} else if (makeRows) {
		groupingClasses = `rows`;
	} else {
		groupingClasses = 'marquee'
	}

	groupingClasses = `${groupingClasses}${(tileSize) ? ` ${tileSize}` : ''}`;

	let classes: string = `ftn-gallery ${groupingClasses}`;

	// FTN button selection handle
	const toggleModal = () => {
		whenFTNGprompted = !whenFTNGprompted;
	}
	const handleGalleryItemSelection = (item: any, resData:any) => {
		console.log('>> [COMP_HANDLE] - GALLERY WILL HANDLE UI SELECTION with:', item, resData);
		const isModalItem = item.actionType.includes('modal-select');
		if (modal && isModalItem) {
		selectedNavItem = {...item, ...resData};
			toggleModal();
		}
	}
</script>

<div class={classes} style={galleryStyle}>
	{#if galleryConfig.items}
		{#each groupedItems as itemGroup}
			<ItemGroup
				{itemGroup}
				{galleryConfig}
				{groupingClasses}
				{targetActions}
				handle={handleGalleryItemSelection}
			/>
		{/each}
	{/if}
</div>

<slot/>

{#if modal}
	<FluidModal
		modalIsOpen={whenFTNGprompted}
		modalSize={size}
		modalFullscreen={fullscreen}
		{toggleModal}
	>
		<div slot="modal-header">
			HEADER TEXT FOR FLUID MODAL
		</div>

		Sample text for FLUID_MODAL projection
		
		<div slot="modal-footer">
			<Button color="secondary" on:click={toggleModal}>Close</Button>
		</div>
	</FluidModal>
{/if}

<style lang="scss">
	.ftn-gallery {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
