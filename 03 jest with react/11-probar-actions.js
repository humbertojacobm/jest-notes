//we ensure our test, where application is using redux (actions, store, ect)
// __test__
//  actions
//    actions.test.js

import actions from '../../actions/'
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test ('addToCart Action', () => {
    const payload = ProductMock;
    const expected = {
        type: 'ADD_TO_CART',
        payload
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  })
});

//to have more information in the console.
// in package json:
"jest" : {
    "verbose": true
}
