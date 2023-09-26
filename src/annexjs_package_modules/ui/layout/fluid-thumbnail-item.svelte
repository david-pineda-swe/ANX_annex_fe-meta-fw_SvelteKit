<script lang="ts">
  export let tile: any = {};
  export let groupingClasses: string = '';
  export let galleryConfig: any = {};
  const { allBoxStyles, useDescriptions, allDescriptLocations, allDescriptClasses } = galleryConfig;
  const { backgroundStyles, boxStyles, title, message, descriptLocation, descriptClasses } = tile;

  let style: string = '';

  if (allBoxStyles) {
    style = `${style} ${allBoxStyles}`;
  }
  if (backgroundStyles) {
    style = `${style} background: ${backgroundStyles};`;
  }
  if (boxStyles) {
    style = `${style} ${boxStyles}`;
  }

  // CLASSES
  let classes: string = `ftn-gallery-tile ${groupingClasses}`;
  let descriptClass: string = '';
  
  if (descriptLocation || allDescriptLocations) {
    const use = (descriptLocation) ? descriptLocation : allDescriptLocations;
    switch(use) {
      case 2:
        descriptClass = 'tp-m';
        break;
      case 3:
        descriptClass = 'tp-r';
        break;
      case 4:
        descriptClass = 'md-l';
        break;
      case 5:
        descriptClass = 'md-m';
        break;
      case 6:
        descriptClass = 'md-r';
        break;
      case 7:
        descriptClass = 'bt-l';
        break;
      case 8:
        descriptClass = 'bt-m';
        break;
      case 9:
        descriptClass = 'bt-r';
        break;
      default:
        descriptClass = 'tp-l';
        break;
    }
  }

  if (descriptClasses || allDescriptClasses) {
    const use = (descriptClasses) ? descriptClasses : allDescriptClasses;
    descriptClass = `${descriptClass} ${use}`;
  }
</script>

<div class={classes} {style}>
  {#if useDescriptions}
    <div class="tile-description {descriptClass}">
      <h2 class="title">
        {title}
      </h2>
      <h3 class="message">
        {message}
      </h3>
    </div>
  {/if}
</div>

<style lang='scss'>
  .ftn-gallery-tile {
    position: relative;
    min-width: 75px;
    min-height: 75px;
    padding: 10px;

    // d: 75, sm: 150, md: 225, lg: 300

    &.sm {
      width: 150px;
      height: 150px;
    }
    
    &.md {
      width: 225px;
      height: 225px;
      flex: 0 0 225px; // flex-grow, flex-shrink, flex-basis
    }
    &.lg {
      width: 300px;
      height: 300px;
      flex: 0 0 300px;
    }

    //
    .tile-description {
      display: flex;
      flex-direction: column;
      .title {
        margin-bottom: 10px;
      }

      &.dark-text {
        h2, h3 {
          color: var(--text-color-negative);
        }
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

  }
</style>

<!-- markup (zero or more items) goes here -->