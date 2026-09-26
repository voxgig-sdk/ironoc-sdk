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
(0, node_test_1.describe)('RepositoryDetailDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IRONOC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IRONOC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IronocSDK.test();
        const ent = testsdk.RepositoryDetailDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IRONOC_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_detail_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "appHome": { "a": true, "h": "App Home", "n": "appHome", "r": false, "sh": "Normally this value is the link to the project/app home page.", "t": "`$STRING`", "key$": "appHome", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description of GitHub project.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "fullName": { "a": true, "h": "Full Name", "n": "fullName", "r": true, "sh": "Full Name of GitHub Repository (Format is: username/project_name).", "t": "`$STRING`", "key$": "fullName", "index$": 2 }, "issueCount": { "a": true, "fo": "int32", "h": "Issue Count", "n": "issueCount", "r": false, "sh": "Number of associated issues.", "t": "`$INTEGER`", "key$": "issueCount", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name of GitHub Repository.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "repoUrl": { "a": true, "h": "Repo Url", "n": "repoUrl", "r": true, "sh": "This is the home page URL of the project.", "t": "`$STRING`", "key$": "repoUrl", "index$": 5 }, "topics": { "a": true, "h": "Topics", "n": "topics", "r": false, "sh": "Labels or topics associated with the GitHub repository project.", "t": "`$STRING`", "key$": "topics", "index$": 6 } }, "name": "repository_detail_domain", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/get-repo-detail", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "username", "or": "username", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/get-repo-detail", "q": { "exist": ["username"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "get-repo-detail" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/get-repo-detail/{username}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "username", "or": "username", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/get-repo-detail/{username}/", "q": { "exist": ["username"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "get-repo-detail" }, { "var": "username" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "repository_detail_domain", "name__orig": "repository_detail_domain", "Name": "RepositoryDetailDomain", "name_": "repository_detail_domain", "name-": "repository-detail-domain", "NAME": "REPOSITORY_DETAIL_DOMAIN", "index$": 4 }, { "active": true, "entity": "repository_detail_domain", "key$": "BasicRepositoryDetailDomainFlow", "kind": "basic", "name": "BasicRepositoryDetailDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "repository_detail_domain_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "repository_detail_domain_ref01", "srcdatavar": "repository_detail_domain_ref01_data", "suffix": "_dt0" }, "m": { "id": "repository_detail_domain01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_detail_domain_ref01" } }], "index$": 1 }] }, 'RepositoryDetailDomain', { "GET /api/get-repo-detail": { "protocol": "http", "operationId": "getReposByUsernameReqParam", "responses": { "200": { "description": "Successfully retrieved GitHub projects for username request parameter.", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "Name of GitHub Repository.", "example": "ironoc-db", "key$": "name" }, "fullName": { "type": "string", "description": "Full Name of GitHub Repository (Format is: username/project_name).", "example": "conorheffron/ironoc-db", "key$": "fullName" }, "description": { "type": "string", "description": "Description of GitHub project.", "example": "Personal Portfolio Website.", "key$": "description" }, "appHome": { "type": "string", "description": "Normally this value is the link to the project/app home page.", "example": "http://ironoc.com", "key$": "appHome" }, "repoUrl": { "type": "string", "description": "This is the home page URL of the project.", "example": "https://github.com/conorheffron/ironoc-db", "key$": "repoUrl" }, "topics": { "type": "string", "description": "Labels or topics associated with the GitHub repository project.", "example": "[aws, jdk21, maven, personal, portfolio, spring-boot-3]", "key$": "topics" }, "issueCount": { "type": "integer", "format": "int32", "description": "Number of associated issues.", "example": 3, "key$": "issueCount" } }, "required": ["fullName", "name", "repoUrl"], "x-ref": "#/components/schemas/RepositoryDetailDomain", "index$": 0 } } } } } }, "parameters": [{ "name": "username", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" }, "GET /api/get-repo-detail/{username}/": { "protocol": "http", "operationId": "getReposByUsernamePathVar", "responses": { "200": { "description": "Successfully retrieved GitHub projects for username path variable.", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "Name of GitHub Repository.", "example": "ironoc-db", "key$": "name" }, "fullName": { "type": "string", "description": "Full Name of GitHub Repository (Format is: username/project_name).", "example": "conorheffron/ironoc-db", "key$": "fullName" }, "description": { "type": "string", "description": "Description of GitHub project.", "example": "Personal Portfolio Website.", "key$": "description" }, "appHome": { "type": "string", "description": "Normally this value is the link to the project/app home page.", "example": "http://ironoc.com", "key$": "appHome" }, "repoUrl": { "type": "string", "description": "This is the home page URL of the project.", "example": "https://github.com/conorheffron/ironoc-db", "key$": "repoUrl" }, "topics": { "type": "string", "description": "Labels or topics associated with the GitHub repository project.", "example": "[aws, jdk21, maven, personal, portfolio, spring-boot-3]", "key$": "topics" }, "issueCount": { "type": "integer", "format": "int32", "description": "Number of associated issues.", "example": 3, "key$": "issueCount" } }, "required": ["fullName", "name", "repoUrl"], "x-ref": "#/components/schemas/RepositoryDetailDomain", "key$": "items" } } } } } }, "parameters": [{ "name": "username", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_detail_domain_ref01_data = Object.values(setup.data.existing.repository_detail_domain)[0];
        // LIST
        const repository_detail_domain_ref01_ent = client.RepositoryDetailDomain();
        const repository_detail_domain_ref01_match = {};
        const repository_detail_domain_ref01_list = (await repository_detail_domain_ref01_ent.list(repository_detail_domain_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_detail_domain/RepositoryDetailDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IronocSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_detail_domain01', 'repository_detail_domain02', 'repository_detail_domain03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IRONOC_TEST_REPOSITORY_DETAIL_DOMAIN_ENTID': idmap,
        'IRONOC_TEST_LIVE': 'FALSE',
        'IRONOC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IRONOC_TEST_REPOSITORY_DETAIL_DOMAIN_ENTID'];
    const live = 'TRUE' === env.IRONOC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IRONOC_TEST_REPOSITORY_DETAIL_DOMAIN_ENTID'];
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
//# sourceMappingURL=RepositoryDetailDomainEntity.test.js.map