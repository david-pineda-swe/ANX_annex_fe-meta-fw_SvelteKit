<script lang="ts">
	import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';
	// import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';
	import IconIndex from '@annexjs/ui/copy/icon-index.svelte';
</script>

<svelte:head>
	<title>Free4m IO | Web, Interactive, & Media Production</title>
</svelte:head>

<section class="hero greeting">
	<div class="content center-column">
		<div  class="hero-branding">
			<!-- <picture>
				<img src={logo} alt="Free4m IO"/>
				<!-- <img src={logoType} alt="Free4m IO"/> -->
			<!-- </picture> -->
			<h1>
				<ul class="service-links">
					<li>- Web</li>
					<li>- XR</li>
					<li>- Interactive</li>
					<li>- Media</li>
				</ul>
			</h1>
		</div>
	</div>
</section>

<section class="services">
	<ul>
		<li>
			<IconIndex designation={'ICONIFY_mdi:desktop-classic_large|NA|white'}/>
			<h2>Website / Software Development</h2>
			<p>Design</p>
			<p>Development</p>
			<p>Platform management of landing and ecommerce sites</p>
			<!-- <p>SAAS product prototype and development</p> -->
		</li>
		<li>
			<IconIndex designation={'ICONIFY_mdi:link-variant_large|NA|white'}/>
			<h2>Blockchain Development</h2>
			<p>Smart contract prototyping & development</p>
			<p>Audit Management</p>
			<p>Chain Analytics</p>
		</li>
		<li>
			<IconIndex designation={'ICONIFY_mdi:safety-goggles_large|NA|white'}/>
			<h2>VR & XR Development</h2>
			<p>Concept & design</p>
			<p>Development</p>
			<p>Asset creation & management</p>
		</li>
		<li>
			<!-- <h2>Game Development</h2>
				<p>asdf</p> -->
			</li>
			<li>
			<IconIndex designation={'ICONIFY_mdi:video-image_large|NA|white'}/>
			<h2>Video & Media Production</h2>
			<p>Post production</p>
			<p>Content Creation</p>
			<p>AI Generative Enhancements</p>
		</li>
	</ul>
</section>

<style lang="scss">
	/* TODO - MOVE THIS TO SPEC STYLES */
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: var(--section-side-padding);
		padding-right: var(--section-side-padding);
		padding-bottom: var(--section-vertical-padding);
		margin-bottom: var(--section-bottom-margin);
	}

	.hero {
		background-color: rgba(36, 5, 54, 0.592);

		ul {
			text-align: left;
			li {
				font-weight: bold;
			}
		}
	}
	.hero-branding {
		text-align: center;
		
		// img {
		// 	margin: 0 auto;
		// 	width: 50%;
		// }
	}
</style>
