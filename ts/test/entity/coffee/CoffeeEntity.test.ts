

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


describe('CoffeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
  afterEach(liveDelay('IRONOC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IronocSDK.test()
    const ent = testsdk.Coffee()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IRONOC_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coffee.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Drink Description.","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"sh":"ID of Coffee Details Object.","t":"`$INTEGER`","key$":"id","index$":1},"image":{"a":true,"h":"Image","n":"image","r":true,"sh":"Image URL.","t":"`$STRING`","key$":"image","index$":2},"ingredients":{"a":true,"h":"Ingredients","n":"ingredients","r":true,"sh":"Main Ingredients.","t":"`$ARRAY`","key$":"ingredients","index$":3},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Coffee Name/Type.","t":"`$STRING`","key$":"title","index$":4}},"id":{"field":"id","name":"id"},"name":"coffee","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/coffees","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/coffees","q":{},"r":{},"s":[{"lit":"api"},{"lit":"coffees"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/coffees","source":"openapi3","version":2},"g":{},"k":"http","m":"PUT","o":"/api/coffees","q":{},"r":{},"s":[{"lit":"api"},{"lit":"coffees"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"coffee","name__orig":"coffee","Name":"Coffee","name_":"coffee","name-":"coffee","NAME":"COFFEE","index$":0}, {"active":true,"entity":"coffee","key$":"BasicCoffeeFlow","kind":"basic","name":"BasicCoffeeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"coffee_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"coffee_ref01","srcdatavar":"coffee_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coffee_ref01"}}],"v":[],"index$":1}]}, 'Coffee', {"GET /api/coffees":{"protocol":"http","operationId":"getCoffeeDetails","responses":{"200":{"description":"Successfully retrieved coffee brew details.","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string","description":"Coffee Name/Type.","example":"Cold Brew","key$":"title"},"description":{"type":"string","description":"Drink Description.","example":"The trendiest of the iced coffee bunch","key$":"description"},"ingredients":{"type":"array","description":"Main Ingredients.","example":"Long steeped coffee, Ice","items":{"type":"string"},"key$":"ingredients"},"image":{"type":"string","description":"Image URL.","example":"https://upload.wikimedia.org/640px-ColdBrewCoffeein_Cans.png","key$":"image"},"id":{"type":"integer","format":"int32","description":"ID of Coffee Details Object.","example":3,"key$":"id"}},"required":["image","ingredients","title"],"x-ref":"#/components/schemas/CoffeeDomain","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"},"PUT /api/coffees":{"protocol":"http","operationId":"putCoffeesIntoMemoryStorage","responses":{"200":{"description":"Successfully cached coffee brew details.","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string","description":"Coffee Name/Type.","example":"Cold Brew","key$":"title"},"description":{"type":"string","description":"Drink Description.","example":"The trendiest of the iced coffee bunch","key$":"description"},"ingredients":{"type":"array","description":"Main Ingredients.","example":"Long steeped coffee, Ice","items":{"type":"string"},"key$":"ingredients"},"image":{"type":"string","description":"Image URL.","example":"https://upload.wikimedia.org/640px-ColdBrewCoffeein_Cans.png","key$":"image"},"id":{"type":"integer","format":"int32","description":"ID of Coffee Details Object.","example":3,"key$":"id"}},"required":["image","ingredients","title"],"x-ref":"#/components/schemas/CoffeeDomain","key$":"items"}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let coffee_ref01_data = Object.values(setup.data.existing.coffee)[0] as any

    // LIST
    const coffee_ref01_ent = client.Coffee()
    const coffee_ref01_match: any = {}

    const coffee_ref01_list = (await coffee_ref01_ent.list(coffee_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const coffee_ref01_data_up0: any = {}
    coffee_ref01_data_up0.id = coffee_ref01_data.id

    const coffee_ref01_markdef_up0 = { name: 'description', value: 'Mark01-coffee_ref01_' + setup.now }
    ;(coffee_ref01_data_up0 as any)[coffee_ref01_markdef_up0.name] = coffee_ref01_markdef_up0.value

    const coffee_ref01_resdata_up0 = (await coffee_ref01_ent.update(coffee_ref01_data_up0)).data()
    assert(coffee_ref01_resdata_up0.id === coffee_ref01_data_up0.id)

    assert((coffee_ref01_resdata_up0 as any)[coffee_ref01_markdef_up0.name] === coffee_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coffee/CoffeeTestData.json')

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
    ['coffee01','coffee02','coffee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IRONOC_TEST_COFFEE_ENTID': idmap,
    'IRONOC_TEST_LIVE': 'FALSE',
    'IRONOC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IRONOC_TEST_COFFEE_ENTID']

  const live = 'TRUE' === env.IRONOC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IRONOC_TEST_COFFEE_ENTID']
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
  
