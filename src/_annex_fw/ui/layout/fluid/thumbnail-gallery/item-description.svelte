<script lang="ts">
	export let descriptClass: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<div class="item-description {descriptClass}">
	<h2 class="title">
		{title}
	</h2>
	<h3 class="description">
		{description}
	</h3>
</div>

<style lang="scss">
	.item-description {
			height: 100%;
			display: flex;
			flex-direction: column;
			padding: 10px;
			// border: 1px solid white;
			.title, .description {
				margin-bottom: 0;
			}
      // TODO - MOVE COPY STYLES TO TYPO/COPY.SCSS
			&.bold-title {
				h2.title {
					font-weight: bold;
				}
			}
			&.bold-message {
				h3.description {
					font-weight: bold;
				}
			}

			&.dark-text {
				h2, h3 {
					color: var(--copy-color-negative);
				}
			}
			&.bold {
				font-weight: bold;
			}

      // TODO - MOVE TO BASE TYPOGRAPHY
			// TYPE POSITIONING / PER FLEX?

			// &.tp-l {
				// DEFAULT
			// }
			&.tp-m {
				text-align: center;
			}
			&.tp-r {
				text-align: right;
			}
			&.md-l {
				justify-content: center;
			}
			&.md-m {
				justify-content: center;
				text-align: center;
			}
			&.md-r {
				justify-content: center;
				text-align: right;
			}
			&.bt-l {
				justify-content: flex-end;
			}
			&.bt-m {
				text-align: center;
				justify-content: flex-end;
			}
			&.bt-r {
				text-align: right;
				justify-content: flex-end;
			}
		}
</style>
