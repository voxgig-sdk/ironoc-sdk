package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Ironoc",
			"slug": "ironoc",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://ironoc.net",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"coffee": map[string]any{},
				"coffee_domain": map[string]any{},
				"donate_rest_controller": map[string]any{},
				"portfolio_controller": map[string]any{},
				"repository_detail_domain": map[string]any{},
				"repository_issue_domain": map[string]any{},
				"version": map[string]any{},
			},
		},
		"entity": map[string]any{
			"coffee": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Drink Description.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "ID of Coffee Details Object.",
						"format": "int32",
					},
					map[string]any{
						"name": "image",
						"title": "Image",
						"type": "`$STRING`",
						"req": true,
						"short": "Image URL.",
					},
					map[string]any{
						"name": "ingredients",
						"title": "Ingredients",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Main Ingredients.",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Coffee Name/Type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coffee",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/coffees",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "coffees",
									},
								},
								"parts": []any{
									"api",
									"coffees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/coffees",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "coffees",
									},
								},
								"parts": []any{
									"api",
									"coffees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"coffee_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Drink Description.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "ID of Coffee Details Object.",
						"format": "int32",
					},
					map[string]any{
						"name": "image",
						"title": "Image",
						"type": "`$STRING`",
						"req": true,
						"short": "Image URL.",
					},
					map[string]any{
						"name": "ingredients",
						"title": "Ingredients",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Main Ingredients.",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Coffee Name/Type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coffee_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/coffees-graph-ql",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "coffees-graph-ql",
									},
								},
								"parts": []any{
									"api",
									"coffees-graph-ql",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"donate_rest_controller": map[string]any{
				"fields": []any{},
				"name": "donate_rest_controller",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/donate-items",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "donate-items",
									},
								},
								"parts": []any{
									"api",
									"donate-items",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"portfolio_controller": map[string]any{
				"fields": []any{},
				"name": "portfolio_controller",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/portfolio-items",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "portfolio-items",
									},
								},
								"parts": []any{
									"api",
									"portfolio-items",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"repository_detail_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "appHome",
						"title": "App Home",
						"type": "`$STRING`",
						"short": "Normally this value is the link to the project/app home page.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of GitHub project.",
					},
					map[string]any{
						"name": "fullName",
						"title": "Full Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Full Name of GitHub Repository (Format is: username/project_name).",
					},
					map[string]any{
						"name": "issueCount",
						"title": "Issue Count",
						"type": "`$INTEGER`",
						"short": "Number of associated issues.",
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of GitHub Repository.",
					},
					map[string]any{
						"name": "repoUrl",
						"title": "Repo Url",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the home page URL of the project.",
					},
					map[string]any{
						"name": "topics",
						"title": "Topics",
						"type": "`$STRING`",
						"short": "Labels or topics associated with the GitHub repository project.",
					},
				},
				"name": "repository_detail_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-detail",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "get-repo-detail",
									},
								},
								"parts": []any{
									"api",
									"get-repo-detail",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-detail/{username}/",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "get-repo-detail",
									},
									map[string]any{
										"var": "username",
									},
								},
								"parts": []any{
									"api",
									"get-repo-detail",
									"{username}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"repository_issue_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"short": "Issue Content & Description.",
					},
					map[string]any{
						"name": "labels",
						"title": "Labels",
						"type": "`$ARRAY`",
						"short": "Issue Labels / Tags.",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$STRING`",
						"req": true,
						"short": "Project Issue Number.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "Issue State.",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Issue Title Text.",
					},
				},
				"name": "repository_issue_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-issue/{username}/{repository}/",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "get-repo-issue",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"var": "repository",
									},
								},
								"parts": []any{
									"api",
									"get-repo-issue",
									"{username}",
									"{repository}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "repository",
											"orig": "repository",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"repository",
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"version": map[string]any{
				"fields": []any{},
				"name": "version",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/application/version",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "application",
									},
									map[string]any{
										"lit": "version",
									},
								},
								"parts": []any{
									"api",
									"application",
									"version",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
