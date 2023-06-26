<script lang="ts">
	import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';
</script>

<svelte:head>
	<title>Free4m IO | Web / XR / Interactive</title>
</svelte:head>

<section>
	<div class="welcome">
		<picture>
			<!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
			<img src={logoType} alt="Free4m IO" />
		</picture>
	</div>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>
	<h1>
		THIS IS CONTENT FOR FREE4M.IO
	</h1>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
