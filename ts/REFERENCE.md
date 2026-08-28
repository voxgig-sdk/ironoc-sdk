# GithubProjectIssues TypeScript SDK Reference

Complete API reference for the GithubProjectIssues TypeScript SDK.


## GithubProjectIssuesSDK

### Constructor

```ts
new GithubProjectIssuesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubProjectIssuesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GithubProjectIssuesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GithubProjectIssuesSDK` instance in test mode.


### Instance Methods

#### `Coffee(data?: object)`

Create a new `Coffee` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoffeeEntity` instance.

#### `CoffeeDomain(data?: object)`

Create a new `CoffeeDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoffeeDomainEntity` instance.

#### `DonateRestController(data?: object)`

Create a new `DonateRestController` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DonateRestControllerEntity` instance.

#### `PortfolioController(data?: object)`

Create a new `PortfolioController` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PortfolioControllerEntity` instance.

#### `RepositoryDetailDomain(data?: object)`

Create a new `RepositoryDetailDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryDetailDomainEntity` instance.

#### `RepositoryIssueDomain(data?: object)`

Create a new `RepositoryIssueDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryIssueDomainEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GithubProjectIssuesSDK.test()`.

**Returns:** `GithubProjectIssuesSDK` instance in test mode.


---

## CoffeeEntity

```ts
const coffee = client.Coffee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Drink Description. |
| `id` | `number` | No | ID of Coffee Details Object. |
| `image` | `string` | Yes | Image URL. |
| `ingredients` | `any[]` | Yes | Main Ingredients. |
| `title` | `string` | Yes | Coffee Name/Type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Coffee().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Coffee().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoffeeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CoffeeDomainEntity

```ts
const coffee_domain = client.CoffeeDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Drink Description. |
| `id` | `number` | No | ID of Coffee Details Object. |
| `image` | `string` | Yes | Image URL. |
| `ingredients` | `any[]` | Yes | Main Ingredients. |
| `title` | `string` | Yes | Coffee Name/Type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CoffeeDomain().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoffeeDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DonateRestControllerEntity

```ts
const donate_rest_controller = client.DonateRestController()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DonateRestController().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DonateRestControllerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PortfolioControllerEntity

```ts
const portfolio_controller = client.PortfolioController()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PortfolioController().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PortfolioControllerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryDetailDomainEntity

```ts
const repository_detail_domain = client.RepositoryDetailDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appHome` | `string` | No | Normally this value is the link to the project/app home page. |
| `description` | `string` | No | Description of GitHub project. |
| `fullName` | `string` | Yes | Full Name of GitHub Repository (Format is: username/project_name). |
| `issueCount` | `number` | No | Number of associated issues. |
| `name` | `string` | Yes | Name of GitHub Repository. |
| `repoUrl` | `string` | Yes | This is the home page URL of the project. |
| `topics` | `string` | No | Labels or topics associated with the GitHub repository project. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryDetailDomain().list({ username: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryDetailDomain().load({ username: 'username' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryDetailDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryIssueDomainEntity

```ts
const repository_issue_domain = client.RepositoryIssueDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | Issue Content & Description. |
| `labels` | `any[]` | No | Issue Labels / Tags. |
| `number` | `string` | Yes | Project Issue Number. |
| `state` | `string` | No | Issue State. |
| `title` | `string` | Yes | Issue Title Text. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryIssueDomain().list({ repository: "example", username: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryIssueDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Version().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubProjectIssuesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GithubProjectIssuesSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

