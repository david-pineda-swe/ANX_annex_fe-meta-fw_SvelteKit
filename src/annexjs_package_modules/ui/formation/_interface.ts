import { isEmpty } from '@annexjs/uitils';
import { writable } from 'svelte/store';

class FormationInterface {
  _formOutline: any;
  _targetActions: any;
  //
  _meta: any;
  _formId: string;
  _formClasses: string;
  _nodes: Array<any>;
  //
  _schema: any;
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
    const _defineDataPointFrom = (node: any) => {
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

    const SchemaDef = _traceAndCollectDataPointsFrom(this._nodes).reduce(
      (schema: any, currentDataPoint: any) => {
        return {
          ...schema,
          ...currentDataPoint
        };
      },
      {}
    );

    // console.log('>> RESULT of dataPoint collection:', SchemaDef);
    return SchemaDef;
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

    this._schema = this._initializeSchema();
    // TODO - Initialize FORM DATA FOR INPUTS TO READ FROM
    // TODO - TRY WITH SVELTE .BIND()
  }

  hasTargetSubmitButton = () => {
    return this._hasTargetSubmitButton;
  };

  getTargetAction = (actionKey: string) => {
    const target = this._targetActions[actionKey];
    if (!target) {
      console.error(
        `>> TARGET ACTION: ${actionKey} was not included! Please reconfigure custom action button.`
      );
      return null;
    } else {
      return target;
    }
  };

  // TODO - CREATE INTERFACE METHODS >
  verifyInstance = () => {
    console.log(`>> Working with Formation ${this._formId}:`, this);
  };
}

export default FormationInterface;
