/* eslint-disable no-undef */
import { setFavorite } from '../../actions'
import movie from '../../__mocks__/movieMock'

describe('actions', () => {
  test('setFavorite', () => {
    const payload = movie;

    const expectedAction = {
      type: 'SET_FAVORITE',
      payload
    }

    expect(setFavorite(payload)).toEqual(expectedAction)
  })
})