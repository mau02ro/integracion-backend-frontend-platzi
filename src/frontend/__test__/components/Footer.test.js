/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react'
import {mount} from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('Test Footer component', () => {
  const footer = mount(<Footer />);

  test('Render Footer component', () => {

    expect(footer.length).toEqual(1)
  })

  test('Footer haves 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3)
  })

  test('Footer Snapshot', () => {
    //spara actualizar los snapShopt user le comando jest --updateSnapshopt
    const footer = create(<Footer />)

    expect(footer.toJSON()).toMatchSnapshot();
  })

})