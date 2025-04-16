<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";
  import { onMount } from "svelte";
  import flatpickr from "flatpickr";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(formTier);
  const { fi, node } = formTier;
  const { _formData } = fi;
  const {id, classes, dataPointKey, placeholder, setupConfig, status } = node;
  const { displayDateFormat, locale } = setupConfig;

  // X - RELOCATE to FORMAT UTIL using date-fns
  // function formatDisplayDate(args: any): string {
  //   const { dateStr, dateFormat, locale } = args;
    
  //   if (dateFormat && locale) {
  //     const parsedDate = parseISO(dateStr);
  //     return format(parsedDate, dateFormat, {locale});
  //   } else if (dateFormat) {
  //     const parsedDate = parseISO(dateStr);
  //     return format(parsedDate, dateFormat);
  //   } else {
  //     return dateStr;
  //   }
  // }

  let defaultEntryHandle: any = () => {
    // console.log('>> DEFAULT HANDLE BYPASSED');
  };

  onMount(() => {
    const dateInputElement = document.getElementById(id) as HTMLInputElement | null;
    // console.log('>> WHAT IS DATE INPUT:', dateInputElement);

    if (dateInputElement) {
      // TODO - CLEAN UP ON DESTROY
      const fp = flatpickr(dateInputElement, {
        defaultDate: $_formData[dataPointKey],
        //
        altInput: true,
        altFormat: displayDateFormat,
        // dateFormat, // DEFAULT IS: YYYY-MM-DD
        onChange: (selectDates, dateStr, _instance) => {
          // DIAG - DATE SELECTION
          // console.log('>> DATE SELECTED:');
          // console.table({
          //   selectDates,
          //   dateStr
          // });

          inputHandler.updateInputEntry(dateStr);
        }
      });
    } else {
      defaultEntryHandle = (e: Event) => {
        // TODO - FORMAT FOR defaultEntryHandle
        // - DISPLAY
        // - FORM DATA
        inputHandler.updateInputEntry(e);
      }
    }
  });
</script>

<input
  type="text"
  {id}
  class={classes}
  {placeholder}
  name={dataPointKey}
  value={$_formData[dataPointKey]}
  required={$status.required}
  disabled={$status.disabled}
  on:focusout={defaultEntryHandle}
/>
