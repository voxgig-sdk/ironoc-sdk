
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IronocSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IronocSDK.test()
    equal(testsdk instanceof IronocSDK, true,
      'IronocSDK.test() must return a client synchronously')
  })

})
