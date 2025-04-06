import { json } from "@sveltejs/kit";
import type { RequestHandler } from "../$types";

// TODO - TYPE => formData
// TODO - SUPABASE PROCESS REQ
export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {
  const {
    formData
  } = await request.json();
  // console.log(">> SERVER NOTES POST:");
  // console.table(formData);

  const responseMeta = {
    requestHandler: `POST - /api/notes`,
  }
  
  try {
    const serviceResponse = await supabase.from('notes').insert(formData);
    // console.log('>> CHECK:', serviceResponse);
    
    return json({
      ...responseMeta,
      success: !serviceResponse.error,
      ...serviceResponse
    });
  } catch(error) {
    return json({
      ...responseMeta,
      success: false,
      date: null,
      error
    });
  }
  
}