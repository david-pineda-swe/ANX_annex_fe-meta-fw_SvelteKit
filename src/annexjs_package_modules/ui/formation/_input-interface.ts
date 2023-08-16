import type { InputRequirements } from 'src/global';

class FormationInputHandler {
  _formInterface: any;
  _inputNode: any;

  _updateNodeState = (update: any) => {
    this._inputNode.status.update((status: any) => {
      return {
        ...status,
        ...update
      };
    });
  };

  _setErrorsTo = (provided: Array<any>) => {
    const errors = Array.isArray(provided)
      ? provided
      : JSON.parse(provided).map((e: any) => e.message);
    this._updateNodeState({ errors });
  };

  constructor(inputReqs: InputRequirements) {
    const { fi, node } = inputReqs;
    this._formInterface = fi;
    this._inputNode = node;
  }

  validateLastEntry = (event: any) => {
    const { value } = event.target;
    const { dataValidator: validator } = this._inputNode;

    try {
      const validation = validator.parse(value);
      this._setErrorsTo([]);
      // TODO - COLLECT AND ASIGN FORM ENTRY FOR PRE-FLIGHT VALIDATION?
    } catch (errors: any) {
      this._setErrorsTo(errors);
    }
  };

  testEventHandle = (event: any, data: unknown = null) => {
    console.log(`>> TEST_EVENT_HANDLE:`, event.target.id);
    console.log(`>> event:`, event);
    console.log(`>> value:`, event.target.value);
    console.log(`>> suplement data:`, data);
    console.log(`>> working form interface:`, this._formInterface);
  };
}

export default FormationInputHandler;
