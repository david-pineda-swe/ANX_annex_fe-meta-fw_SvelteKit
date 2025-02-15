<script lang="ts">
	import { Button } from "sveltestrap";
	import ItemGroup from "annex/ui/layout/fluid/thumbnail-gallery/item-group.svelte";
	import ItemDescription from "./fluid/thumbnail-gallery/item-description.svelte";
	import FluidModal from "./fluid-modal.svelte";
	import SingleShowcase from "./fluid/content/single-showcase.svelte";
	import { sortByCount, sortEvenly } from "annex/utils";
	import IconIndex from "../copy/icon-index.svelte";

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
	let selectedGalleryItem: any;
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
	const handleGalleryItemSelection = (selectedItem: any, resData:any) => {
		console.log('>> [COMP_HANDLE] - GALLERY WILL HANDLE UI SELECTION with:', selectedItem, resData);
		const isModalItem = selectedItem.actionType.includes('modal-select');
		
		if (modal && isModalItem) {			
			const targetContent = items.filter((item: any) => {
				const hasTargetNavItem = item.navItem;
				return (hasTargetNavItem) 
					? hasTargetNavItem.nodeId === selectedItem.nodeId
					: false;
			});

			selectedGalleryItem = {...targetContent[0], ...resData};
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
		<!-- <div slot="modal-header">
			HEADER TEXT FOR FLUID MODAL
		</div> -->

		<SingleShowcase contentDetails={selectedGalleryItem}>
			<button class="close-showcase" on:click={toggleModal}>
				<IconIndex designation={`ICONIFY_mdi:close-circle-outline_medium|s2|white`}/>
			</button>

			<!-- bold-message -->
			<ItemDescription
				descriptClass={'bold-title bt-r'}
				title={selectedGalleryItem.title}
				description={selectedGalleryItem.longMessage}
			/>
		</SingleShowcase>
		
		<!-- <div slot="modal-footer">
			<Button color="secondary" on:click={toggleModal}>Close</Button>
		</div> -->
	</FluidModal>
{/if}

<style lang="scss">
	.close-showcase {
		position: absolute;
		top: 20px;
		right: 20px;
	}
	
	.ftn-gallery {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
