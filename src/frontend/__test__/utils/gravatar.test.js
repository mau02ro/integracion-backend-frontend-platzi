/* eslint-disable no-undef */
import gravatar from '../../utils/gravatar'

test('Gravatar Function test', () => {
  const email = 'mauro@mauro.com'

  const gravatarUrl = 'https://gravatar.com/avatar/958f5770eec37c02fcb4b7225ac51ea6'

  expect(gravatarUrl).toEqual(gravatar(email))
})
