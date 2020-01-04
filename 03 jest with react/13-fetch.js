//utils
//  getData.js

//fecth por defecto es get
const getData = (api) => {
    return fetch(api)
      .then(response => response.json())
      .then(response => response)
      .catch(error => error);
};

export default getData;

//__test__
//  utils
//    getData.jest.js

//01. npm install jest-fetch-mock --save-dev

import getData from '../../utils/getData';

describe('Fetch API',() => {
    beforeEach(() => {
        fetch.resetMock()
    })
})

//__test__
//  setupTest.js

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()});
//02. we add this to be able to catch requests without browser.
global.fetch = require('jest-fetch-mock');

//03. npm install jest-fetch-mock --save-dev

import getData from '../../utils/getData';

describe('Fetch API',() => {
    beforeEach(() => {
        fetch.resetMocks()
    });
    test('Llamar una api y retornar los datos', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        getData('https://google.com')
          .then((response) => {
             expect(response.data).toEqual('12345');
          });

        //04. ensure that we are invoking the url
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

    });


})


