<script lang="ts">
	export let contentDetails;

	console.log('>> WORKING WITH CONTENT DETAILS:', contentDetails);

	const {
		backgroundStyles
	} = contentDetails;
	

	let derivedStyles = '';
	if (backgroundStyles) {
		derivedStyles = `${derivedStyles} background: ${backgroundStyles};`;
	}
</script>

<div class="single-showcase content" style={derivedStyles}>
	<slot/>
</div>

<style lang="scss">
	.single-showcase {
		width: 100%;
		height: 100%;;
	}
</style>