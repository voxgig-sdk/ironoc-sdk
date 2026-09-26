# Ironoc TypeScript SDK



The TypeScript SDK for the Ironoc API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Coffee()` — each with a small set of operations (`list`, `load`, `update`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/ironoc-sdk/releases](https://github.com/voxgig-sdk/ironoc-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { IronocSDK } from '@voxgig-sdk/ironoc-sdk'

const client = new IronocSDK()
```

### 2. List coffee records

`list()` resolves to an array of Coffee ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const coffees = await client.Coffee().list()

for (const coffee of coffees) {
  console.log(coffee)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.Coffee().update({
  description: 'example_description',
  image: 'example_image',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const repositoryissuedomains = await client.RepositoryIssueDomain().list()
  console.log(repositoryissuedomains)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = IronocSDK.test()

const repositoryissuedomain = await client.RepositoryIssueDomain().list()
// repositoryissuedomain is the entity, populated with mock response data
// — call repositoryissuedomain.data() for the record itself
console.log(repositoryissuedomain)
```

You can also use the instance method:

```ts
const client = new IronocSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.RepositoryIssueDomain()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new IronocSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
IRONOC_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### IronocSDK

#### Constructor

```ts
new IronocSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Coffee(data?)` | `CoffeeEntity` | Create a Coffee entity instance. |
| `CoffeeDomain(data?)` | `CoffeeDomainEntity` | Create a CoffeeDomain entity instance. |
| `DonateRestController(data?)` | `DonateRestControllerEntity` | Create a DonateRestController entity instance. |
| `PortfolioController(data?)` | `PortfolioControllerEntity` | Create a PortfolioController entity instance. |
| `RepositoryDetailDomain(data?)` | `RepositoryDetailDomainEntity` | Create a RepositoryDetailDomain entity instance. |
| `RepositoryIssueDomain(data?)` | `RepositoryIssueDomainEntity` | Create a RepositoryIssueDomain entity instance. |
| `Version(data?)` | `VersionEntity` | Create a Version entity instance. |
| `tester(testopts?, sdkopts?)` | `IronocSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `IronocSDK.test(testopts?, sdkopts?)` | `IronocSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): IronocSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Coffee

| Field | Description |
| --- | --- |
| `description` | Drink Description. |
| `id` | ID of Coffee Details Object. |
| `image` | Image URL. |
| `ingredients` | Main Ingredients. |
| `title` | Coffee Name/Type. |

Operations: list, update.

API path: `/api/coffees`

#### CoffeeDomain

| Field | Description |
| --- | --- |
| `description` | Drink Description. |
| `id` | ID of Coffee Details Object. |
| `image` | Image URL. |
| `ingredients` | Main Ingredients. |
| `title` | Coffee Name/Type. |

Operations: list.

API path: `/api/coffees-graph-ql`

#### DonateRestController

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/donate-items`

#### PortfolioController

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/portfolio-items`

#### RepositoryDetailDomain

| Field | Description |
| --- | --- |
| `appHome` | Normally this value is the link to the project/app home page. |
| `description` | Description of GitHub project. |
| `fullName` | Full Name of GitHub Repository (Format is: username/project_name). |
| `issueCount` | Number of associated issues. |
| `name` | Name of GitHub Repository. |
| `repoUrl` | This is the home page URL of the project. |
| `topics` | Labels or topics associated with the GitHub repository project. |

Operations: list, load.

API path: `/api/get-repo-detail`

#### RepositoryIssueDomain

| Field | Description |
| --- | --- |
| `body` | Issue Content & Description. |
| `labels` | Issue Labels / Tags. |
| `number` | Project Issue Number. |
| `state` | Issue State. |
| `title` | Issue Title Text. |

Operations: list.

API path: `/api/get-repo-issue/{username}/{repository}/`

#### Version

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/application/version`



## Entities


### Coffee

Create an instance: `const coffee = client.Coffee()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Drink Description. |
| `id` | `number` | ID of Coffee Details Object. |
| `image` | `string` | Image URL. |
| `ingredients` | `any[]` | Main Ingredients. |
| `title` | `string` | Coffee Name/Type. |

#### Example: List

```ts
const coffees = await client.Coffee().list()
```


### CoffeeDomain

Create an instance: `const coffee_domain = client.CoffeeDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Drink Description. |
| `id` | `number` | ID of Coffee Details Object. |
| `image` | `string` | Image URL. |
| `ingredients` | `any[]` | Main Ingredients. |
| `title` | `string` | Coffee Name/Type. |

#### Example: List

```ts
const coffee_domains = await client.CoffeeDomain().list()
```


### DonateRestController

Create an instance: `const donate_rest_controller = client.DonateRestController()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const donate_rest_controllers = await client.DonateRestController().list()
```


### PortfolioController

Create an instance: `const portfolio_controller = client.PortfolioController()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const portfolio_controllers = await client.PortfolioController().list()
```


### RepositoryDetailDomain

Create an instance: `const repository_detail_domain = client.RepositoryDetailDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appHome` | `string` | Normally this value is the link to the project/app home page. |
| `description` | `string` | Description of GitHub project. |
| `fullName` | `string` | Full Name of GitHub Repository (Format is: username/project_name). |
| `issueCount` | `number` | Number of associated issues. |
| `name` | `string` | Name of GitHub Repository. |
| `repoUrl` | `string` | This is the home page URL of the project. |
| `topics` | `string` | Labels or topics associated with the GitHub repository project. |

#### Example: Load

```ts
const repository_detail_domain = await client.RepositoryDetailDomain().load({ username: 'username' })
```

#### Example: List

```ts
const repository_detail_domains = await client.RepositoryDetailDomain().list({ username: "example" })
```


### RepositoryIssueDomain

Create an instance: `const repository_issue_domain = client.RepositoryIssueDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | Issue Content & Description. |
| `labels` | `any[]` | Issue Labels / Tags. |
| `number` | `string` | Project Issue Number. |
| `state` | `string` | Issue State. |
| `title` | `string` | Issue Title Text. |

#### Example: List

```ts
const repository_issue_domains = await client.RepositoryIssueDomain().list({ repository: "example", username: "example" })
```


### Version

Create an instance: `const version = client.Version()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const version = await client.Version().load()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
ironoc/
├── src/
│   ├── IronocSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { IronocSDK } from '@voxgig-sdk/ironoc-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const repositoryissuedomain = client.RepositoryIssueDomain()
await repositoryissuedomain.list()

// repositoryissuedomain.data() now returns the repositoryissuedomain data from the last `list`
// repositoryissuedomain.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
