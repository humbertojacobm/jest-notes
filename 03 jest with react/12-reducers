//__test__
//  reducers
//     reducers.test.js

import reducer from '../../reducers';
import Product from '../../__mocks__/ProductMock';

describe('Reducers', () => {
    //01. the first test is the return the initial stage.
    test ('Retornar initial state', () => {
        expect(reducer({},'')).toEqual({});
    });
    //02. add something in the carry
    test('ADD_TO_CART', () => {
        const initialState = {
            cart: []
        }
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload
        }
        const expected = {
            cart: [
                ProductMock
            ]
        }
        expect(reducer(initialState, action)).toEqual(expected);
    })
});