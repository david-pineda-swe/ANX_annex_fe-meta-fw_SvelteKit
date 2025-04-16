import type { InputRequirements } from 'src/global';
import { parseZFDerrors } from './util/parse-errors';

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

  _setInputErrorsTo = (provided: Array<any>) => {
    const errors = parseZFDerrors(provided);
    this._updateNodeState({ errors });
  };

  _getThisFormTier = () => {
    return {
      fi: this._formInterface,
      node: this._inputNode
    };
  };

  _validateInputNode = (validator: any, enteredValue: any) => {
    try {
      this._setInputErrorsTo([]);
      // NOTE - throws Error if invalid entry || returns the value if good to go
      // const validation =
      validator.parse(enteredValue);
    } catch (errors: any) {
      this._setInputErrorsTo(errors);
    }
  };

  constructor(formTier: InputRequirements) {
    const { fi, node } = formTier;
    this._formInterface = fi;
    this._inputNode = node;
  }

  validateLastEntry = ({ value: enteredValue, bypassValidation }: any) => {
    const { dataPointKey, dataValidator: validator } = this._inputNode;
    const { hasFormLevelErrors, updateFormData, validateFormData } = this._formInterface;

    updateFormData({ [dataPointKey]: enteredValue });
    if (hasFormLevelErrors()) {
      // should validate inputNode + entire form for error check-off
      this._validateInputNode(validator, enteredValue);
      validateFormData();
    } else {
      // clean form - first pass validation
      if (!bypassValidation) {
        this._validateInputNode(validator, enteredValue);
      }
    }
  };

  useTargetAction = (event: any) => {
    const { targetActionKey } = this._inputNode;
    this._formInterface.handleActionSubmission({
      isFormSubmit: false,
      event,
      targetActionKey
    });
  }

  updateInputEntry = (eventOrValue: any) => {
    const value = (eventOrValue.target) ? eventOrValue.target.value : eventOrValue;
    this.validateLastEntry({ value });
  };

  updateRadioSelection = (event: any) => {
    const value = event.target.value;
    this.validateLastEntry({ value });
  };

  updateCheckbox = (event: any) => {
    const checked = event.target.checked;
    const value = checked ? event.target.value : undefined;
    this._updateNodeState({ checked });
    this.validateLastEntry({
      value,
      bypassValidation: true // will be pre-defined by form outline - not a user provided value
    });
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
