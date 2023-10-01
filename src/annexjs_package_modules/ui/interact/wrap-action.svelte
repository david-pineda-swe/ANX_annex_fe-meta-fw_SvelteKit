<script lang="ts">
	import type { NavigationNode } from "src/global";

	export let actingId: string = '';
	export let navItem: NavigationNode;
	export let containedAction: boolean = false;
	export let targetActions: any = null; // {} | OBJECT with keyed list of SPEC functions for processing selection
	export let handle: any = null; // () => {} | FUNCTION for ui reaction to selection

	const {
		nodeId,
		actionType,
		classes,
		slug,
		url,
		linkTarget, // [_self(d), _blank]
	} = navItem;

	const isProcessAction: boolean = actionType.includes('PROCESS_');
	const isInternalRoute = actionType === 'INTERNAL_ROUTE';
	const isExternalLink = actionType === 'EXTERNAL_LINK';

	const workingId = nodeId || actingId;

	// PROCESS TARGET ACTION
	const processTargetAction = (navItem: NavigationNode) => {
		// TODO - simplify or resolve ts lint error
		// FIX - PARAM USE AND SELECTION
		const params = actionType.split('_');
		const _ATswitch = params.shift();
		const handleKey = params.shift();
		
		const targetAction = targetActions[handleKey];

		if (targetAction) {
			targetAction(params, navItem);
		}
	};

	const _handleAndProcessSelection = () => {
    // For parent scope reaction
    isProcessAction && processTargetAction(navItem);
    // TODO - Consider fail case & result scenario handling
    // For component scope reaction
		handle && handle(navItem);
	};
</script>


{#if isProcessAction}
	<button
		id={workingId}
		class={classes}
		class:contained-action={containedAction}
		on:click={() => _handleAndProcessSelection()}>
			<slot />
	</button>
{:else if isInternalRoute}
	<a
		id={workingId}
		class={classes}
		class:contained-action={containedAction}
		data-sveltekit-preload-data
		href={slug}
		on:click={() => _handleAndProcessSelection()}
	>
		<slot />
	</a>
{:else if isExternalLink}
	<a
		id={workingId}
		class={classes}
		class:contained-action={containedAction}
		target={linkTarget}
		href={url}
		on:click={() => _handleAndProcessSelection()}
	>
		<slot />
	</a>
{:else}
	<!-- TODO - Consider plain text / label only place holder item -->
	<a
		id={workingId}
		class={classes}
		class:contained-action={containedAction}
		target={linkTarget}
		href={url}
		on:click={() => _handleAndProcessSelection()}
	>
		<slot />
	</a>
{/if}

<style lang="scss">
	a, button {
		/* border: 1px solid fuchsia; */
		
		&.contained-action {
			width: 100%;
			height: 100%;
			display: inline-block;
		}
	}
</style>
