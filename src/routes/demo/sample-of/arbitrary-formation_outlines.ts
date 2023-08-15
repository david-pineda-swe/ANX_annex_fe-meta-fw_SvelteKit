import { zfd } from 'zod-form-data';
import { z } from 'zod';

// TIER A / B / C form expression outline
export const formA_outline = {
  meta: {},
  formId: 'ARB_TEST_FORM_A',
  // TODO - DESIGNATE LIGHT AND DARK THEME SWITCH-CLASS
  // formClasses: 'test form-a full-tier-set',
  formClasses: 'stacked test form-a full-tier-set',
  // TIER A - FIELDSET(s) + & B || C
  nodes: [
    {
      type: 'INPUT',
      inputType: 'TEXT',
      //
      id: 'test-text-type',
      classes: 'test input-a tier-a',
      dataPointKey: 'testTextKey_a',
      dataValidator: zfd.text(z.string().min(10)),
      label: 'Type',
      placeholder: 'Disabled input sample',
      //
      hide: false,
      disabled: true,
      //
      errors: [],
      // errors: ['Something is not right with this input'],
      hints: []
      // hints: ['Derp!']
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
          //
          id: 'test-text-first-name',
          classes: 'test input-1 tier-b',
          dataPointKey: 'testTextKey_b',
          dataValidator: zfd.text(z.string({ required_error: 'Label B is required' }).trim()),
          label: 'First Name',
          placeholder: 'FN',
          //
          hide: false,
          disabled: false,
          //
          errors: [],
          // errors: ['Something is not right with this input'],
          // hints: []
          hints: ['Arrrghhhh!']
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
              //
              id: 'test-text-last-name',
              classes: 'test input-1 tier-c',
              dataPointKey: 'testTextKey',
              dataValidator: zfd.text(z.string({ required_error: 'Label C is required' }).trim()),
              label: 'Last Name',
              placeholder: 'LN',
              //
              hide: false,
              disabled: false,
              errors: [],
              // errors: ['Something is not right with this input'],
              // hints: []
              hints: ['Do something special!']
            },
            {
              type: 'INPUT',
              inputType: 'EMAIL',
              //
              id: 'test-email',
              classes: 'test input-2 tier-c',
              dataPointKey: 'testEmailKey',
              dataValidator: zfd.text(
                z.string().min(1).max(64).email({ message: 'must be a valid email address' })
              ),
              label: 'Email',
              placeholder: 'Email please',
              //
              hide: false,
              disabled: false,
              // errors: [],
              errors: ['Uh-oh!'],
              // hints: []
              hints: ['Whhhooo!']
            }
          ]
        }
      ]
    }
  ]
};
