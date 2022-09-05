<script lang="ts">
  import ContentSegmentCarriage from './content-segment-carriage.svelte';
  
  export let contentSegment;

  const { component, copyBlock, subContent, nodeId, nodeType } = contentSegment;
  const { componentType, componentTag, element } = component;


  const _deriveComponentClassesFrom = (nodeType: string, component: NodeComponentTraits) => {
    const { componentTag } = component; // componentType
    const STRUCTURE_TYPE_CLASS = 'structure-n';

    if (nodeType === 'PAGE_CONTENT') {
      return ['page-content', 'index-n'];
    }

    if (componentTag === 'stack-row') {
      return ['stack-row', STRUCTURE_TYPE_CLASS];
    }

    if (componentTag === 'order-column') {
      return ['order-col', STRUCTURE_TYPE_CLASS];
    }
    
    // TBD - OTHER NODE SCENARIOS...
    
    // DEFAULT COMPONENT CLASS
    return ['content-segment'];
  };
  const _joinClasses = (derivedComponentClass: Array<string>, providedClasses: Array<string>) => {
    return [...derivedComponentClass, ...providedClasses].join(' ');
  };
  
  // - SEGMENT PROVIDED
  const elementSpecProvided = element;

  const renderId = (elementSpecProvided && element.domId) ? element.domId : nodeId;
  const derivedComponentClases = _deriveComponentClassesFrom(nodeType, component);
  const renderClasses = (elementSpecProvided && element.classSet) ? _joinClasses(derivedComponentClases, element.classSet) : _joinClasses(derivedComponentClases, []);

  // - @ANNEXJS
  // - STRUCTURE
  // - STANDARD
  // - DISPLAY
  // - FUNCTION
  // - SYSTEM
  // - METRICS
  // - DIAGNOSTIC

  // $PEC
  // FUNCTIONAL, DISPLAY, SANDBOX

</script>


<div id={renderId} class={renderClasses}>
  <!-- TBD - Copy / Content expression blocks here -->

  <!-- FOR BLOCK SCOPE -->
  <slot></slot>

  <!-- SUB-CONTENT CARRIAGE RETURN -->
  {#if subContent}
    {#each subContent as segment}
      <ContentSegmentCarriage contentSegment={segment}/>
    {/each}
  {/if}
</div>

<style>
  /* .index-n */
  .page-content.index-n {
    border: 4px solid gray;
  }

  /* .structure-n */
  .stack-row.structure-n {
    min-height: 400px;
    display: flex;
    border: 3px solid black
  }

  .order-col.structure-n {
    flex-grow: 1;
    padding: 15px;
    border: 2px solid red;
  }

  .order-col.structure-n.w25 {
    flex-grow: 1;
  }
  
  .order-col.structure-n.w50 {
    flex-grow: 2;
  }

  .order-col.structure-n.w75 {
    flex-grow: 3;
  }
</style>