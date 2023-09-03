import { isEmpty } from '@annexjs/uitils';
import { writable, get } from 'svelte/store';
import { zfd } from 'zod-form-data';
import { parseEnhancedZFDerrors } from './util/parse-errors';

class FormationInterface {
  // PROPS FROM CONFIG
  _formOutline: any;
  _meta: any;
  _formId: string;
  _formClasses: string;
  _nodes: Array<any>;

  // MODEL
  _formSubmitAction: any;
  // _logErrorAction: any; // TODO <<<
  _targetActions: any;
  _schema: any;
  _nodeIndex: any;

  // STATE
  _formData: any;
  _hasTargetSubmitButton = false;
  _hasRequiredFields = false;
  _defaultSubmitActivated = writable(false);
  _formLevelErrors = writable([]);
  //

  _augmentInputNodes = (nodes: Array<any>): Array<any> => {
    return nodes.map((node: any) => {
      const { status, subNodes } = node;
      const hasSubNodes = !isEmpty(subNodes);

      if (hasSubNodes) {
        return {
          ...node,
          ...{
            status: writable(status),
            subNodes: this._augmentInputNodes(subNodes)
          }
        };
      } else {
        return {
          ...node,
          ...{
            status: writable(status)
          }
        };
      }
    });
  };

  _initializeSchema = () => {
    const _updateNodeIndex = (node: any) => {
      this._nodeIndex = {
        ...this._nodeIndex,
        ...{
          [node.dataPointKey]: node
        }
      };
    };

    const _defineDataPointFrom = (node: any) => {
      _updateNodeIndex(node);
      const { dataPointKey, dataValidator: validator } = node;
      return { [dataPointKey]: validator };
    };

    const _traceAndCollectDataPointsFrom = (nodes: Array<any>): any => {
      const flatDataPointList = nodes.reduce((result: Array<any>, currentNode: any) => {
        const { inputType, dataPointKey, dataValidator, required, subNodes } = currentNode;

        const shouldSetHasRequiredFields = !this._hasRequiredFields && required;
        const currentNodeIsSubmitBtn = inputType === 'SUBMIT_BTN';
        const currentHasSubNodes = !isEmpty(subNodes);
        const nodeHasDataSpecs = !isEmpty(dataPointKey) && !isEmpty(dataValidator);
        const nodeIsValidDataPoint = currentNode.type === 'INPUT' && nodeHasDataSpecs;

        if (shouldSetHasRequiredFields) {
          this._hasRequiredFields = true;
        }
        if (currentNodeIsSubmitBtn) {
          this._hasTargetSubmitButton = true;
        }

        if (currentHasSubNodes) {
          const subDataPoints = _traceAndCollectDataPointsFrom(subNodes);
          return [...result, ...subDataPoints];
        } else if (nodeIsValidDataPoint) {
          const dataPoint = _defineDataPointFrom(currentNode);
          return [...result, ...[dataPoint]];
        } else {
          return result;
        }
      }, []);

      return flatDataPointList;
    };

    const schema = _traceAndCollectDataPointsFrom(this._nodes).reduce(
      (schema: any, currentDataPoint: any) => {
        return {
          ...schema,
          ...currentDataPoint
        };
      },
      {}
    );

    return schema;
  };

  _deriveValueTargetLocation = (params: any) => {
    const { node, shell, currentEntry, value } = params;
    const { inputType, setupConfig } = node;

    if (inputType === 'CHECKBOX_BTN') {
      // Update the node
      node.status.update((data: any) => {
        return { ...data, ...{ checked: value } };
      });
      // leave formData blank for user interaction
      return { ...shell, ...{ [currentEntry]: value ? setupConfig.onValue : null } };
    } else {
      // DEFAULT - assign to formData shell schema
      return { ...shell, ...{ [currentEntry]: value } };
    }
  };

  _initializeFormDataFrom = (schema: any) => {
    const schemaShell = Object.keys(schema).reduce((shell: any, currentEntry: any) => {
      const node = this._nodeIndex[currentEntry];
      const { startValue } = node;

      // A.) PREPROP ||
      // TODO - A.) PREPROP INVOCATION GOES HERE <<<
      // - URL params ?
      // - network request ?
      // - cookies ?
      const prePopulateValue = null;
      // B.) inputNode.startValue ||
      // C.) default = null

      const valuePrecedence = prePopulateValue || startValue || null;

      return this._deriveValueTargetLocation({
        node,
        shell,
        currentEntry,
        value: valuePrecedence
      });
    }, {});
    return writable(schemaShell);
  };

  _verifyFormIsReady = (data: any): boolean => {
    const { _nodeIndex } = this;
    const possible = Object.keys(data);

    return isEmpty(
      // A.) if field is required
      // B.) if values are not null values
      possible.filter((key: any) => {
        const targetNode = _nodeIndex[key];
        const fieldIsRequired = targetNode ? targetNode.required : false;

        if (!fieldIsRequired) {
          // bypass the check
          return false;
        } else {
          // check if value is null
          return data[key] === null || data[key] === undefined;
        }
      })
    );
  };

  _setFormErrorsTo = (provided: Array<any>) => {
    const { _nodeIndex } = this;
    const errors = parseEnhancedZFDerrors(provided, _nodeIndex);
    this._formLevelErrors.set(errors);
  };

  constructor(params: any) {
    const { formOutline, targetActions, formSubmitAction } = params;
    this._formSubmitAction = formSubmitAction;
    this._formOutline = formOutline;
    this._targetActions = targetActions;

    const { meta, formId, formClasses, nodes } = formOutline;
    this._meta = meta;
    this._formId = formId;
    this._formClasses = formClasses;
    this._nodes = this._augmentInputNodes(nodes);

    // INITIALIZATION
    const schema = this._initializeSchema();
    const formData = this._initializeFormDataFrom(schema);

    this._schema = zfd.formData(schema);
    this._formData = formData;

    // WATCH
    this._formData.subscribe((data: any) => {
      // X
      console.log(`>> Current formData:`);
      console.table(data);

      const formIsReady = this._verifyFormIsReady(data);

      if (formIsReady) {
        if (this._hasTargetSubmitButton) {
          const target = this._nodes.filter((node: any) => node.inputType === 'SUBMIT_BTN')[0];
          target.status.update((data: any) => {
            return { ...data, ...{ disabled: false } };
          });
        } else {
          this._defaultSubmitActivated.set(true);
        }
      }
    });
  }

  hasTargetSubmitButton = () => {
    return this._hasTargetSubmitButton;
  };

  hasFormLevelErrors = () => {
    return !isEmpty(get(this._formLevelErrors));
  };

  getTargetAction = (actionKey: string) => {
    const target = this._targetActions[actionKey];
    if (target) {
      return target;
    } else {
      return null;
    }
  };

  updateFormData = (update: any) => {
    this._formData.update((data: any) => {
      return {
        ...data,
        ...update
      };
    });
  };

  validateFormData = (formData: any) => {
    if (formData) {
      // IS FOR SUBMISSION
      return this._schema.parse(formData); // ! <<< VALIDATION !!!
    } else {
      // PRE FLIGHT RE-VALIDATION CHECK-OFF
      try {
        const enteredFormData = get(this._formData);
        this._schema.parse(enteredFormData); // ! <<< VALIDATION !!!
        this._setFormErrorsTo([]);
      } catch (errors: any) {
        this._setFormErrorsTo(errors);
      }
    }
  };

  handleFormSubmission = (event: any) => {
    // console.log('>> FORM SUBMIT EVENT OBJ:', event);
    const { _formSubmitAction } = this;

    const formData = new FormData(event.target);
    const providedEntries = Object.fromEntries(formData);

    try {
      if (_formSubmitAction) {
        this._setFormErrorsTo([]);
        const validated = this.validateFormData(providedEntries);

        _formSubmitAction(validated, providedEntries);
      } else {
        // TODO - THROW ERROR AND HANDLE DEV MISTAKE
        console.error('(!) FORM SUBMIT ACTION WAS NOT PROVIDED - (!)');
      }
    } catch (errors: any) {
      this._setFormErrorsTo(errors);
    }
  };

  // X - TESTING
  verifyInstance = () => {
    console.log(`>> Working with Formation ${this._formId}:`, this);
  };
}

export default FormationInterface;
