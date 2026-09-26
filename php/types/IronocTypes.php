<?php
declare(strict_types=1);

// Typed models for the Ironoc SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Coffee entity data model. */
class Coffee
{
    public ?string $description = null;
    public ?int $id = null;
    public string $image;
    public array $ingredients;
    public string $title;
}

/** Request payload for Coffee#list. */
class CoffeeListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** Request payload for Coffee#update. */
class CoffeeUpdateData
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** CoffeeDomain entity data model. */
class CoffeeDomain
{
    public ?string $description = null;
    public ?int $id = null;
    public string $image;
    public array $ingredients;
    public string $title;
}

/** Request payload for CoffeeDomain#list. */
class CoffeeDomainListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?string $title = null;
}

/** DonateRestController entity data model. */
class DonateRestController
{
}

/** Request payload for DonateRestController#list. */
class DonateRestControllerListMatch
{
}

/** PortfolioController entity data model. */
class PortfolioController
{
}

/** Request payload for PortfolioController#list. */
class PortfolioControllerListMatch
{
}

/** RepositoryDetailDomain entity data model. */
class RepositoryDetailDomain
{
    public ?string $appHome = null;
    public ?string $description = null;
    public string $fullName;
    public ?int $issueCount = null;
    public string $name;
    public string $repoUrl;
    public ?string $topics = null;
}

/** Request payload for RepositoryDetailDomain#load. */
class RepositoryDetailDomainLoadMatch
{
    public string $username;
}

/** Request payload for RepositoryDetailDomain#list. */
class RepositoryDetailDomainListMatch
{
    public string $username;
}

/** RepositoryIssueDomain entity data model. */
class RepositoryIssueDomain
{
    public ?string $body = null;
    public ?array $labels = null;
    public string $number;
    public ?string $state = null;
    public string $title;
}

/** Request payload for RepositoryIssueDomain#list. */
class RepositoryIssueDomainListMatch
{
    public string $repository;
    public string $username;
}

/** Version entity data model. */
class Version
{
}

/** Request payload for Version#load. */
class VersionLoadMatch
{
}

