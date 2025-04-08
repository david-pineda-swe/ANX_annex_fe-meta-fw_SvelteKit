<script lang="ts">
  import type { InputRequirements } from "src/global";
  import FormationInputHandler from "../_input-interface";
  import { onMount } from "svelte";

  export let formTier: InputRequirements = {
    fi: undefined,
    node: undefined
  };

  const inputHandler = new FormationInputHandler(formTier);
  const { fi, node } = formTier;
  const { _formData } = fi;
  const {id, classes, dataPointKey, placeholder, setupConfig, status } = node;
  const { useEnhancedOptions, valueOptions } = setupConfig;

  const proxyClasses = `proxy-options ${classes}`;

  let displayProxyOptions = false;
  let handleOptionSelection: (valueSelection: string | any) => void;

  onMount(() => {
    const selectorElement = document.getElementById(id) as HTMLSelectElement | null;
    console.log('>> WHAT IS SELECTOR:', selectorElement);

    if (selectorElement) {
      selectorElement?.addEventListener('change', e => {
        inputHandler.updateInputEntry(e);
      });

      handleOptionSelection = (valueSelection: string | any) => {
        console.log('User has selected:', valueSelection);
        selectorElement!.value = valueSelection;
        selectorElement!.dispatchEvent(new Event('change'));
      };
      
      selectorElement?.addEventListener('mousedown', (e: any) => {
        // NEXT - CHECK IF MEDIA OR DEVICE is DESKTOP 
        // if (mobile) {}
        if (useEnhancedOptions) {
          e.preventDefault();
          displayProxyOptions = true;
        }
      });
  
      // HIDE PROXY
      document.addEventListener('click', (e: any) => {
        if (!selectorElement.contains(e.target)) {
          displayProxyOptions = false;
        }
      });
    }
  });
</script>

<div class="select-box">
  <select
    {id}
    class={classes}
    name={dataPointKey}
    required={$status.required}
    disabled={$status.disabled}
  >
    <option class="placeholder-option" value="">
      {#if placeholder}
        {placeholder}
      {:else}
        -- Select one
      {/if}
    </option>
  
  <!--NEXT - SUPPORT OPT GROUPS-->
    {#each valueOptions as opt}
      <option id={opt.id} value={opt.value}>{opt.label}</option>
    {/each}
  </select>
</div>

{#if displayProxyOptions}
  <ul
    id={`proxy-select-${id}`}
    class={proxyClasses}
  >
    <li class="placeholder-option">
      <button onclick={() => { handleOptionSelection('') }}>
        {#if placeholder}
          {placeholder}
        {:else}
          -- Select one
        {/if}
      </button>
    </li>

    {#each valueOptions as opt}
      <li>
        <button
          id={opt.id}
          class:active={$_formData[dataPointKey] === opt.value}
          onclick={() => { handleOptionSelection(opt.value) }}
        >
          {opt.label}
        </button>
      </li>
    {/each}
  </ul>
{/if}
