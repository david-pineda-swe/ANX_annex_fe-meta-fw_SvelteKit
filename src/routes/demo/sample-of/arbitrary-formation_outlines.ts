// TIER A / B / C form expression outline
export const formA_outline = {
  meta: {},
  formId: 'ARB_TEST_FORM_A',
  classes: 'test form-a full-tier-set',
  // TIER A - FIELDSET(s) + & B || C
  nodes: [
    {
      type: 'FIELDSET',
      classes: 'test fieldset-1 tier-a',
      legend: 'Tier A Legend',
      hide: false,
      // TIER B - - FIELDGROUP(s)
      subNodes: [
        {
          type: 'FIELDGROUP',
          classes: 'test fieldgroup-1 tier-b',
          hide: false,
          // TIER C - - - INPUT(s)
          subNodes: [
            {
              type: 'INPUT',
              inputType: 'TEXT',
              label: 'Test text label',
              //
              id: 'test-text-input',
              classes: 'test input-1 tier-c',
              hide: false
            },
            {
              type: 'INPUT',
              inputType: 'EMAIL',
              label: 'Test email label',
              //
              id: 'test-email-input',
              classes: 'test input-2 tier-c',
              hide: false
            }
          ]
        }
      ]
    }
  ]
};
