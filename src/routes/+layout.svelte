<script lang="ts">
  import type { Snippet } from 'svelte';
  import PrimaryLayoutPublic from '$pec/components/interface/primary-layout-public.svelte';

  import 'annex/core/_styles.scss';
	import '$pec/_styles.scss';

  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

	import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';

  interface MainLayoutSig {
    data: any;
    //
    children?: Snippet
  }
  const props = $props();
  const {
    data,
    children
  } = props as MainLayoutSig;

  // AUTH STATE MANAGEMENT
  let { session, supabase } = $derived(data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  });
</script>


<svelte:head>
	<!-- VERIFY - THIS IS THE RIGHT LOCATION FOR PROJECT WIDE IMPORTS AND HEAD CONFIGS -->
	<!-- TODO - integrate settings from project.theme configurations -->
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&display=swap');
	</style>

	<!-- TODO - ADD SUPPORT FOR SPEC-PROJECT CONFIGURATION -->
	<link rel="icon" type="image/x-icon" href={logo}>
</svelte:head>


<PrimaryLayoutPublic>
  {@render children?.()}
</PrimaryLayoutPublic>
