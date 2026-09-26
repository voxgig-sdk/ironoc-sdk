<?php
declare(strict_types=1);

// Ironoc SDK configuration

class IronocConfig
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
                "name" => "Ironoc",
                "slug" => "ironoc",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Drink Description.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'ID of Coffee Details Object.',
              'format' => 'int32',
            ],
            [
              'name' => 'image',
              'title' => 'Image',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Image URL.',
            ],
            [
              'name' => 'ingredients',
              'title' => 'Ingredients',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Main Ingredients.',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Coffee Name/Type.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'coffee',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/coffees',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'coffees',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'coffees',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/coffees',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'coffees',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'coffees',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Drink Description.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'ID of Coffee Details Object.',
              'format' => 'int32',
            ],
            [
              'name' => 'image',
              'title' => 'Image',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Image URL.',
            ],
            [
              'name' => 'ingredients',
              'title' => 'Ingredients',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Main Ingredients.',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Coffee Name/Type.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'coffee_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/coffees-graph-ql',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'coffees-graph-ql',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'coffees-graph-ql',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/donate-items',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'donate-items',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'donate-items',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/portfolio-items',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'portfolio-items',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'portfolio-items',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
              'title' => 'App Home',
              'type' => '`$STRING`',
              'short' => 'Normally this value is the link to the project/app home page.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Description of GitHub project.',
            ],
            [
              'name' => 'fullName',
              'title' => 'Full Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Full Name of GitHub Repository (Format is: username/project_name).',
            ],
            [
              'name' => 'issueCount',
              'title' => 'Issue Count',
              'type' => '`$INTEGER`',
              'short' => 'Number of associated issues.',
              'format' => 'int32',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Name of GitHub Repository.',
            ],
            [
              'name' => 'repoUrl',
              'title' => 'Repo Url',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'This is the home page URL of the project.',
            ],
            [
              'name' => 'topics',
              'title' => 'Topics',
              'type' => '`$STRING`',
              'short' => 'Labels or topics associated with the GitHub repository project.',
            ],
          ],
          'name' => 'repository_detail_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-detail',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'get-repo-detail',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'get-repo-detail',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'username',
                        'orig' => 'username',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-detail/{username}/',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'get-repo-detail',
                    ],
                    [
                      'var' => 'username',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'get-repo-detail',
                    '{username}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'username',
                        'orig' => 'username',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'repository_issue_domain' => [
          'fields' => [
            [
              'name' => 'body',
              'title' => 'Body',
              'type' => '`$STRING`',
              'short' => 'Issue Content & Description.',
            ],
            [
              'name' => 'labels',
              'title' => 'Labels',
              'type' => '`$ARRAY`',
              'short' => 'Issue Labels / Tags.',
            ],
            [
              'name' => 'number',
              'title' => 'Number',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Project Issue Number.',
            ],
            [
              'name' => 'state',
              'title' => 'State',
              'type' => '`$STRING`',
              'short' => 'Issue State.',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Issue Title Text.',
            ],
          ],
          'name' => 'repository_issue_domain',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/get-repo-issue/{username}/{repository}/',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'get-repo-issue',
                    ],
                    [
                      'var' => 'username',
                    ],
                    [
                      'var' => 'repository',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'get-repo-issue',
                    '{username}',
                    '{repository}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'repository',
                        'orig' => 'repository',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'username',
                        'orig' => 'username',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'repository',
                      'username',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/application/version',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'application',
                    ],
                    [
                      'lit' => 'version',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'application',
                    'version',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
        return IronocFeatures::make_feature($name);
    }
}
