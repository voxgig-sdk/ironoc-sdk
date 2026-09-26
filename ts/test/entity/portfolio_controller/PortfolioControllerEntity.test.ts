

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IronocSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PortfolioControllerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
  afterEach(liveDelay('IRONOC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IronocSDK.test()
    const ent = testsdk.PortfolioController()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IRONOC_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'portfolio_controller.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"portfolio_controller","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/portfolio-items","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/portfolio-items","q":{},"r":{},"s":[{"lit":"api"},{"lit":"portfolio-items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"portfolio_controller","name__orig":"portfolio_controller","Name":"PortfolioController","name_":"portfolio_controller","name-":"portfolio-controller","NAME":"PORTFOLIO_CONTROLLER","index$":3}, {"active":true,"entity":"portfolio_controller","key$":"BasicPortfolioControllerFlow","kind":"basic","name":"BasicPortfolioControllerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"portfolio_controller_ref01"}}],"index$":0}]}, 'PortfolioController', {"GET /api/portfolio-items":{"protocol":"http","operationId":"getPortfolioItems","responses":{"200":{"description":"Successfully retrieved Portfolio Projects.","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","additionalProperties":{},"key$":"items"}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let portfolio_controller_ref01_data = Object.values(setup.data.existing.portfolio_controller)[0] as any

    // LIST
    const portfolio_controller_ref01_ent = client.PortfolioController()
    const portfolio_controller_ref01_match: any = {}

    const portfolio_controller_ref01_list = (await portfolio_controller_ref01_ent.list(portfolio_controller_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/portfolio_controller/PortfolioControllerTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IronocSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['portfolio_controller01','portfolio_controller02','portfolio_controller03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IRONOC_TEST_PORTFOLIO_CONTROLLER_ENTID': idmap,
    'IRONOC_TEST_LIVE': 'FALSE',
    'IRONOC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IRONOC_TEST_PORTFOLIO_CONTROLLER_ENTID']

  const live = 'TRUE' === env.IRONOC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IRONOC_TEST_PORTFOLIO_CONTROLLER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IronocSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IRONOC_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
