//mocks allows simulate actions
//src
//__mocks__
//  styleMock.js
module.exports = {};

//package.json

"jest" : {
    "setupFilesAfterEnv" : [
        "<rootDir>/src/__test__/setupTest.js"
    ],
    "moduleNameMapper" : {
        "\\.(styl|css)" : "<rootDir>/src/__mocks__/styleMock.js"
    }
}

//__test__
//  components
//    Footer.test.js

import React from 'react';
import {mount} from 'enzyme';
//mount help to work with the dom. trae todos los elmentos del dom de un elemento
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
    const footer = mount(<Footer/>);
    test('Render del componente Footer', () => {      
      expect(footer.length).toEqual(1);
    });
    test('Render del titulo', () => {
        expect(footer.find(".footer-title").text()).toEqual("Platzi Store");
    })
})

//src
//  __mocks__
//     ProviderMock.js
import React from'react';
import {createStore} from 'redux';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history = {history}>
           {props.children}
        </Router>
    </Provider>
);

export default ProviderMock,