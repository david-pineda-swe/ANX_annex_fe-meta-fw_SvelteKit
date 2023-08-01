<script lang="ts">
	// DEBUG TOOLS
	import XpSandbox from "@annexjs/debug-tools/xp-sandbox/index.svelte";
    // SECTIONS
    import FullPageContainer from "@annexjs/ui/section/full-page-container.svelte";
    import Hero from "@annexjs/ui/section/hero.svelte";
</script>

<svelte:head>
	<title>Comp Demo / Dev Scratch</title>
</svelte:head>

<XpSandbox>
	<FullPageContainer>
		<!-- SECTIONS -->
		<Hero
			sectionHeight={"lg"}
			layout={"stacked"}
			heroConfig={null}
		>
			<h2>Hero here</h2>
		</Hero>
		<div class="content full-width">
		<!-- <div class="content center-column"> -->
		</div>
	</FullPageContainer>
</XpSandbox>
