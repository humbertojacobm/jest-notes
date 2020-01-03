//github gndx platzi-store
//npm install
//npm run start
//npm install jest enzyme enzyme-adapter-react-16 --save-dev
// enzyme created by rbnb to do tests.

//package.json

"test" : "jest",
"test:watch" : "jest --watch"

//__test__
//we need to create an adapter to do unit test in react application
//  setupTest.js

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

//package.json

"jest" : {
    "setupFilesAfterEnv" : [
        "<rootDir>/src/__test__/setupTest.js"
    ]
}

//__test__
//  components
//    Footer.test.js

import React from 'react';
import {mount} from 'enzyme';
//mount help to work with the dom.
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
    test('Render del componente Footer', () => {
      const footer = mount(<Footer/>);
      expect(footer.length).toEqual(1);
    })
})

