import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

//NOTE - verbose server request example
// export const POST: RequestHandler = async ({ request, locals }) => {
//   const clientRequestData = await request.json();
//   console.log('\n >> CLIENT_REQUEST_DATA:', clientRequestData);
//   console.log('\n >> SERVER APP LOCALS:', locals);
  
//   // > Network request goes here <
//   // > Or access and utilize locals <
//   // > handle errors + loging from/for network reqsuest <
//   // > handle response from network reqsuest <

//   return json({success: true, clientRequestData, locals});
//   // return json({success: false });
// };

export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {
  const {
    isRegistration,
    formData: {
      loginEmail: email,
      loginPassword: password
    }
  } = await request.json();
  const responseMeta = {
    requestHandler: `POST - /demo/login${isRegistration ? ' > registration': ''}`,
    // success
    // ...
    // data
    // error
  }

  try {
    let serviceResponse;
    if (isRegistration) {
      // registration
      serviceResponse = await supabase.auth.signUp({ email, password });

    } else {
      // login
      serviceResponse = await supabase.auth.signInWithPassword({ email, password });
    }

    // TODO - ADD SERVICE ERROR LOGGING 

    return json({
      ...responseMeta,
      success: !serviceResponse.error,
      ...serviceResponse
    });
  } catch(error) {
    // TODO - ADD API ERROR LOGGING 
    return json({
      ...responseMeta,
      success: false,
      data: null,
      error
    });
  }
};