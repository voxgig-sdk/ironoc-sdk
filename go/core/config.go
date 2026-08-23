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
			"name": "GithubProjectIssues",
			"slug": "github-project-issues",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"short": "Drink Description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "ID of Coffee Details Object.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image",
						"req": true,
						"short": "Image URL.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ingredients",
						"req": true,
						"short": "Main Ingredients.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Coffee Name/Type.",
						"type": "`$STRING`",
					},
				},
				"name": "coffee",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/coffees",
								"parts": []any{
									"api",
									"coffees",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/coffees",
								"parts": []any{
									"api",
									"coffees",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
						"short": "Drink Description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "ID of Coffee Details Object.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image",
						"req": true,
						"short": "Image URL.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ingredients",
						"req": true,
						"short": "Main Ingredients.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Coffee Name/Type.",
						"type": "`$STRING`",
					},
				},
				"name": "coffee_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/coffees-graph-ql",
								"parts": []any{
									"api",
									"coffees-graph-ql",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/donate-items",
								"parts": []any{
									"api",
									"donate-items",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/portfolio-items",
								"parts": []any{
									"api",
									"portfolio-items",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
						"short": "Normally this value is the link to the project/app home page.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of GitHub project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullName",
						"req": true,
						"short": "Full Name of GitHub Repository (Format is: username/project_name).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issueCount",
						"short": "Number of associated issues.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of GitHub Repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repoUrl",
						"req": true,
						"short": "This is the home page URL of the project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topics",
						"short": "Labels or topics associated with the GitHub repository project.",
						"type": "`$STRING`",
					},
				},
				"name": "repository_detail_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-detail",
								"parts": []any{
									"api",
									"get-repo-detail",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-detail/{username}/",
								"parts": []any{
									"api",
									"get-repo-detail",
									"{username}",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"get_repo_detail",
						},
					},
				},
			},
			"repository_issue_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"short": "Issue Content & Description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "labels",
						"short": "Issue Labels / Tags.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "number",
						"req": true,
						"short": "Project Issue Number.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "Issue State.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Issue Title Text.",
						"type": "`$STRING`",
					},
				},
				"name": "repository_issue_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "repository",
											"orig": "repository",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/get-repo-issue/{username}/{repository}/",
								"parts": []any{
									"api",
									"get-repo-issue",
									"{username}",
									"{repository}",
								},
								"select": map[string]any{
									"exist": []any{
										"repository",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"get_repo_issue",
						},
					},
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/application/version",
								"parts": []any{
									"api",
									"application",
									"version",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
