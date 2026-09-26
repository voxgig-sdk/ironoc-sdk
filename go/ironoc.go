package voxgigironocsdk

import (
	"github.com/voxgig-sdk/ironoc-sdk/go/core"
	"github.com/voxgig-sdk/ironoc-sdk/go/entity"
	"github.com/voxgig-sdk/ironoc-sdk/go/feature"
	_ "github.com/voxgig-sdk/ironoc-sdk/go/utility"
)

// Type aliases preserve external API.
type IronocSDK = core.IronocSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IronocEntity = core.IronocEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IronocError = core.IronocError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCoffeeEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewCoffeeEntity(client, entopts)
	}
	core.NewCoffeeDomainEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewCoffeeDomainEntity(client, entopts)
	}
	core.NewDonateRestControllerEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewDonateRestControllerEntity(client, entopts)
	}
	core.NewPortfolioControllerEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewPortfolioControllerEntity(client, entopts)
	}
	core.NewRepositoryDetailDomainEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewRepositoryDetailDomainEntity(client, entopts)
	}
	core.NewRepositoryIssueDomainEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewRepositoryIssueDomainEntity(client, entopts)
	}
	core.NewVersionEntityFunc = func(client *core.IronocSDK, entopts map[string]any) core.IronocEntity {
		return entity.NewVersionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIronocSDK = core.NewIronocSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIronocSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IronocSDK  { return NewIronocSDK(nil) }
func Test() *IronocSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
