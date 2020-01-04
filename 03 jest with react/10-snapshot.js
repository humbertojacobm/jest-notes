//snapshot es referentes a componentes que no cambian gradualmente, ejemplo: footer.
//comprobamos que la estructura siempre sea la misma.

//npm install react-test-renderer --save-dev

import {create} from 'react-test-renderer';

describe('Footer snapshot' , () => {
  test ('comprobar la ui del componenet footer', () => {
    //como footer NO esta conectado con redux, no necesitas usar el provider, si no lo tomas de la siguietne forma.
    //solo usamos PROVIDER, cuando el elemento esta conectado con redux.
    const footer = create(<Footer/>);
    expect(footer.toJSON()).toMatchSnapshot();
    //esto creará una carpeta snapshot en la esctructura de folders, con un archivo que tiene en modo texto
    //toda la estructura de footer.
    //si cambias luego la propieda footer de alguna forma (una letra mas o no se que), el test se romperá.

  });
});

describe('Header snaptsho', () => {
  test('comprobar ', () => {
      //the element header is using redux
     const header = create(
        <ProviderMock>
            <Header/>
        </ProviderMock>
     );
     expect(header.toJSON()).toMatchSnapshot();
  });
});

//jest --updateSnapshot :
// in case you need change your footer or header tags and elements, you can update your snapshots.