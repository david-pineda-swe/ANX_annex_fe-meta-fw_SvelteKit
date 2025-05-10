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
  const {id, classes, dataPointKey, placeholder, contextMeta, status } = node;
  const { useEnhancedOptions, valueOptions } = contextMeta;

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
        // TODO - CHECK IF MEDIA OR DEVICE is DESKTOP 
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

{#snippet optButton(opt: any, groupDisabled?: boolean)}
  <button
    id={opt.id}
    class:active={$_formData[dataPointKey] === opt.value}
    disabled={opt.disabled || groupDisabled}
    onclick={() => { handleOptionSelection(opt.value) }}
  >
    {opt.label}
  </button>
{/snippet}

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

    {#each valueOptions as opt}
      {#if opt.groupItems}
        <optgroup
          label={opt.label}
          disabled={opt.disabled}
        >
          {#each opt.groupItems as subOpt}
            <option
              id={subOpt.id}
              value={subOpt.value}
              disabled={subOpt.disabled}
            >
              {subOpt.label}
            </option>
          {/each}
        </optgroup>
      {:else}
      <option
        id={opt.id}
        value={opt.value}
        disabled={opt.disabled}
      >
        {opt.label}
      </option>
      {/if}
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
      <li
        class:optgroup-label={opt.groupItems}
      >
        {#if opt.groupItems}
          {opt.label}
        {:else}
          {@render optButton(opt)}
        {/if}
      </li>

      {#if opt.groupItems}
        {#each opt.groupItems as subOpt}
          <li class="optgroup-item">
            {@render optButton(subOpt, opt.disabled)}  
          </li>
        {/each}
      {/if}
    {/each}
  </ul>
{/if}
