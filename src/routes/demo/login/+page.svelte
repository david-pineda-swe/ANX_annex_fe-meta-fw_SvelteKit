<script lang="ts">
  // - CREATE LOGIN PAGES PER STEP 9 
  // DOCS - https://supabase.com/docs/guides/auth/server-side/sveltekit

  import { zfd } from "zod-form-data";
  import { z } from "zod";
  import DynamicSection from "annex/ui/layout/dynamic-section.svelte";
  import FormationInterface from "annex/ui/formation/_interface";
  import FormPlotter from "annex/ui/formation/form-plotter.svelte";
  import { goto } from "$app/navigation";

  const POC_LOGIN_CONSTANTS = {
    errorMessages: {
      // Login
      invalid_credentials: 'Please check your username or password and try again.',
      email_not_confirmed: 'Please go to your email and click the link to confirm registration.',
      // Register
      weak_password: 'Please select a different password that is more secure.'
    }
  }

  // NOTE - FORM OUTLINE
  const poc_login_form_outline = {
    formId: "poc-supabase-login",
    formClasses: "stacked",
    nodes: [
      {
        type: 'FIELDSET',
        classes: 'supabase-login',
        legend: 'Login to Supabase POC demo',
        subNodes: [
          // EMAIL
          {
            type: 'INPUT',
            inputType: 'EMAIL',
            dataPointKey: 'loginEmail',
            dataValidator: zfd.text(
              z
                .string({ required_error: 'is required' })
                .min(1)
                .max(64)
                .email({ message: 'must be a valid email address' })
            ),
            required: true,
            id: 'poc-login-email',
            label: 'Email:',
            placeholder: 'Your email',
            status: {
              hidden: false,
              disabled: false,
              errors: [],
              hints: []
            }
          },
          // PASS
          {
            type: 'INPUT',
            inputType: 'PASSWORD',
            dataPointKey: 'loginPassword',
            dataValidator: zfd.text(z.string({ required_error: 'is required' }).trim()),
            required: true,
            id: 'poc-login-password',
            label: 'Password:',
            placeholder: 'Your password',
            status: {
              hidden: false,
              disabled: false,
              errors: [],
              hints: []
            }
          },
          // SUBMIT - LOGIN
          {
            // ! ========================== SUBMIT
            type: 'INPUT',
            inputType: 'SUBMIT_BTN',
            // === NO DATA
            // ===
            id: 'poc-login-submit',
            classes: 'poc supabase-login input-btn-submit',
            label: 'LOGIN',
            // ===
            status: {
              hidden: false,
              disabled: true,
              errors: [],
              hints: []
            }
          },
          // SUBMIT - REGISTER
          {
            // ! ========================== CUSTOM BUTTON
            type: 'INPUT',
            inputType: 'CUSTOM_BTN',
            targetActionKey: 'handlePOCregistration',
            id: 'poc-supa-registration-btn',
            classes: 'test register',
            label: 'REGISTER',
            status: {
              hidden: false,
              disabled: false,
              errors: [],
              hints: []
            }
          },
        ]
      }
    ]
  }

  // NOTE - FORM INTERFACE
  const loginPOC = new FormationInterface({
    formOutline: poc_login_form_outline,
    // NOTE - verbose client request example
    // formSubmitAction: async(validatedForm: any) => {
    //   // Confirm form data
    //   console.log('>> LOGIN VALIDATED_FORM:');
    //   console.table(validatedForm);

    //   // configure & initialize a request to server
    //   const loginRequest = await fetch('/demo/login', {
    //     method: 'POST',
    //     body: JSON.stringify(validatedForm)
    //   });

    //   // pull server response
    //   const response = await loginRequest.json();

    //   // handle any subsequent requests or middleware
    //   console.log('>> RESPONSE:', response);
      
    //   // return response to formation-UI for visual success / error handling
    //   return response;
    // }
    targetActions: {
      handlePOCregistration: async(validatedForm: any, event: any) => {
        console.log('>> VALIDATED FORM for REGISTER:', validatedForm);

        const registerRequest = await fetch('/demo/login', {
          method: 'POST',
          body: JSON.stringify({
            isRegistration: true,
            formData: validatedForm
          })
        });

        const response = await registerRequest.json();

        console.log('>> REGISTER RESPONSE:', response);
      
        if (response.success) {
          goto('/demo/login/pending');
        } else {
          const errorCode = response.error.code;

          // TODO - create util helper on interface or from @annex for errorCode messages
          return {
            errorCode: errorCode,
            //@ts-ignore
            text: POC_LOGIN_CONSTANTS.errorMessages[errorCode],
            displayType: 'LIST'
          }
        }
      }
    },
    formSubmitAction: async(validatedForm: any, event: any) => {
      const loginRequest = await fetch('/demo/login', {
        method: 'POST',
        body: JSON.stringify({
          isRegistration: false,
          formData: validatedForm
        })
      });

      const response = await loginRequest.json();
      
      console.log('>> LOGIN RESPONSE:', response);

      if (response.success) {
        goto('/demo/private-app');
      } else {
        const errorCode = response.error.code;
        return {
          errorCode,
          //@ts-ignore
          text: POC_LOGIN_CONSTANTS.errorMessages[errorCode],
          displayType: 'LIST'
        }
        
        // NOTE - SAMPLE TYPE - ResponseHandoff 
        // return {
        //   errorCode
        //   text: POC_LOGIN_CONSTANTS.errorMessages[errorCode], // TODO - CREATE a messageCopyIndex() 
        //   displayType: 'LIST', // [ LIST, TOAST, BANNER ]
        //   clearNoticeDelay: 2000, // TODO
        //   callBackDelay: 3000, // TODO
        //   delayedCallBack: () => {} // TODO
        //   response
        // };
      }
    }
  });

  loginPOC.verifyInstance();
</script>

<form method="POST" action="?/demo/login">
  <label>
    Email
    <input name="email" type="email" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Login</button>
  <button formaction="?/signup">Sign up</button>
</form>

<DynamicSection
  supportClasses={"demo formation login"}
  layout={"stacked"}
>
  <FormPlotter
    formInterface={loginPOC}
  />
</DynamicSection>