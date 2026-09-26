# Ironoc SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "name": "Ironoc",
            "slug": "ironoc",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Drink Description.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "ID of Coffee Details Object.",
            "format": "int32",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "req": True,
            "short": "Image URL.",
          },
          {
            "name": "ingredients",
            "title": "Ingredients",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Main Ingredients.",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Coffee Name/Type.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "coffee",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/coffees",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "coffees",
                  },
                ],
                "parts": [
                  "api",
                  "coffees",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/api/coffees",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "coffees",
                  },
                ],
                "parts": [
                  "api",
                  "coffees",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Drink Description.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "ID of Coffee Details Object.",
            "format": "int32",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "req": True,
            "short": "Image URL.",
          },
          {
            "name": "ingredients",
            "title": "Ingredients",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Main Ingredients.",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Coffee Name/Type.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "coffee_domain",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/coffees-graph-ql",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "coffees-graph-ql",
                  },
                ],
                "parts": [
                  "api",
                  "coffees-graph-ql",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
                "kind": "http",
                "method": "GET",
                "orig": "/api/donate-items",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "donate-items",
                  },
                ],
                "parts": [
                  "api",
                  "donate-items",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
                "kind": "http",
                "method": "GET",
                "orig": "/api/portfolio-items",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "portfolio-items",
                  },
                ],
                "parts": [
                  "api",
                  "portfolio-items",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "App Home",
            "type": "`$STRING`",
            "short": "Normally this value is the link to the project/app home page.",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Description of GitHub project.",
          },
          {
            "name": "fullName",
            "title": "Full Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Full Name of GitHub Repository (Format is: username/project_name).",
          },
          {
            "name": "issueCount",
            "title": "Issue Count",
            "type": "`$INTEGER`",
            "short": "Number of associated issues.",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of GitHub Repository.",
          },
          {
            "name": "repoUrl",
            "title": "Repo Url",
            "type": "`$STRING`",
            "req": True,
            "short": "This is the home page URL of the project.",
          },
          {
            "name": "topics",
            "title": "Topics",
            "type": "`$STRING`",
            "short": "Labels or topics associated with the GitHub repository project.",
          },
        ],
        "name": "repository_detail_domain",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-detail",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "get-repo-detail",
                  },
                ],
                "parts": [
                  "api",
                  "get-repo-detail",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "username",
                      "orig": "username",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "username",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-detail/{username}/",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "get-repo-detail",
                  },
                  {
                    "var": "username",
                  },
                ],
                "parts": [
                  "api",
                  "get-repo-detail",
                  "{username}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "username",
                      "orig": "username",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "username",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "repository_issue_domain": {
        "fields": [
          {
            "name": "body",
            "title": "Body",
            "type": "`$STRING`",
            "short": "Issue Content & Description.",
          },
          {
            "name": "labels",
            "title": "Labels",
            "type": "`$ARRAY`",
            "short": "Issue Labels / Tags.",
          },
          {
            "name": "number",
            "title": "Number",
            "type": "`$STRING`",
            "req": True,
            "short": "Project Issue Number.",
          },
          {
            "name": "state",
            "title": "State",
            "type": "`$STRING`",
            "short": "Issue State.",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Issue Title Text.",
          },
        ],
        "name": "repository_issue_domain",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/get-repo-issue/{username}/{repository}/",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "get-repo-issue",
                  },
                  {
                    "var": "username",
                  },
                  {
                    "var": "repository",
                  },
                ],
                "parts": [
                  "api",
                  "get-repo-issue",
                  "{username}",
                  "{repository}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "repository",
                      "orig": "repository",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "username",
                      "orig": "username",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "repository",
                    "username",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
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
                "kind": "http",
                "method": "GET",
                "orig": "/api/application/version",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "application",
                  },
                  {
                    "lit": "version",
                  },
                ],
                "parts": [
                  "api",
                  "application",
                  "version",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
