<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(formTier);
  const { fi, node } = formTier;
  const { _formData } = fi;
  const {id, classes, dataPointKey, placeholder, contextMeta, status } = node;
  const { currency, locale } = contextMeta;

  // TODO - CREATE UTILITY
  function formatDisplayCurrency(args: any): string {
    const { amount, currency, locale } = args;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(amount / 100);
  }

  // INITIALIZE VALUE
  let displayValue = formatDisplayCurrency({
    amount: $_formData[dataPointKey],
    currency,
    locale
  });

  // TODO - CREATE UTILITY
  function parseUSDcurrency(input: string): number {
    const sanitized = input.replace(/[^0-9.-]/g, '');
    const parsed = parseFloat(sanitized) || 0;
    const rawValue = parsed * 100;
    
    // TODO - ACTIVATE DIAGNOSTIC
    // console.table({
    //   sanitized,
    //   parsed,
    //   rawValue
    // });
    
    return rawValue;
  }

  const handleInput = (event: Event, validate?: boolean) => {
    const target = event.target as HTMLInputElement;
    const rawValue = parseUSDcurrency(target.value);

    displayValue = target.value; // Let user type freely

    if (validate) {
      inputHandler.updateInputEntry(rawValue);

      displayValue = formatDisplayCurrency({
        amount: $_formData[dataPointKey],
        currency,
        locale
      });
    }
  }
</script>

<input
  type="text"
  inputmode="decimal"
  {id}
  class={classes}
  {placeholder}
  name={dataPointKey}
  value={displayValue}
  required={$status.required}
  disabled={$status.disabled}
  on:input={handleInput}
  on:focusout={(e) => handleInput(e, true)}
/>
