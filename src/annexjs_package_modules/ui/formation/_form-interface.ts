// <script lang="ts">

//     const testFormInterfaceMix = () => {
//         console.log(">> FORMATION_INTERFACE WORKS!");
//     }
// </script>

class FormationInterface {
  _formInstance: string;

  // TODO - CREATE AN INTERFACE
  constructor(params: any) {
    const { formInstance } = params;
    this._formInstance = formInstance;
    console.log('>> FORMATION INTERFACE INITIALIZED!');
  }

  testInstance = () => {
    console.log('>> Working with Formation:', this._formInstance);
  };
}

export default FormationInterface;
