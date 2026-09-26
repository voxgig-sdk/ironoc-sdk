"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RepositoryIssueDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IRONOC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IronocSDK.test();
        const ent = testsdk.RepositoryIssueDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IRONOC_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_issue_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "Issue Content & Description.", "t": "`$STRING`", "key$": "body", "index$": 0 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": false, "sh": "Issue Labels / Tags.", "t": "`$ARRAY`", "key$": "labels", "index$": 1 }, "number": { "a": true, "h": "Number", "n": "number", "r": true, "sh": "Project Issue Number.", "t": "`$STRING`", "key$": "number", "index$": 2 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "Issue State.", "t": "`$STRING`", "key$": "state", "index$": 3 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Issue Title Text.", "t": "`$STRING`", "key$": "title", "index$": 4 } }, "name": "repository_issue_domain", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/get-repo-issue/{username}/{repository}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repository", "or": "repository", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "username", "or": "username", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/get-repo-issue/{username}/{repository}/", "q": { "exist": ["repository", "username"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "get-repo-issue" }, { "var": "username" }, { "var": "repository" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "repository_issue_domain", "name__orig": "repository_issue_domain", "Name": "RepositoryIssueDomain", "name_": "repository_issue_domain", "name-": "repository-issue-domain", "NAME": "REPOSITORY_ISSUE_DOMAIN", "index$": 5 }, { "active": true, "entity": "repository_issue_domain", "key$": "BasicRepositoryIssueDomainFlow", "kind": "basic", "name": "BasicRepositoryIssueDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "repository": "repository01", "username": "username01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "repository_issue_domain_ref01" } }], "index$": 0 }] }, 'RepositoryIssueDomain', { "GET /api/get-repo-issue/{username}/{repository}/": { "protocol": "http", "operationId": "getIssuesByUsernameAndRepoPathVars", "responses": { "200": { "description": "Successfully retrieved GitHub issues for username & repository path variables.", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "number": { "type": "string", "description": "Project Issue Number.", "example": "45", "key$": "number" }, "title": { "type": "string", "description": "Issue Title Text.", "example": "The UI is not rendering the GitHub Repo Details View", "key$": "title" }, "body": { "type": "string", "description": "Issue Content & Description.", "example": "The app crashes when I visit the Repo Details View", "key$": "body" }, "state": { "type": "string", "description": "Issue State.", "example": "Open / Closed etc.", "key$": "state" }, "labels": { "type": "array", "description": "Issue Labels / Tags.", "example": "bug, java, ui etc.", "items": { "type": "string" }, "key$": "labels" } }, "required": ["number", "title"], "x-ref": "#/components/schemas/RepositoryIssueDomain", "index$": 0 } } } } } }, "parameters": [{ "name": "username", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "repository", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_issue_domain_ref01_data = Object.values(setup.data.existing.repository_issue_domain)[0];
        // LIST
        const repository_issue_domain_ref01_ent = client.RepositoryIssueDomain();
        const repository_issue_domain_ref01_match = {};
        repository_issue_domain_ref01_match['repository'] = setup.idmap['repository01'];
        repository_issue_domain_ref01_match['username'] = setup.idmap['username01'];
        const repository_issue_domain_ref01_list = (await repository_issue_domain_ref01_ent.list(repository_issue_domain_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_issue_domain/RepositoryIssueDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IronocSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_issue_domain01', 'repository_issue_domain02', 'repository_issue_domain03', 'repository01', 'username01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID': idmap,
        'IRONOC_TEST_LIVE': 'FALSE',
        'IRONOC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID'];
    const live = 'TRUE' === env.IRONOC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IRONOC_TEST_REPOSITORY_ISSUE_DOMAIN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IronocSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RepositoryIssueDomainEntity.test.js.map