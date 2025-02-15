<script lang="ts">
	// DEBUG TOOLS
	// import XpSandbox from "annex/debug-tools/xp-sandbox/index.svelte";
	// SECTIONS
	// import FullPageContainer from "annex/ui/layout/full-page-container.svelte";
	import DynamicSection from "annex/ui/layout/dynamic-section.svelte";
	import FluidThumbnailGallery from "annex/ui/layout/fluid-thumbnail-gallery.svelte";
	
	import ArbitraryFormationA from "./sample-of/arbitrary-formation-a.svelte";
	import { galleryConfig_A, galleryConfig_B } from "./sample-of/test-gallery_configs";

	const FluidTNGalleryTargetActions = {
		doTest: (navItem: any, resData: any) => {
			console.log('>> [TARGET_ACTIONS] - PARENT WILL RUN "doTest":', navItem, resData);
		}
	};
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
		specHeight={"750px"}
	>

		<FluidThumbnailGallery galleryConfig={galleryConfig_A} slot="background"/>
		
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
		supportClasses={"demo formation"}
		layout={"stacked"}
	>
		<ArbitraryFormationA />
	</DynamicSection>

	<DynamicSection
		supportClasses={"demo-interactive-gallery"}
		layout={"stacked"}
		>
		<FluidThumbnailGallery
			slot="full-cover"
			galleryConfig={galleryConfig_B}
			targetActions={FluidTNGalleryTargetActions}
		/>
	</DynamicSection>

	<DynamicSection
		supportClasses={null}
		layout={"stacked"}
	>
		<h1>Some Default content</h1>
		<h2>This would be some basic content</h2>
	</DynamicSection>
	<DynamicSection
		supportClasses={null}
		layout={"stacked"}
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
