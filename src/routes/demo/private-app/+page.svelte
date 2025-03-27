<script lang="ts">
  import { invalidate } from '$app/navigation'
  import type { EventHandler } from 'svelte/elements'

  import type { PageData } from './$types'

  let { data } = $props()
  // NOTE - record data comes in from the server side
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