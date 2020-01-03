//src
// __test__
//   component
//     Header.test.js

import React from 'react';
import {mount,shallow} from 'enzyme';
//shollow is not giving bringing all dom, just bring the elment.
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from "../../components/Header";

describe('<Header/>', () => {
    test ('Render del componente header', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.length).toEqual(1);
    })

    test('Render del titulo', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.find(".Header-title").text()).toEqual('Platzi Store');

    })
});

//src
// __Mocks__
//   ProductMock.js

const ProductMock = {
    'id': '1',
    'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
    'title': 'Camiseta',
    'price': 25,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  }

export default ProductMock;


//src
//  __test__
//    components
//       Product.test.js

import React from 'React';
import {mount, shallow} from "enzyme";
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Products';

describe ('<Product/>', () => {
  test('Render del componente product', () => {
    const product = shallow(
        <ProviderMock>
          <Product/>
        </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar el botón de probar', () => {
     const handleAddToCart = jest.fn();//allow us to use this function without call the real function.

     const wrapper = mount(
         <ProviderMock>
             <Product
                 product = {ProductMock}
                 handleAddToCart = {handleAddToCart}
             >
             </Product>
         </ProviderMock>
     )

     wrapper.find('button').simulate('click');
     expect(handleAddToCart).toHaveBeenCalledTimes(1);

  });
});
