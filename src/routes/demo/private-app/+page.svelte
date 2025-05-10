<script lang="ts">
  import { invalidate } from '$app/navigation'
  import type { EventHandler } from 'svelte/elements'

  import type { PageData } from './$types'
  import FormationInterface from 'annex/ui/formation/_interface';
  import DynamicSection from 'annex/ui/layout/dynamic-section.svelte';
  import FormPlotter from 'annex/ui/formation/form-plotter.svelte';
  import { formData, zfd } from 'zod-form-data';
  import { z } from 'zod';

  let { data } = $props()
  // NOTE - record data comes in from the server side

  const POC_NOTES_CONSTANTS = {
  // TBD
  };

  const poc_notes_form_outline = {
    formId: 'poc-add-notes',
    formClasses: 'stacked',
    nodes: [
      // note: text
      {
        type: 'INPUT',
        inputType: 'TEXT',
        dataPointKey: 'note',
        dataValidator: zfd.text(z.string({ required_error: 'is required' })),
        // required: true,
        id: 'poc-addNote_note',
        classes: 'poc-field-text',
        label: 'Note',
        placeholder: 'What to do?',
        status: {
          hidden: false,
          disabled: false,
          errors: [],
          hints: []
        }
      },
      // sku: varchar
      {
        type: 'INPUT',
        inputType: 'TEXT',
        dataPointKey: 'sku',
        dataValidator: zfd.text(z.string({ required_error: 'is required' })),
        // required: true,
        id: 'poc-addNote_sku',
        classes: 'poc-field-text',
        label: 'SKU',
        placeholder: 'What to track?',
        status: {
          hidden: false,
          disabled: false,
          errors: [],
          hints: []
        }
      },
      // stock_count: int4
      {
        type: 'INPUT',
        inputType: 'TEXT',
        dataPointKey: 'stock_count',
        dataValidator: zfd.text(z.string({ required_error: 'is required' })),
        // required: true,
        id: 'poc-addNote_stockCt',
        classes: 'poc-field-text',
        label: 'Stock Count',
        placeholder: 'How many?',
        status: {
          hidden: false,
          disabled: false,
          errors: [],
          hints: []
        }
      },
      // price: numeric
      {
        type: 'INPUT',
        inputType: 'TEXT',
        dataPointKey: 'price',
        dataValidator: zfd.text(z.string({ required_error: 'is required' })),
        // required: true,
        id: 'poc-addNote_price',
        classes: 'poc-field-text',
        label: 'Price',
        placeholder: 'How much?',
        status: {
          hidden: false,
          disabled: false,
          errors: [],
          hints: []
        }
      },
      // is_active: boolean
      {
        type: 'INPUT',
        inputType: 'CHECKBOX_BTN',
        // ===
        dataPointKey: 'is_active',
        dataValidator: zfd
          .checkbox({ trueValue: 'terms_accepted' })
          .refine((val) => val, 'must be accepted'),
        // dataValidator: z.boolean({
        //   required_error: 'Terms must be accepted',
        //   invalid_type_error: 'Terms must be accepted'
        // }),
        startValue: false, // ? N/A - reserved for preprop
        required: false,
        // targetActionKey: 'handleTestAction_C',
        contextMeta: {
          onValue: 'terms_accepted',
          description:
            'Item selection and size has been confirmed.'
          // hideLabel: true
        },
        // ===
        id: 'poc-addNote_isActive',
        classes: 'nope',
        label: 'Item Confirmed Active',
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
      // metadata: jsonb
    ]
  };

  const notePOC = new FormationInterface({
  formOutline: poc_notes_form_outline,
  targetActions: {},
  formSubmitAction: async(validatedForm: any, event: any) => {
    console.log('>> FORM_SUB -  NOTE_POC HAS FORMDATA:', validatedForm);
  
    const addNoteRequest = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        formData: validatedForm
      })
    });


  }
  });

  notePOC.verifyInstance();

  // NOTE - SAMPLE TUT IMPL

  let { notes, supabase, user } = $derived(data)

  const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    if (!evt.target) return

    const form = evt.target as HTMLFormElement

    const note = (new FormData(form).get('note') ?? '') as string
    if (!note) return

    const { error } = await supabase.from('notes').insert({ note })
    if (error) console.error(error)

    invalidate('supabase:db:notes')
    form.reset()
  }
</script>

<h1 class="test-private">TEST PRIVATE APP</h1>

<h1>Private page for user: {user?.email}</h1>
<h2>Notes</h2>

<DynamicSection
  supportClasses={"demo formation add-notes"}
  layout={"stacked"}
>
  <FormPlotter
    formInterface={notePOC}
  />
</DynamicSection>


<!-- NOTE - Simple TUT form example -->
<ul>
  {#each notes as note}
    <li>{note.note}</li>
  {/each}
</ul>
<form class="supa-tut-sample" onsubmit={handleSubmit}>
  <label>
    Add a note
    <input name="note" type="text" />
  </label>
</form>

<style lang="scss">
  .supa-tut-sample {
    border: 1px solid red;

    label {
      border: 1px solid white;

      input {
        border: 1px solid fuchsia;
      }
    }
  }  
</style>