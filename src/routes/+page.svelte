<script lang="ts">
	import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';
	// import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';
</script>

<svelte:head>
	<title>Free4m IO | Software & Interactive</title>
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

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
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
