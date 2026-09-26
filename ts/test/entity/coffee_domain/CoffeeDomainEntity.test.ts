

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


describe('CoffeeDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
  afterEach(liveDelay('IRONOC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IronocSDK.test()
    const ent = testsdk.CoffeeDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IRONOC_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coffee_domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Drink Description.","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"sh":"ID of Coffee Details Object.","t":"`$INTEGER`","key$":"id","index$":1},"image":{"a":true,"h":"Image","n":"image","r":true,"sh":"Image URL.","t":"`$STRING`","key$":"image","index$":2},"ingredients":{"a":true,"h":"Ingredients","n":"ingredients","r":true,"sh":"Main Ingredients.","t":"`$ARRAY`","key$":"ingredients","index$":3},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Coffee Name/Type.","t":"`$STRING`","key$":"title","index$":4}},"id":{"field":"id","name":"id"},"name":"coffee_domain","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/coffees-graph-ql","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/coffees-graph-ql","q":{},"r":{},"s":[{"lit":"api"},{"lit":"coffees-graph-ql"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"coffee_domain","name__orig":"coffee_domain","Name":"CoffeeDomain","name_":"coffee_domain","name-":"coffee-domain","NAME":"COFFEE_DOMAIN","index$":1}, {"active":true,"entity":"coffee_domain","key$":"BasicCoffeeDomainFlow","kind":"basic","name":"BasicCoffeeDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"coffee_domain_ref01"}}],"index$":0}]}, 'CoffeeDomain', {"GET /api/coffees-graph-ql":{"protocol":"http","operationId":"getCoffeeDetailsGraphQl","responses":{"200":{"description":"Successfully retrieved coffee brew details.","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string","description":"Coffee Name/Type.","example":"Cold Brew","key$":"title"},"description":{"type":"string","description":"Drink Description.","example":"The trendiest of the iced coffee bunch","key$":"description"},"ingredients":{"type":"array","description":"Main Ingredients.","example":"Long steeped coffee, Ice","items":{"type":"string"},"key$":"ingredients"},"image":{"type":"string","description":"Image URL.","example":"https://upload.wikimedia.org/640px-ColdBrewCoffeein_Cans.png","key$":"image"},"id":{"type":"integer","format":"int32","description":"ID of Coffee Details Object.","example":3,"key$":"id"}},"required":["image","ingredients","title"],"x-ref":"#/components/schemas/CoffeeDomain","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let coffee_domain_ref01_data = Object.values(setup.data.existing.coffee_domain)[0] as any

    // LIST
    const coffee_domain_ref01_ent = client.CoffeeDomain()
    const coffee_domain_ref01_match: any = {}

    const coffee_domain_ref01_list = (await coffee_domain_ref01_ent.list(coffee_domain_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coffee_domain/CoffeeDomainTestData.json')

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
    ['coffee_domain01','coffee_domain02','coffee_domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IRONOC_TEST_COFFEE_DOMAIN_ENTID': idmap,
    'IRONOC_TEST_LIVE': 'FALSE',
    'IRONOC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IRONOC_TEST_COFFEE_DOMAIN_ENTID']

  const live = 'TRUE' === env.IRONOC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IRONOC_TEST_COFFEE_DOMAIN_ENTID']
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
  
