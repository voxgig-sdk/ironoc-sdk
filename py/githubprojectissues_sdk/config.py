# GithubProjectIssues SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GithubProjectIssues",
            "slug": "github-project-issues",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://ironoc.net",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "coffee": {},
                "coffee_domain": {},
                "donate_rest_controller": {},
                "portfolio_controller": {},
                "repository_detail_domain": {},
                "repository_issue_domain": {},
                "version": {},
            },
        },
        "entity": {
      "coffee": {
        "fields": [
          {
            "name": "description",
            "short": "Drink Description.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "ID of Coffee Details Object.",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "req": True,
            "short": "Image URL.",
            "type": "`$STRING`",
          },
          {
            "name": "ingredients",
            "req": True,
            "short": "Main Ingredients.",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Coffee Name/Type.",
            "type": "`$STRING`",
          },
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
                  "coffees",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                  "coffees",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "coffee_domain": {
        "fields": [
          {
            "name": "description",
            "short": "Drink Description.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "ID of Coffee Details Object.",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "req": True,
            "short": "Image URL.",
            "type": "`$STRING`",
          },
          {
            "name": "ingredients",
            "req": True,
            "short": "Main Ingredients.",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Coffee Name/Type.",
            "type": "`$STRING`",
          },
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
                  "coffees-graph-ql",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                  "donate-items",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                  "portfolio-items",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "repository_detail_domain": {
        "fields": [
          {
            "name": "appHome",
            "short": "Normally this value is the link to the project/app home page.",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of GitHub project.",
            "type": "`$STRING`",
          },
          {
            "name": "fullName",
            "req": True,
            "short": "Full Name of GitHub Repository (Format is: username/project_name).",
            "type": "`$STRING`",
          },
          {
            "name": "issueCount",
            "short": "Number of associated issues.",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of GitHub Repository.",
            "type": "`$STRING`",
          },
          {
            "name": "repoUrl",
            "req": True,
            "short": "This is the home page URL of the project.",
            "type": "`$STRING`",
          },
          {
            "name": "topics",
            "short": "Labels or topics associated with the GitHub repository project.",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-detail",
                "parts": [
                  "api",
                  "get-repo-detail",
                ],
                "select": {
                  "exist": [
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-detail/{username}/",
                "parts": [
                  "api",
                  "get-repo-detail",
                  "{username}",
                ],
                "select": {
                  "exist": [
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "get_repo_detail",
            ],
          ],
        },
      },
      "repository_issue_domain": {
        "fields": [
          {
            "name": "body",
            "short": "Issue Content & Description.",
            "type": "`$STRING`",
          },
          {
            "name": "labels",
            "short": "Issue Labels / Tags.",
            "type": "`$ARRAY`",
          },
          {
            "name": "number",
            "req": True,
            "short": "Project Issue Number.",
            "type": "`$STRING`",
          },
          {
            "name": "state",
            "short": "Issue State.",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Issue Title Text.",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "username",
                      "orig": "username",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-issue/{username}/{repository}/",
                "parts": [
                  "api",
                  "get-repo-issue",
                  "{username}",
                  "{repository}",
                ],
                "select": {
                  "exist": [
                    "repository",
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "get_repo_issue",
            ],
          ],
        },
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
                  "version",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
