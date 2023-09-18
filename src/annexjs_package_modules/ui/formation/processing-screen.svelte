<script>
  import StickyBlock from "../layout/sticky-block.svelte";
  import { Spinner } from 'sveltestrap';
</script>

<div class="processing-screen">
  <StickyBlock targetBlockClass={'processing'} targetConstraintClass={"processing-screen"} stickyTopOffset={127} centerContent={true} constrainY={true}>
    <div class="processing-hud">
      <Spinner color={'light'}/>
      <h2 class="processing-message">Processing...</h2>
    </div>
  </StickyBlock>
</div>

<style lang="scss">
  .processing-screen {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(32, 26, 26, 0.6);

    .processing-hud {
      padding: var(--block-bottom-margin);
      background-color: rgba(32, 26, 26, 0.6);
      .processing-message {
        margin: var(--block-bottom-margin) 0;
      }
    }
  }
</style>
