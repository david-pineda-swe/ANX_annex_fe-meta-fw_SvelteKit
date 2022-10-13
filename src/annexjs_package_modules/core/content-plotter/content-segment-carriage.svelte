<script lang="ts">
  import ContentInsert from './content-insert.svelte';
  import ContentSegmentCarriage from './content-segment-carriage.svelte';
  
  export let contentSegment: any; // TODO - type cast this <<<

  const { component, subContent, nodeId, nodeType } = contentSegment;
  const { componentType, element } = component;

  const _deriveComponentClassesFrom = (nodeType: string, component: NodeComponentTraits) => {
    const { componentTag } = component; // componentType
    const STRUCTURE_TYPE_CLASS = 'structure-n'; // << -n is for "node"
    const INSERT_TYPE_CLASS = 'insert-n'; // << -n is for "node"

    // Lv.1 INDEX - PAGE_CONTENT NODE
    if (nodeType === 'PAGE_CONTENT') { // All other nodeTypes will be CONTENT
      return ['page-content', 'index-n'];
    }

    // Lv.2 STRUCTURE - SCAFFOLD / OUTLINE CONTAINERS
    if (componentType === 'STRUCTURE') {
      if (componentTag === 'stack-row') {
        return ['stack-row', STRUCTURE_TYPE_CLASS];
      }
  
      if (componentTag === 'order-column') {
        return ['order-col', STRUCTURE_TYPE_CLASS];
      }
    }
    
    // Lv.3 INSERT - SUB SEGMENTS AND FUNC ENTRIES
    if (componentType === 'INSERT') {
      if (componentTag === 'md-block') {
        return ['md-blk', INSERT_TYPE_CLASS];
      }
    }
    // TBD - OTHER NODE SCENARIOS...
    
    // DEFAULT COMPONENT CLASS
    return ['content-segment'];
  };
  const _joinClasses = (derivedComponentClass: Array<string>, providedClasses: Array<string>) => {
    return [...derivedComponentClass, ...providedClasses].join(' ');
  };
  
  // - SEGMENT PROVIDED
  const renderId = (element && element.domId) ? element.domId : nodeId;
  const derivedComponentClases = _deriveComponentClassesFrom(nodeType, component);
  const renderClasses = (element && element.classSet) ? _joinClasses(derivedComponentClases, element.classSet) : _joinClasses(derivedComponentClases, []);

  // - @ANNEXJS
  // - INDEX
  // - STRUCTURE
  // - INSERT
  // - DISPLAY
  // - FUNCTION
  // - SYSTEM
  // - METRICS
  // - DIAGNOSTIC

  // $PEC
  // FUNCTIONAL, DISPLAY, SANDBOX

</script>


<div id={renderId} class={renderClasses}>
  <!-- TBD - INSERT SUB SEGMENTS AND FUNC ENTRIES HANDLES HERE -->
  {#if componentType === 'INSERT'}
    <ContentInsert {contentSegment}/>
  {/if}

  <!-- TBD FOR BLOCK SCOPE SUPPORT -->
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
