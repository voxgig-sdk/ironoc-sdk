-- Typed models for the GithubProjectIssues SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Coffee
---@field description? string
---@field id? number
---@field image string
---@field ingredients table
---@field title string

---@class CoffeeListMatch
---@field description? string
---@field id? number
---@field image? string
---@field ingredients? table
---@field title? string

---@class CoffeeUpdateData
---@field description? string
---@field id? number
---@field image? string
---@field ingredients? table
---@field title? string

---@class CoffeeDomain
---@field description? string
---@field id? number
---@field image string
---@field ingredients table
---@field title string

---@class CoffeeDomainListMatch
---@field description? string
---@field id? number
---@field image? string
---@field ingredients? table
---@field title? string

---@class DonateRestController

---@class DonateRestControllerListMatch

---@class PortfolioController

---@class PortfolioControllerListMatch

---@class RepositoryDetailDomain
---@field appHome? string
---@field description? string
---@field fullName string
---@field issueCount? number
---@field name string
---@field repoUrl string
---@field topics? string

---@class RepositoryDetailDomainLoadMatch
---@field username string

---@class RepositoryDetailDomainListMatch
---@field appHome? string
---@field description? string
---@field fullName? string
---@field issueCount? number
---@field name? string
---@field repoUrl? string
---@field topics? string

---@class RepositoryIssueDomain
---@field body? string
---@field labels? table
---@field number string
---@field state? string
---@field title string

---@class RepositoryIssueDomainListMatch
---@field repository string
---@field username string

---@class Version

---@class VersionLoadMatch

local M = {}

return M
