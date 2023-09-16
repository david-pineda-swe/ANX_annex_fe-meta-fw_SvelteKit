<script lang="ts">
import { onMount } from "svelte";

  export let targetBlockClass: string = '';
  export let targetConstraintClass: string = '';
  export let stickyTopOffset: number = 0;
  export let centerContent: boolean = false;
  export let constrainY: boolean = true;

  onMount(() => {
    const stickyElem = document.querySelector(`.${targetBlockClass}`);
    const boundingContainer = document.querySelector(`.${targetConstraintClass}`);

    // @ts-ignore
    let stickyHeight = (stickyElem) ? stickyElem.offsetHeight : false;
    let stickyTotalHeight = stickyHeight + stickyTopOffset;
    
    let usingConstraint = (boundingContainer) ? boundingContainer && constrainY : false;
    let boundOffset = (boundingContainer) ? boundingContainer.getBoundingClientRect().top + window.scrollY : false;
    // @ts-ignore
    let boundHeight = (boundingContainer) ?boundingContainer.offsetHeight : false;
    let verticalConstraint = (boundOffset + boundHeight) - stickyTotalHeight;

    // console.log('>> - STICKY TOTAL HEIGHT:', stickyTotalHeight);
    // console.log('>> bound offset', boundOffset);
    // console.log('>> + bound offset HEIGHT', boundHeight);
    // console.log('>> = VERT CONST:', verticalConstraint);

    const checkStickyPosition = () => {
      if (stickyElem) {
        // console.log('> CURRENT:', window.scrollY);
        if(usingConstraint && window.scrollY > verticalConstraint) {
          // console.log('>> I SHOULD STOP');
          stickyElem.style.position = "relative";
          stickyElem.style.top = `${boundHeight - stickyHeight}px`;
        } else {
          if(window.scrollY > boundOffset - stickyTopOffset) {
              stickyElem.style.position = "fixed";
              stickyElem.style.top = `${stickyTopOffset}px`;
            } else {
              // console.log('>> AT HOME POSITION');
              stickyElem.style.position = "relative";
              stickyElem.style.top = "initial";
          }
        }
      }
    }
    
    window.onscroll = checkStickyPosition;

    checkStickyPosition();
  });

  
</script>

<div class="sticky-block {targetBlockClass}">
  {#if centerContent}
    <div class="sticky-column">
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</div>

<style lang="scss">
  .sticky-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .sticky-column {
      text-align: center;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->