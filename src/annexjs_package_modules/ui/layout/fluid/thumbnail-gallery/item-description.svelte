<script lang="ts">
	export let descriptClass: string = '';
	export let title: string = '';
	export let message: string = '';
</script>

<div class="item-description {descriptClass}">
	<h2 class="title">
		{title}
	</h2>
	<h3 class="message">
		{message}
	</h3>
</div>

<style lang="scss">
	.item-description {
			display: flex;
			flex-direction: column;
			.title {
				margin-bottom: 10px;
			}
			&.bold-title {
				h2.title {
					font-weight: bold;
				}
			}
			&.bold-message {
				h3.message {
					font-weight: bold;
				}
			}

			&.dark-text {
				h2, h3 {
					color: var(--text-color-negative);
				}
			}
			&.bold {
				font-weight: bold;
			}
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
				margin: 33% auto;
			}
			&.md-m {
				margin: 33% auto;
				text-align: center;
			}
			&.md-r {
				margin: 33% auto;
				text-align: right;
			}
			&.bt-l {
				margin: 66% auto;
			}
			&.bt-m {
				margin: 66% auto;
				text-align: center;
			}
			&.bt-r {
				margin: 66% auto;
				text-align: right;        
			}
		}
</style>
