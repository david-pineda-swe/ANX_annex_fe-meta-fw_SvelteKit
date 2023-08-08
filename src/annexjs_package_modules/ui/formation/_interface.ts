class FormationInterface {
  _formOutline: any;
  //
  _meta: any;
  _formId: string;
  _classes: string;
  _nodes: Array<any>;

  // TODO - CREATE AN INTERFACE
  constructor(params: any) {
    const { formOutline } = params;
    this._formOutline = formOutline;

    const { meta, formId, classes, nodes } = formOutline;
    this._meta = meta;
    this._formId = formId;
    this._classes = classes;
    this._nodes = nodes;

    console.log('>> FORMATION INTERFACE INITIALIZED!');
  }

  verifyInstance = () => {
    console.log(`>> Working with Formation ${this._formId}:`, this);
  };
}

export default FormationInterface;
