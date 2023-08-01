<script lang="ts">
    export let sectionHeight: string = "sm"; // sm, lg, full
	// export let layout: string = "stacked"; // 
	// TODO - 5 LAYOUT COMBOS
	// - stacked
	// - rev-stacked
	// - centered
	// - copy-first
	// - focus-first
	// export let heroConfig: any = null;
    // headline: string = "Headline here..."; headline="Something Great!"
    // subheading: string = "Subheading"; subheading="Ta-dur!"
</script>



<section class="hero-section {sectionHeight}">
    <slot name="copy"/>
    <slot name="focus"/>
    <slot name="cta"/>
    <slot name="background"/>
    <slot name="tertiary"/>
</section>



<style lang="scss">
    .hero-section {
        border: 1px solid red;
        background-color: red;

        &.sm {
            height: 300px;
        }
        &.lg {
            height: 600px;
        }
        &.full {
            height: 100%;
        }
    }
</style>
