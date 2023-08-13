import { zfd } from 'zod-form-data';
import { z } from 'zod';

// TIER A / B / C form expression outline
export const formA_outline = {
  meta: {},
  formId: 'ARB_TEST_FORM_A',
  formClasses: 'test form-a full-tier-set',
  // TIER A - FIELDSET(s) + & B || C
  nodes: [
    {
      type: 'INPUT',
      inputType: 'TEXT',
      label: 'Test text label_a',
      //
      id: 'test-text-input',
      classes: 'test input-a tier-a',
      dataPointKey: 'testTextKey_a',
      dataValidator: zfd.text(z.string().min(10)),
      errors: [],
      // errors: ['Something is not right with this input'],
      hide: false
    },
    {
      type: 'FIELDSET',
      classes: 'test fieldset-1 tier-a',
      legend: 'Tier A Legend',
      hide: false,
      // TIER B - - FIELDGROUP(s)
      subNodes: [
        {
          type: 'INPUT',
          inputType: 'TEXT',
          label: 'Test text label_b',
          //
          id: 'test-text-input',
          classes: 'test input-1 tier-b',
          dataPointKey: 'testTextKey_b',
          dataValidator: zfd.text(z.string({ required_error: 'Label B is required' }).trim()),
          errors: [],
          // errors: ['Something is not right with this input'],
          hide: false
        },
        {
          type: 'FIELDGROUP',
          classes: 'test fieldgroup-1 tier-b',
          hide: false,
          // TIER C - - - INPUT(s)
          subNodes: [
            {
              type: 'INPUT',
              inputType: 'TEXT',
              label: 'Test text label_c',
              //
              id: 'test-text-input',
              classes: 'test input-1 tier-c',
              dataPointKey: 'testTextKey',
              dataValidator: zfd.text(z.string({ required_error: 'Label C is required' }).trim()),
              // errors: [],
              errors: ['Something is not right with this input'],
              hide: false
            },
            {
              type: 'INPUT',
              inputType: 'EMAIL',
              label: 'Test email label_c',
              //
              id: 'test-email-input',
              classes: 'test input-2 tier-c',
              dataPointKey: 'testEmailKey',
              dataValidator: zfd.text(
                z.string().min(1).max(64).email({ message: 'must be a valid email address' })
              ),
              // errors: [],
              errors: ['Uh-oh!'],
              hide: false
            }
          ]
        }
      ]
    }
  ]
};
