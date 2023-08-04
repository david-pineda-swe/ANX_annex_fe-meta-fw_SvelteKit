<script lang="ts">
	// DEBUG TOOLS
	// import XpSandbox from "@annexjs/debug-tools/xp-sandbox/index.svelte";
    // SECTIONS
    // import FullPageContainer from "@annexjs/ui/layout/full-page-container.svelte";
    import DynamicSection from "@annexjs/ui/layout/dynamic-section.svelte";
</script>

<svelte:head>
	<title>Comp Demo / Dev Scratch</title>
</svelte:head>

<!-- <XpSandbox>
	<FullPageContainer> -->
	<!-- SECTIONS -->
	<DynamicSection
		supportClasses={"lg hero"}
		layout={"ordered"}
		sectionConfig={{}}
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
	</DynamicSection>

	<DynamicSection
		supportClasses={null}
		layout={"stacked"}
		sectionConfig={{}}
	>
		<h1>Some Default content</h1>
		<h2>This would be some basic content</h2>
	</DynamicSection>
	<DynamicSection
		supportClasses={null}
		layout={"stacked"}
		sectionConfig={{}}
	>
		<h1>Some Default content</h1>
		<h2>This would be some basic content</h2>
	</DynamicSection>
	<DynamicSection
		supportClasses={null}
		layout={"stacked"}
		sectionConfig={{}}
	>
		<h1>Some Default content</h1>
		<h2>This would be some basic content</h2>
	</DynamicSection>

	<!-- X - MOVE INTO DynamicSection support -->
	<!-- <div class="content full-width"> -->
	<!-- <div class="content center-column"> -->
	<!-- </div> -->
	<!-- </FullPageContainer>
</XpSandbox> -->
