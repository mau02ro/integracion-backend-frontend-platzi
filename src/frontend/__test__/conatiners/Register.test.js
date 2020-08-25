/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react'
import {mount} from 'enzyme'
import  ProviderMock from '../../__mocks__/providerMock'

import Register from '../../containers/Register'

describe('Test Register container', () => {

  test('Submit form', () => {
    const preventDefault = jest.fn();
    const register = mount(<ProviderMock><Register /></ProviderMock>);
    register.find('form').simulate('submit', {preventDefault})

    expect(preventDefault).toHaveBeenCalledTimes(1)
    register.unmount();
  })

})

