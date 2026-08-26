
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GithubProjectIssues',
        slug: "github-project-issues",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://ironoc.net",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      coffee: {
      },

      coffee_domain: {
      },

      donate_rest_controller: {
      },

      portfolio_controller: {
      },

      repository_detail_domain: {
      },

      repository_issue_domain: {
      },

      version: {
      },

    }
  }


  entity = {
    "coffee": {
      "fields": [
        {
          "name": "description",
          "short": "Drink Description.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "ID of Coffee Details Object.",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "req": true,
          "short": "Image URL.",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "req": true,
          "short": "Main Ingredients.",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "req": true,
          "short": "Coffee Name/Type.",
          "type": "`$STRING`"
        }
      ],
      "name": "coffee",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/coffees",
              "parts": [
                "api",
                "coffees"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/coffees",
              "parts": [
                "api",
                "coffees"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "coffee_domain": {
      "fields": [
        {
          "name": "description",
          "short": "Drink Description.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "ID of Coffee Details Object.",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "req": true,
          "short": "Image URL.",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "req": true,
          "short": "Main Ingredients.",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "req": true,
          "short": "Coffee Name/Type.",
          "type": "`$STRING`"
        }
      ],
      "name": "coffee_domain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/coffees-graph-ql",
              "parts": [
                "api",
                "coffees-graph-ql"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "donate_rest_controller": {
      "fields": [],
      "name": "donate_rest_controller",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/donate-items",
              "parts": [
                "api",
                "donate-items"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "portfolio_controller": {
      "fields": [],
      "name": "portfolio_controller",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/portfolio-items",
              "parts": [
                "api",
                "portfolio-items"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "repository_detail_domain": {
      "fields": [
        {
          "name": "appHome",
          "short": "Normally this value is the link to the project/app home page.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of GitHub project.",
          "type": "`$STRING`"
        },
        {
          "name": "fullName",
          "req": true,
          "short": "Full Name of GitHub Repository (Format is: username/project_name).",
          "type": "`$STRING`"
        },
        {
          "name": "issueCount",
          "short": "Number of associated issues.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of GitHub Repository.",
          "type": "`$STRING`"
        },
        {
          "name": "repoUrl",
          "req": true,
          "short": "This is the home page URL of the project.",
          "type": "`$STRING`"
        },
        {
          "name": "topics",
          "short": "Labels or topics associated with the GitHub repository project.",
          "type": "`$STRING`"
        }
      ],
      "name": "repository_detail_domain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/get-repo-detail",
              "parts": [
                "api",
                "get-repo-detail"
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/get-repo-detail/{username}/",
              "parts": [
                "api",
                "get-repo-detail",
                "{username}"
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "get_repo_detail"
          ]
        ]
      }
    },
    "repository_issue_domain": {
      "fields": [
        {
          "name": "body",
          "short": "Issue Content & Description.",
          "type": "`$STRING`"
        },
        {
          "name": "labels",
          "short": "Issue Labels / Tags.",
          "type": "`$ARRAY`"
        },
        {
          "name": "number",
          "req": true,
          "short": "Project Issue Number.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "short": "Issue State.",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "req": true,
          "short": "Issue Title Text.",
          "type": "`$STRING`"
        }
      ],
      "name": "repository_issue_domain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "repository",
                    "orig": "repository",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/get-repo-issue/{username}/{repository}/",
              "parts": [
                "api",
                "get-repo-issue",
                "{username}",
                "{repository}"
              ],
              "select": {
                "exist": [
                  "repository",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "get_repo_issue"
          ]
        ]
      }
    },
    "version": {
      "fields": [],
      "name": "version",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/application/version",
              "parts": [
                "api",
                "application",
                "version"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

