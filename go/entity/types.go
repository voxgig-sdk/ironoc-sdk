// Typed models for the GithubProjectIssues SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/github-project-issues-sdk/go/core"
)

// Coffee is the typed data model for the coffee entity.
type Coffee struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image string `json:"image"`
	Ingredients []any `json:"ingredients"`
	Title string `json:"title"`
}

// CoffeeListMatch is the typed request payload for Coffee.ListTyped.
type CoffeeListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
	Title *string `json:"title,omitempty"`
}

// CoffeeUpdateData is the typed request payload for Coffee.UpdateTyped.
type CoffeeUpdateData struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
	Title *string `json:"title,omitempty"`
}

// CoffeeDomain is the typed data model for the coffee_domain entity.
type CoffeeDomain struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image string `json:"image"`
	Ingredients []any `json:"ingredients"`
	Title string `json:"title"`
}

// CoffeeDomainListMatch is the typed request payload for CoffeeDomain.ListTyped.
type CoffeeDomainListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
	Title *string `json:"title,omitempty"`
}

// DonateRestController is the typed data model for the donate_rest_controller entity.
type DonateRestController struct {
}

// DonateRestControllerListMatch is the typed request payload for DonateRestController.ListTyped.
type DonateRestControllerListMatch struct {
}

// PortfolioController is the typed data model for the portfolio_controller entity.
type PortfolioController struct {
}

// PortfolioControllerListMatch is the typed request payload for PortfolioController.ListTyped.
type PortfolioControllerListMatch struct {
}

// RepositoryDetailDomain is the typed data model for the repository_detail_domain entity.
type RepositoryDetailDomain struct {
	AppHome *string `json:"appHome,omitempty"`
	Description *string `json:"description,omitempty"`
	FullName string `json:"fullName"`
	IssueCount *int `json:"issueCount,omitempty"`
	Name string `json:"name"`
	RepoUrl string `json:"repoUrl"`
	Topics *string `json:"topics,omitempty"`
}

// RepositoryDetailDomainLoadMatch is the typed request payload for RepositoryDetailDomain.LoadTyped.
type RepositoryDetailDomainLoadMatch struct {
	Username string `json:"username"`
}

// RepositoryDetailDomainListMatch is the typed request payload for RepositoryDetailDomain.ListTyped.
type RepositoryDetailDomainListMatch struct {
	AppHome *string `json:"appHome,omitempty"`
	Description *string `json:"description,omitempty"`
	FullName *string `json:"fullName,omitempty"`
	IssueCount *int `json:"issueCount,omitempty"`
	Name *string `json:"name,omitempty"`
	RepoUrl *string `json:"repoUrl,omitempty"`
	Topics *string `json:"topics,omitempty"`
}

// RepositoryIssueDomain is the typed data model for the repository_issue_domain entity.
type RepositoryIssueDomain struct {
	Body *string `json:"body,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Number string `json:"number"`
	State *string `json:"state,omitempty"`
	Title string `json:"title"`
}

// RepositoryIssueDomainListMatch is the typed request payload for RepositoryIssueDomain.ListTyped.
type RepositoryIssueDomainListMatch struct {
	Repository string `json:"repository"`
	Username string `json:"username"`
}

// Version is the typed data model for the version entity.
type Version struct {
}

// VersionLoadMatch is the typed request payload for Version.LoadTyped.
type VersionLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
