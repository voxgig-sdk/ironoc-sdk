# frozen_string_literal: true

# Typed models for the GithubProjectIssues SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Coffee entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String]
#
# @!attribute [rw] ingredients
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
Coffee = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Request payload for Coffee#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
CoffeeListMatch = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Request payload for Coffee#update.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
CoffeeUpdateData = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# CoffeeDomain entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String]
#
# @!attribute [rw] ingredients
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
CoffeeDomain = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# Request payload for CoffeeDomain#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
CoffeeDomainListMatch = Struct.new(
  :description,
  :id,
  :image,
  :ingredients,
  :title,
  keyword_init: true
)

# DonateRestController entity data model.
class DonateRestController
end

# Request payload for DonateRestController#list.
class DonateRestControllerListMatch
end

# PortfolioController entity data model.
class PortfolioController
end

# Request payload for PortfolioController#list.
class PortfolioControllerListMatch
end

# RepositoryDetailDomain entity data model.
#
# @!attribute [rw] appHome
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] fullName
#   @return [String]
#
# @!attribute [rw] issueCount
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] repoUrl
#   @return [String]
#
# @!attribute [rw] topics
#   @return [String, nil]
RepositoryDetailDomain = Struct.new(
  :appHome,
  :description,
  :fullName,
  :issueCount,
  :name,
  :repoUrl,
  :topics,
  keyword_init: true
)

# Request payload for RepositoryDetailDomain#load.
#
# @!attribute [rw] username
#   @return [String]
RepositoryDetailDomainLoadMatch = Struct.new(
  :username,
  keyword_init: true
)

# Request payload for RepositoryDetailDomain#list.
#
# @!attribute [rw] username
#   @return [String]
RepositoryDetailDomainListMatch = Struct.new(
  :username,
  keyword_init: true
)

# RepositoryIssueDomain entity data model.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
RepositoryIssueDomain = Struct.new(
  :body,
  :labels,
  :number,
  :state,
  :title,
  keyword_init: true
)

# Request payload for RepositoryIssueDomain#list.
#
# @!attribute [rw] repository
#   @return [String]
#
# @!attribute [rw] username
#   @return [String]
RepositoryIssueDomainListMatch = Struct.new(
  :repository,
  :username,
  keyword_init: true
)

# Version entity data model.
class Version
end

# Request payload for Version#load.
class VersionLoadMatch
end

