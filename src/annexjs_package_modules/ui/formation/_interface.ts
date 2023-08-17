import { isEmpty } from '@annexjs/uitils';
import { writable } from 'svelte/store';

class FormationInterface {
  _formOutline: any;
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
      const dataPointKey = node.dataPointKey;
      const validator = node.dataValidator;
      return { [dataPointKey]: validator };
    };

    const _collectDataPointsFrom = (nodes: Array<any>): any => {
      const flatDataPointList = nodes.reduce((result: Array<any>, currentNode: any) => {
        const { inputType, subNodes } = currentNode;
        const currentNodeIsSubmitBtn = inputType === 'SUBMIT';
        const currentHasSubNodes = !isEmpty(subNodes);

        if (currentNodeIsSubmitBtn) {
          this._hasTargetSubmitButton = true;
        }

        if (currentHasSubNodes) {
          const subDataPoints = _collectDataPointsFrom(subNodes);
          return [...result, ...subDataPoints];
        } else if (currentNode.type === 'INPUT') {
          const dataPoint = _defineDataPointFrom(currentNode);
          return [...result, ...[dataPoint]];
        } else {
          return result;
        }
      }, []);

      return flatDataPointList;
    };

    const SchemaDef = _collectDataPointsFrom(this._nodes).reduce(
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
    const { formOutline } = params;
    this._formOutline = formOutline;

    const { meta, formId, formClasses, nodes } = formOutline;
    this._meta = meta;
    this._formId = formId;
    this._formClasses = formClasses;
    this._nodes = this._augmentInputNodes(nodes);

    this._schema = this._initializeSchema();
  }

  hasTargetSubmitButton = () => {
    return this._hasTargetSubmitButton;
  };

  // TODO - CREATE INTERFACE METHODS >
  verifyInstance = () => {
    console.log(`>> Working with Formation ${this._formId}:`, this);
  };
}

export default FormationInterface;
