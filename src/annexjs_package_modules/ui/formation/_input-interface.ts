class FormationInputHandler {
  _formInterface: any;

  constructor(fi: any) {
    this._formInterface = fi;
  }

  testEventHandle = (event: any, data: any) => {
    console.log(`>> TEST_EVENT_HANDLE:`, event);
    console.log(`>> DATA:`, data);
    console.log(`>> FORM INTERFACE:`, this._formInterface);
  };
}

export default FormationInputHandler;
