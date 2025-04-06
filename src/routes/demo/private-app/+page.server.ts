import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
  depends('supabase:db:notes')
  const { data: notes } = await supabase.from('notes').select('id,note').order('id')
  // console.log('>> SUPABASE => NOTES:', notes);
  
  return { notes: notes ?? [] }
}