import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { isValid, parseISO, isAfter, startOfToday } from 'date-fns';
import { addTextNode } from 'annex/ui/formation/util/add-input-node';


// - DOCUMENT NEW INPUTS
// - type
// - dependent util
// - add to formation and standard/_input-index
// - demo util excercise
// - Document input gen / utill usage

// TIER A / B / C form expression outline
export const formA_outline = {
  meta: {},
  formId: 'ARB_TEST_FORM_A',
  // TODO - DESIGNATE LIGHT AND DARK THEME SWITCH-CLASS
  // formClasses: 'test form-a full-tier-set',
  formClasses: 'stacked test form-a full-tier-set',
  // TIER A - FIELDSET(s) + & B || C
  nodes: [
    // ! ========================== CURRENCY - USD
    {
      type: 'INPUT',
      inputType: 'CURRENCY',
      // ! DATA
      dataPointKey: 'amountUSDtest',
      dataValidator: zfd.numeric(z.number().min(69, {message: 'Payment must be at least $0.69'})),
      startValue: 69,
      required: true,
      // targetActionKey: '',
      // TODO - ADD GLOBAL SUPPORT FOR DESIGNATED CURRENCY AND LOCALE
      setupConfig: {
        currency:"USD",
        locale: "en-US"
      },
      // ! INPUT
      id: 'test-currency-usd',
      classes: 'test currency-usd tier-a',
      label: 'Amount Towards Balance',
      placeholder: 'How much can you pay?',
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    // ! ========================== DEEP Select
    {
      type: 'INPUT',
      inputType: 'SELECT',
      // ! DATA
      dataPointKey: 'testDeepSelect',
      dataValidator: zfd.text(),
      // startValue: 'asdf', // TBD - 
      required: false,
      // targetActionKey: '',
      contextMeta: {
        useEnhancedOptions: true,
        valueOptions: [
          {label: 'Fruit', disabled: false, groupItems: [
            { label: 'Apple', value: 'A', id: 'apple-opt' },
            { label: 'Banana', value: 'B', id: 'banana-opt' },
            { label: 'Carrot', value: 'C', id: 'carrot-opt' },
          ]},
          {label: 'Dessert', disabled: true, groupItems: [
            { label: 'Donut', value: 'D', id: 'donut-opt' },
            { label: 'Eclaire', value: 'E', id: 'eclaire-opt' },
            { label: 'French Toast', value: 'F', id: 'f-toast-opt' },
            { label: 'Ginger Bread', value: 'G', id: 'g-bread-opt' }
          ]},
          { label: 'Habenero', value: 'H', id: 'apple-opt' },
          { label: 'Ivy', value: 'I', id: 'banana-opt' },
          { label: 'Jicama', value: 'J', id: 'carrot-opt', disabled: true },
          { label: 'Kale', value: 'K', id: 'donut-opt' }
        ]
      },
      // ! INPUT
      id: 'test-deep-select',
      classes: 'test deep-select input-a tier-a select',
      label: 'Test Deep Select',
      // placeholder: '-- Please select a fruit',
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    // ! ========================== Select
    {
      type: 'INPUT',
      inputType: 'SELECT',
      // ! DATA
      dataPointKey: 'testSelect',
      dataValidator: zfd.text(),
      // startValue: 'asdf', // ? optional
      required: true,
      // targetActionKey: '',
      contextMeta: {
        useEnhancedOptions: true,
        valueOptions: [
          { label: 'Apple', value: 'A', id: 'apple-opt' },
          { label: 'Banana', value: 'B', id: 'banana-opt' },
          { label: 'Carrot', value: 'C', id: 'carrot-opt' },
          { label: 'Donut', value: 'D', id: 'donut-opt' }
        ]
      },
      // ! INPUT
      id: 'test-select',
      classes: 'test input-a tier-a select',
      label: 'Test Select',
      // placeholder: '-- Please select a fruit',
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    // ! ========================== Ticket Qty (NUMBER)
    {
      type: 'INPUT',
      inputType: 'NUMBER',
      // ! DATA
      dataPointKey: 'ticketQty',
      dataValidator: zfd.numeric(z.number().min(5, {message: 'Actually... you need to get at least 5'})),
      // startValue: 12, // ? optional
      required: true,
      // targetActionKey: '',
      // contextMeta: {},
      // ! INPUT
      id: 'test-number-type',
      classes: 'test input-a tier-a number-field',
      label: 'Ticket Quantity',
      placeholder: 'How many?',
      minValue: 2,  // ? opt
      maxValue: 15, // ? opt
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: ['Need a number of tickets', 'Max is 15 tickets']
      }
    },
    // ! ========================== DATE_PICKER
    {
      type: 'INPUT',
      inputType: 'DATE_PICKER',
      // ! DATA
      dataPointKey: 'dateSelect',
      // dataValidator: zfd.text(), // Lax validation
      dataValidator: zfd.text(
        z.string()
        .regex(
          /^\d{4}-\d{2}-\d{2}$/, // Regex to match "YYYY-MM-DD" strictly
          {message: 'Date must be in YYYY-MM-DD format'}
        )
        .refine((date) => isValid(parseISO(date)), {
          message: 'Invalid calendar date',
        })
        .refine((date) => isAfter(parseISO(date), startOfToday()), {
          message: 'Date must be after today',
        })
      ),
      startValue: '2025-04-12', // ! optional
      required: true,
      // targetActionKey: '',
      contextMeta: {
        // flatpickr
        displayDateFormat: 'm/d/Y',
      },
      // ! INPUT
      id: 'test-date-pick',
      classes: 'test date input-a tier-a',
      label: 'Event start date',
      placeholder: 'Please select a date for your arrival',
      // ! NODE STATE
      status: {
        hidden: false,
        disabled: false,
        errors: [],
        hints: ['Should be after today']
      }
    },
    // ! ========================== TICKET CODE w/ util
    addTextNode({
      dataValidator: zfd.text(z.string({ required_error: 'is required' }).min(5)),
      type: 'INPUT',
      inputType: 'TEXT',
      dataPointKey: 'ticketCodeUtil',
      id: 'test-text-type-util',
      classes: '',
      required: false,
      label: 'Ticket Code w/ UTIL',
      placeholder: 'This is the first util genrated input',
      startValue: 'TaDur',
      status: {
        hidden: false,
        disabled: false,
        // hints: ['This is for the next set of tickets'],
        // hints: ["This is a test hint"],
        // errors: ["Test pre prop error"]
      }
    }),
    {
      type: 'INPUT',
      inputType: 'TEXT',
      // ! DATA
      dataPointKey: 'ticketCode',
      dataValidator: zfd.text(z.string({ required_error: 'is required' }).min(5)),
      // startValue: 'asdf', // ! optional
      required: true,
      // targetActionKey: '',
      // contextMeta: {},
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
    // ! === FIELDSET
    {
      type: 'FIELDSET',
      classes: 'test fieldset-1 tier-a',
      legend: 'Tier A Legend',
      status: {
        hidden: false
      },
      // TIER B - - FIELDGROUP(s)
      subNodes: [
        // ! ========================== FIRST NAME
        {
          type: 'INPUT',
          inputType: 'TEXT',
          // ===
          dataPointKey: 'firstName',
          dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
          // startValue: '',
          required: true,
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
        // ! === FIELDGROUP
        {
          type: 'FIELDGROUP',
          classes: 'test fieldgroup-1 tier-b',
          status: {
            hidden: false
          },
          // TIER C - - - INPUT(s)
          subNodes: [
            // ! ========================== LAST NAME
            {
              type: 'INPUT',
              inputType: 'TEXT',
              // ===
              dataPointKey: 'lastName',
              dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
              // startValue: '',
              required: true,
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
            // ! ========================== [TEXTAREA] w/ util
            addTextNode({
              type: 'INPUT',
              inputType: 'TEXTAREA',
              dataPointKey: 'questionsAsked',
              dataValidator: zfd.text(
                z.string({ required_error: 'are required' }).trim().optional()
              ),
              // targetActionKey: '',
              id: 'test-textarea-util',
              classes: 'test input-4 tier-c',
              label: 'Questions?',
              placeholder: 'Any thing we can help with?',
              required: false,
              status: {
                hidden: false,
                disabled: false
              }
            }),
            // ! ========================== EMAIL w/ UTIL
            addTextNode({
              dataValidator: zfd.text(
                z
                  // FIX - DROP REQUIRED VALIDATION
                  .string({ required_error: 'is required' })
                  // .string()
                  .min(1)
                  .max(64)
                  .email({ message: 'must be a valid email address' })
              ),
              type: 'INPUT',
              inputType: 'EMAIL',
              dataPointKey: 'emailEntryUtil',
              id: 'test-email-util',
              classes: 'test input-2 tier-c',
              label: 'Util Email',
              placeholder: 'abc@gmail.com',
              required: true,
              startValue: 'taco@gmail.com',
              // targetActionKey: 'testUtilEmail',
              status: {
                hidden: false,
                disabled: false,
                // errors: ['test add error'],
                // hints: ['test add hint']
              }
            }),
          ]
        }
      ]
    },
    // ! ========================== PASSWORD W/ UTIL
    addTextNode({
      type: 'INPUT',
      inputType: 'PASSWORD',
      dataPointKey: 'passByUtil',
      dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
      required: true,
      id: 'test-pass',
      classes: 'test password tier-a',
      label: 'Password By Util',
      placeholder: '--A--',
      //   // startValue: '',
      //   // targetActionKey: '',
      status: {
        hidden: false,
        disabled: false
      }
    }),
    // ! ========================== SAMPLE FOODS [RADIO_BTN]
    {
      type: 'INPUT',
      inputType: 'RADIO_BTN',
      // ===
      dataPointKey: 'testRadioFoods',
      dataValidator: zfd.text(z.string().max(1)),
      startValue: '',
      required: false,
      targetActionKey: 'handleTestAction_B',
      contextMeta: {
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
    // ! ========================== TERMS & COND [CHECKBOX_BTN]
    {
      type: 'INPUT',
      inputType: 'CHECKBOX_BTN',
      // ===
      dataPointKey: 'termsAccepted',
      dataValidator: zfd
        .checkbox({ trueValue: 'terms_accepted' })
        .refine((val) => val, 'must be accepted'),
      // dataValidator: z.boolean({
      //   required_error: 'Terms must be accepted',
      //   invalid_type_error: 'Terms must be accepted'
      // }),
      startValue: false, // N/A - reserved for preprop
      required: true,
      targetActionKey: 'handleTestAction_C',
      contextMeta: {
        onValue: 'terms_accepted',
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
        checked: false,
        hidden: false,
        disabled: false,
        errors: [],
        hints: []
      }
    },
    // {
    //   // ! ========================== CUSTOM BUTTON
    //   type: 'INPUT',
    //   inputType: 'CUSTOM_BTN',
    //   // === NO DATA
    //   targetActionKey: 'handleTestAction_A',
    //   // contextMeta: {},
    //   // ===
    //   id: 'test-form-custom-btn',
    //   classes: 'test input-btn-custom tier-a',
    //   label: 'Do action A',
    //   // PH - N/A
    //   // ===
    //   status: {
    //     hidden: false,
    //     disabled: false,
    //     errors: [],
    //     hints: []
    //   }
    // },
    // ! ========================== SUBMIT
    {
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
