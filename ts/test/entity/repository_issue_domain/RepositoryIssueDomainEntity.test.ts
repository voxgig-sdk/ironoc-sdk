

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


describe('RepositoryIssueDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
  afterEach(liveDelay('IRONOC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IronocSDK.test()
    const ent = testsdk.RepositoryIssueDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IRONOC_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_issue_domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"body":{"a":true,"h":"Body","n":"body","r":false,"sh":"Issue Content & Description.","t":"`$STRING`","key$":"body","index$":0},"labels":{"a":true,"h":"Labels","n":"labels","r":false,"sh":"Issue Labels / Tags.","t":"`$ARRAY`","key$":"labels","index$":1},"number":{"a":true,"h":"Number","n":"number","r":true,"sh":"Project Issue Number.","t":"`$STRING`","key$":"number","index$":2},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"Issue State.","t":"`$STRING`","key$":"state","index$":3},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Issue Title Text.","t":"`$STRING`","key$":"title","index$":4}},"name":"repository_issue_domain","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/get-repo-issue/{username}/{repository}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"repository","or":"repository","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/get-repo-issue/{username}/{repository}/","q":{"exist":["repository","username"]},"r":{},"s":[{"lit":"api"},{"lit":"get-repo-issue"},{"var":"username"},{"var":"repository"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"repository_issue_domain","name__orig":"repository_issue_domain","Name":"RepositoryIssueDomain","name_":"repository_issue_domain","name-":"repository-issue-domain","NAME":"REPOSITORY_ISSUE_DOMAIN","index$":5}, {"active":true,"entity":"repository_issue_domain","key$":"BasicRepositoryIssueDomainFlow","kind":"basic","name":"BasicRepositoryIssueDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"repository":"repository01","username":"username01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"repository_issue_domain_ref01"}}],"index$":0}]}, 'RepositoryIssueDomain', {"GET /api/get-repo-issue/{username}/{repository}/":{"protocol":"http","operationId":"getIssuesByUsernameAndRepoPathVars","responses":{"200":{"description":"Successfully retrieved GitHub issues for username & repository path variables.","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"number":{"type":"string","description":"Project Issue Number.","example":"45","key$":"number"},"title":{"type":"string","description":"Issue Title Text.","example":"The UI is not rendering the GitHub Repo Details View","key$":"title"},"body":{"type":"string","description":"Issue Content & Description.","example":"The app crashes when I visit the Repo Details View","key$":"body"},"state":{"type":"string","description":"Issue State.","example":"Open / Closed etc.","key$":"state"},"labels":{"type":"array","description":"Issue Labels / Tags.","example":"bug, java, ui etc.","items":{"type":"string"},"key$":"labels"}},"required":["number","title"],"x-ref":"#/components/schemas/RepositoryIssueDomain","index$":0}}}}}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"repository","in":"path","required":true,"schema":{"type":"string"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_issue_domain_ref01_data = Object.values(setup.data.existing.repository_issue_domain)[0] as any

    // LIST
    const repository_issue_domain_ref01_ent = client.RepositoryIssueDomain()
    const repository_issue_domain_ref01_match: any = {}
    repository_issue_domain_ref01_match['repository'] = setup.idmap['repository01']
    repository_issue_domain_ref01_match['username'] = setup.idmap['username01']

    const repository_issue_domain_ref01_list = (await repository_issue_domain_ref01_ent.list(repository_issue_domain_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_issue_domain/RepositoryIssueDomainTestData.json')

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
    ['repository_issue_domain01','repository_issue_domain02','repository_issue_domain03','repository01','username01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID': idmap,
    'IRONOC_TEST_LIVE': 'FALSE',
    'IRONOC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID']

  const live = 'TRUE' === env.IRONOC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID']
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
  
