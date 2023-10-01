<script lang="ts">
  import { mediaIs } from "@annexjs/core/webapp/stores/reactive-media";
  import { isEmpty } from "@annexjs/utils";

  export let supportClasses: any = null; // null, sm, lg, full
  export let layout: string = 'stacked'; // stacked, rev-stacked, ordered, ordered-left, ordered-right
  export let specHeight: string = '';
  // export let sectionConfig: any = null; // TBD
  // headline: string = "Headline here..."; headline="Something Great!"
  // subheading: string = "Subheading"; subheading="Ta-dur!"
  // console.log(">> DYNAMIC_SECTION HAS CONFIG");
  // console.table(sectionConfig);
  let style: string;
  if (!isEmpty(specHeight)) {
    style = `height: ${specHeight};`
  }

  let MQ_flag: string;
  if ($mediaIs.sm) {
    MQ_flag = 'sm-media';
  }

  $:classes = `dynamic ${supportClasses} ${MQ_flag}` 
</script>

<section class={classes}>
  {#if $$slots['background']}
    <div class="section-bg">
      <slot name="background" />
    </div>
  {/if}

  {#if $$slots['full-cover']}
    <div class="section-layout-full-coverage {layout}" {style}>
      <slot name="full-cover" />
    </div>
  {:else}
    <div class="section-layout {layout}" {style}>
      {#if $$slots['primary']}
        <div class="subsection primary">
          <div class="anchor">
            <slot name="primary" />
          </div>
        </div>
      {/if}
      {#if $$slots['secondary']}
        <div class="subsection secondary">
          <div class="anchor">
            <slot name="secondary" />
          </div>
        </div>
      {/if}
      {#if $$slots['tertiary']}
        <div class="subsection tertiary">
          <div class="anchor">
            <slot name="tertiary" />
          </div>
        </div>
      {/if}

      {#if $$slots['default']}
        <div class="subsection">
          <div class="anchor">
            <slot />
          </div>
        </div>
      {/if}
    </div>
  {/if}

  <!-- TODO - ACCOUNT FOR DEFAULT SUBSECTION -->
  <!-- TODO - CONDITIONAL CTA SLOT LOCATION -->
</section>

<style lang="scss">
  // SECTION
  .dynamic {
    position: relative;
    margin-bottom: 40px;

    &.sm {
      min-height: 300px;
    }
    &.lg {
      min-height: 600px;
    }
    &.full {
      height: 100%;
    }

    // &.hero {
    //   border-top: 2px solid green;
    // }

    .section-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      // background-color: #058424a4;
    }

    // SUBSECTIONS
    @mixin verticalCenter {
      align-items: center;
    }
    @mixin orderedDefault {
      flex-flow: row wrap;
      max-width: 700px;
      margin: 0 auto;
      .subsection {
        @include verticalCenter;
        &.primary,
        &.secondary {
          width: 50%;
          height: 80%;
        }
        &.tertiary {
          // background-color: red;
          width: 100%;
          height: 20%;
        }
      }
    }

    .section-layout {
      position: relative;
      display: flex;
      justify-content: center;
      height: 100%;
      padding: calc(var(--section-vertical-padding) * 2.5) 0px;
      // border: 1px solid red;

      &.stacked {
        flex-direction: column;
        // border: 5px solid fuchsia;
        .subsection {
          // margin-bottom: var(--subsection-bottom-margin); // verify - removal
          .anchor {
            width: var(--column-width);
          }
        }
      }
      &.rev-stacked {
        flex-direction: column-reverse;
      }
      &.ordered {
        @include orderedDefault;
      }
      &.ordered-left {
        @include orderedDefault;
        justify-content: flex-start;
      }
      &.ordered-right {
        @include orderedDefault;
        justify-content: flex-end;
      }
      &.rev-ordered {
        flex-direction: row-reverse;
        .subsection {
          @include verticalCenter;
        }
      }

      .subsection {
        display: flex;
        justify-content: center;
        // border: 1px solid red;

        .anchor {
          padding: 0 30px;
        }
      }

      // .primary {
      // 	background-color: green;
      // }
      // .secondary {
      // 	background-color: blue;
      // }
      // .tertiary {
      // 	background-color: orange;
      // }
    }
  }
</style>
