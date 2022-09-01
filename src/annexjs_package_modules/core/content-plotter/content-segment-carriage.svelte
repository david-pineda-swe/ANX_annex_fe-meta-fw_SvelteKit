<script>
  export let contentSegment;

  const { component, header, subHeader, copyBlock, subContent, nodeType } = contentSegment;
  const { componentType, componentTag, element } = component;

  // TODO - COMPONENT LOGIC GOES HERE <<<
    // -- TYPE - divert logic
    // @ANNEXJS
    // STRUCTURAL, STANDARD, FRAMEWORK, DIAGNOSTIC, ETC...

    // $PEC
    // FUNCTIONAL, DISPLAY, SANDBOX

    // --- TAG - component selection logic
</script>


<div class="content-segment">
  <div class="segment-headers">
    {#if header}
      <h1>{header}</h1>
    {/if}
    {#if subHeader}
      <h2>{subHeader}</h2>
    {/if}
  </div>

  <slot></slot>
</div>