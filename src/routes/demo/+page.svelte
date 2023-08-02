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
			layout={"ordered"}
			heroConfig={null}
		>
			<div slot="background" />
			
			<div class="copy" slot="primary">
				<h1>Hero <br/> Primary Content</h1>
				<h2>Goes here</h2>
			</div>
			<div class="focus" slot="secondary">
				<h1>Hero <br/> Secondary Content</h1>
				<h2>Goes here</h2>
			</div>
			<div class="cta" slot="tertiary">
				<h1>Hero <br/> Tertiary Content</h1>
				<h2>Goes here</h2>
			</div>
		</Hero>
		<div class="content full-width">
		<!-- <div class="content center-column"> -->
		</div>
	</FullPageContainer>
</XpSandbox>
