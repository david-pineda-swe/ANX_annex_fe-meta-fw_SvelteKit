import type { InputRequirements } from 'src/global';

class FormationInputHandler {
  // CONFIG
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

  _getInputReqs = () => {
    return {
      fi: this._formInterface,
      node: this._inputNode
    };
  };

  constructor(inputReqs: InputRequirements) {
    const { fi, node } = inputReqs;
    this._formInterface = fi;
    this._inputNode = node;
  }

  validateLastEntry = ({ value: enteredValue, bypass }: any) => {
    const { dataPointKey, dataValidator: validator } = this._inputNode;

    this._formInterface.updateFormData({ [dataPointKey]: enteredValue });

    if (!bypass) {
      try {
        // NOTE - throws Error if invalid entry || returns the value if good to go
        // const validation =
        validator.parse(enteredValue);
        this._setErrorsTo([]);
      } catch (errors: any) {
        this._setErrorsTo(errors);
      }
    }
  };

  // TODO - HELPER METHODS for all input types
  // this.useTargetAction(event);
  // - make private
  useTargetAction = (event: any) => {
    const { targetActionKey } = this._inputNode;
    const targetAction = this._formInterface.getTargetAction(targetActionKey);

    if (targetAction) {
      const { fi, node } = this._getInputReqs();
      targetAction({ event, node, fi });
    }
  };

  updateTextEntry = (event: any) => {
    const value = event.target.value;
    this.validateLastEntry({ value });
  };

  updateRadioSelection = (event: any) => {
    const value = event.target.value;
    this.validateLastEntry({ value });
  };

  updateCheckbox = (event: any) => {
    // NOTE - per zfd.checkbox() documentation
    const checked = event.target.checked ? 'true' : undefined;
    this.validateLastEntry(checked);
  };

  // X - TESTING
  testEventHandle = (event: any, data: unknown = null) => {
    console.log(`>> TEST_EVENT_HANDLE:`, event.target.id);
    console.log(`>> event:`, event);
    console.log(`>> value:`, event.target.value);
    console.log(`>> suplement data:`, data);
    console.log(`>> working form interface:`, this._formInterface);
  };
}

export default FormationInputHandler;
