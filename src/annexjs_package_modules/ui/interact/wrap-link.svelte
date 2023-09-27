<script lang="ts">
  import type { NavigationNode } from "src/global";

	export let actingId: string;
	export let navItem: NavigationNode;
	export let handle: any = null; // NOTE - FUNCTION

	const {
		actionType,
		classes,
		slug,
		url,
    linkTarget, // [_self(d), _blank]
	} = navItem;

	const isInternal = actionType === 'INTERNAL_ROUTE';
	const isExternal = actionType === 'EXTERNAL_LINK';
	const handleSelection = () => {
		handle && handle();
	};
</script>

{#if isInternal}
	<a
		id={actingId}
		class={classes}
		data-sveltekit-preload-data
		href={slug}
		on:click={() => handleSelection()}
	>
		<slot />
	</a>
{:else if isExternal}
	<a
		id={actingId}
		class={classes}
		target={linkTarget}
		href={url}
		on:click={() => handleSelection()}
	>
		<slot />
	</a>
	{:else}
	<a
		id={actingId}
		class={classes}
		target={linkTarget}
		href={url}
		on:click={() => handleSelection()}
	>
		<slot />
	</a>
{/if}
