import { isEmpty } from '@annexjs/uitils';
import { writable } from 'svelte/store';

class FormationInterface {
  // PROPS FROM CONFIG
  _formOutline: any;
  _meta: any;
  _formId: string;
  _formClasses: string;
  _nodes: Array<any>;

  // MODEL
  // _submitAction: any; // TODO <<<
  // _logErrorAction: any; // TODO <<<
  _targetActions: any;
  _schema: any;
  _formData: any;
  _nodeIndex: any;

  // STATE
  _hasTargetSubmitButton = false;
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
        const { inputType, dataPointKey, dataValidator, subNodes } = currentNode;

        const currentNodeIsSubmitBtn = inputType === 'SUBMIT_BTN';
        const currentHasSubNodes = !isEmpty(subNodes);
        const nodeHasDataSpecs = !isEmpty(dataPointKey) && !isEmpty(dataValidator);
        const nodeIsValidDataPoint = currentNode.type === 'INPUT' && nodeHasDataSpecs;

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

  _initializeFormDataFrom = (schema: any) => {
    const schemaShell = Object.keys(schema).reduce((shell: any, currentEntry: any) => {
      // A.) PREPROP ||
      // TODO - A.) PREPROP INVOCATION GOES HERE <<<
      const prePopulateValue = null;
      // B.) inputNode.startValue ||
      const startValue = this._nodeIndex[currentEntry].startValue;
      // C.) default = null

      const value = prePopulateValue || startValue || null;
      return { ...shell, ...{ [currentEntry]: value } };
    }, {});
    return writable(schemaShell);
  };

  constructor(params: any) {
    const { formOutline, targetActions } = params;
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

    this._schema = schema;
    this._formData = formData;
  }

  hasTargetSubmitButton = () => {
    return this._hasTargetSubmitButton;
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

  // TODO - handleSubmitRequest()
  // ! - must pass validator
  // ! - must pass schema group validation
  // ! - must satisfy required
  // ! - no extra dataPoints

  // X - TESTING
  verifyInstance = () => {
    console.log(`>> Working with Formation ${this._formId}:`, this);
    this._formData.subscribe((data: any) => {
      console.log(`>> Current formData:`);
      console.table(data);
    });
  };
}

export default FormationInterface;
