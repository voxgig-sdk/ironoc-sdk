<?php
declare(strict_types=1);

// GithubProjectIssues SDK configuration

class GithubProjectIssuesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GithubProjectIssues",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://ironoc.net",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "coffee" => [],
                    "coffee_domain" => [],
                    "donate_rest_controller" => [],
                    "portfolio_controller" => [],
                    "repository_detail_domain" => [],
                    "repository_issue_domain" => [],
                    "version" => [],
                ],
            ],
            "entity" => [
        'coffee' => [
          'fields' => [
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ingredients',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'coffee',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/coffees',
                  'parts' => [
                    'api',
                    'coffees',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/coffees',
                  'parts' => [
                    'api',
                    'coffees',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'coffee_domain' => [
          'fields' => [
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ingredients',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'coffee_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/coffees-graph-ql',
                  'parts' => [
                    'api',
                    'coffees-graph-ql',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'donate_rest_controller' => [
          'fields' => [],
          'name' => 'donate_rest_controller',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/donate-items',
                  'parts' => [
                    'api',
                    'donate-items',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'portfolio_controller' => [
          'fields' => [],
          'name' => 'portfolio_controller',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/portfolio-items',
                  'parts' => [
                    'api',
                    'portfolio-items',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'repository_detail_domain' => [
          'fields' => [
            [
              'name' => 'appHome',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fullName',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issueCount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'repoUrl',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'topics',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'repository_detail_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-detail',
                  'parts' => [
                    'api',
                    'get-repo-detail',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-detail/{username}/',
                  'parts' => [
                    'api',
                    'get-repo-detail',
                    '{username}',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'get_repo_detail',
              ],
            ],
          ],
        ],
        'repository_issue_domain' => [
          'fields' => [
            [
              'name' => 'body',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'labels',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'number',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'state',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'repository_issue_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'repository',
                        'orig' => 'repository',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-issue/{username}/{repository}/',
                  'parts' => [
                    'api',
                    'get-repo-issue',
                    '{username}',
                    '{repository}',
                  ],
                  'select' => [
                    'exist' => [
                      'repository',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'get_repo_issue',
              ],
            ],
          ],
        ],
        'version' => [
          'fields' => [],
          'name' => 'version',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/application/version',
                  'parts' => [
                    'api',
                    'application',
                    'version',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GithubProjectIssuesFeatures::make_feature($name);
    }
}
