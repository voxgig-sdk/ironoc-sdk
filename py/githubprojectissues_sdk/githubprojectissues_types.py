# Typed models for the GithubProjectIssues SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CoffeeRequired(TypedDict):
    image: str
    ingredients: list
    title: str


class Coffee(CoffeeRequired, total=False):
    description: str
    id: int


class CoffeeListMatch(TypedDict, total=False):
    description: str
    id: int
    image: str
    ingredients: list
    title: str


class CoffeeUpdateData(TypedDict, total=False):
    description: str
    id: int
    image: str
    ingredients: list
    title: str


class CoffeeDomainRequired(TypedDict):
    image: str
    ingredients: list
    title: str


class CoffeeDomain(CoffeeDomainRequired, total=False):
    description: str
    id: int


class CoffeeDomainListMatch(TypedDict, total=False):
    description: str
    id: int
    image: str
    ingredients: list
    title: str


class DonateRestController(TypedDict):
    pass


class DonateRestControllerListMatch(TypedDict):
    pass


class PortfolioController(TypedDict):
    pass


class PortfolioControllerListMatch(TypedDict):
    pass


class RepositoryDetailDomainRequired(TypedDict):
    fullName: str
    name: str
    repoUrl: str


class RepositoryDetailDomain(RepositoryDetailDomainRequired, total=False):
    appHome: str
    description: str
    issueCount: int
    topics: str


class RepositoryDetailDomainLoadMatch(TypedDict):
    username: str


class RepositoryDetailDomainListMatch(TypedDict):
    username: str


class RepositoryIssueDomainRequired(TypedDict):
    number: str
    title: str


class RepositoryIssueDomain(RepositoryIssueDomainRequired, total=False):
    body: str
    labels: list
    state: str


class RepositoryIssueDomainListMatch(TypedDict):
    repository: str
    username: str


class Version(TypedDict):
    pass


class VersionLoadMatch(TypedDict):
    pass
