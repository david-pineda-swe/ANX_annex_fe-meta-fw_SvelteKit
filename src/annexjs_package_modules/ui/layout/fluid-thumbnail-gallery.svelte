<script lang="ts">
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
		items
	} = galleryConfig;

	let groupedItems: Array<unknown>;
	let factorCount = null;
	const [sortBy, count] = (sortMethod) ? sortMethod.split('-') : '';
	factorCount = parseInt(count);
	const makeColumns = sortBy === 'COLUMNS' && factorCount;
	const makeRows = sortBy === 'ROWS' && factorCount;

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
	const handleGalleryItemSelection = (item: any, resData:any) => {
	  console.log('>> [COMP_HANDLE] - GALLERY WILL HANDLE UI SELECTION with:', item, resData);
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

<style lang="scss">
	.ftn-gallery {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
