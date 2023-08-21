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
      // ! ========================== TICKET CODE
      type: 'INPUT',
      inputType: 'TEXT',
      // ! DATA
      dataPointKey: 'ticketCode',
      dataValidator: zfd.text(z.string({ required_error: 'is required' }).min(5)),
      // startValue: 'asdf', // ! optional
      required: false,
      // targetActionKey: '',
      // setupConfig: {},
      // ! INPUT
      id: 'test-text-type',
      classes: 'test input-a tier-a',
      label: 'Ticket Code',
      placeholder: 'xxxxx',
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: ['Code is 5 characters long']
      }
    },
    {
      type: 'FIELDSET',
      classes: 'test fieldset-1 tier-a',
      legend: 'Tier A Legend',
      status: {
        hidden: false
      },
      // TIER B - - FIELDGROUP(s)
      subNodes: [
        {
          // ! ========================== FIRST NAME
          type: 'INPUT',
          inputType: 'TEXT',
          // ===
          dataPointKey: 'firstName',
          dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
          // startValue: '',
          required: false,
          // targetActionKey: '',
          // SC - N/A
          // ===
          id: 'test-text-first-name',
          classes: 'test input-1 tier-b',
          label: 'First Name',
          placeholder: 'John',
          // ===
          status: {
            hidden: false,
            disabled: false,
            errors: [],
            hints: []
          }
        },
        {
          type: 'FIELDGROUP',
          classes: 'test fieldgroup-1 tier-b',
          status: {
            hidden: false
          },
          // TIER C - - - INPUT(s)
          subNodes: [
            {
              // ! ========================== LAST NAME
              type: 'INPUT',
              inputType: 'TEXT',
              // ===
              dataPointKey: 'lastName',
              dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
              // startValue: '',
              required: false,
              // targetActionKey: '',
              // SC - N/A
              // ===
              id: 'test-text-last-name',
              classes: 'test input-1 tier-c',
              label: 'Last Name',
              placeholder: 'Smith',
              // ===
              status: {
                hidden: false,
                disabled: false,
                errors: [],
                hints: []
              }
            },
            {
              // ! ========================== JARGON Q's
              type: 'INPUT',
              inputType: 'TEXTAREA',
              // ===
              dataPointKey: 'questions',
              dataValidator: zfd.text(z.string({ required_error: 'are required' }).trim()),
              // startValue: '',
              required: false,
              // targetActionKey: '',
              // SC - N/A
              // ===
              id: 'test-textarea-jargon',
              classes: 'test input-4 tier-c',
              label: 'Questions',
              placeholder: 'Any thing we can help with?',
              // ===
              status: {
                hidden: false,
                disabled: false,
                errors: [],
                hints: []
                // hints: ['Do something special!']
              }
            },
            {
              // ! ========================== EMAIL
              type: 'INPUT',
              inputType: 'EMAIL',
              // ===
              dataPointKey: 'email',
              dataValidator: zfd.text(
                z
                  .string({ required_error: 'is required' })
                  .min(1)
                  .max(64)
                  .email({ message: 'must be a valid email address' })
              ),
              // startValue: '',
              required: false,
              // targetActionKey: '',
              // SC - N/A
              // ===
              id: 'test-email',
              classes: 'test input-2 tier-c',
              label: 'Email',
              placeholder: 'abc@gmail.com',
              // ===
              status: {
                hidden: false,
                disabled: false,
                errors: [],
                hints: []
              }
            }
          ]
        }
      ]
    },
    {
      // ! ========================== PASSWORD
      type: 'INPUT',
      inputType: 'PASSWORD',
      // ===
      dataPointKey: 'password',
      dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
      // startValue: '',
      required: true,
      // targetActionKey: '',
      // SC - N/A
      // ===
      id: 'test-password',
      classes: 'test password tier-a',
      label: 'Password',
      placeholder: '---',
      // ===
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    {
      // ! ========================== SAMPLE FOODS
      type: 'INPUT',
      inputType: 'RADIO_BTN',
      // ===
      dataPointKey: 'testRadioFoods',
      dataValidator: zfd.text(z.string().max(1)),
      startValue: '',
      required: false,
      targetActionKey: 'handleTestAction_B',
      setupConfig: {
        // ARBITRARY SPEC DETAILS
        valueOptions: [
          { label: 'Apple', value: 'A', id: 'apple-opt' },
          { label: 'Banana', value: 'B', id: 'banana-opt' },
          { label: 'Carrot', value: 'C', id: 'carrot-opt' }
        ]
      },
      // ===
      id: 'test-form-radio-btn',
      classes: 'test input-btn-radio tier-a',
      label: 'Sample foods',
      // PH - N/A
      // ===
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    {
      // ! ========================== TERMS & COND
      type: 'INPUT',
      inputType: 'CHECKBOX_BTN',
      // ===
      dataPointKey: 'testCheckboxKey',
      dataValidator: zfd.checkbox({ trueValue: 'true' }),
      // dataValidator: z.boolean({
      //   required_error: 'Terms must be accepted',
      //   invalid_type_error: 'Terms must be accepted'
      // }),
      // startValue: '',
      required: false,
      targetActionKey: 'handleTestAction_C',
      setupConfig: {
        description:
          'This is a much longer description of what is actually happening to the formData as a user selects this checkbox today at this present time.'
        // hideLabel: true
      },
      // ===
      id: 'test-checkbox',
      classes: 'test checkbox tier-c',
      label: 'Terms & Conditions',
      // PH - N/A
      // ===
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    {
      // ! ========================== CUSTOM BUTTON
      type: 'INPUT',
      inputType: 'CUSTOM_BTN',
      // === NO DATA
      targetActionKey: 'handleTestAction_A',
      // setupConfig: {},
      // ===
      id: 'test-form-custom-btn',
      classes: 'test input-btn-custom tier-a',
      label: 'Do action A',
      // PH - N/A
      // ===
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    {
      // ! ========================== SUBMIT
      type: 'INPUT',
      inputType: 'SUBMIT_BTN',
      // === NO DATA
      // ===
      id: 'test-form-submit',
      classes: 'test input-btn-submit tier-a',
      label: 'Submit this form',
      // ===
      status: {
        hidden: false,
        disabled: true,
        errors: [],
        hints: []
      }
    }
  ]
};
