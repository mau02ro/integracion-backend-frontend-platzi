/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Header from '../../components/Header'
import  ProviderMock from '../../__mocks__/providerMock'

describe('Test Header component', () => {
  const header = mount(<ProviderMock><Header /></ProviderMock>);

  test('Render Footer component', () => {
    expect(header.find('.header__img')).toHaveLength(1);
  })

  test('Header Snapshot', () => {
    const header = create(<ProviderMock><Header /></ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
  })
})
