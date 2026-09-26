package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCoffeeEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewCoffeeDomainEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewDonateRestControllerEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewPortfolioControllerEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewRepositoryDetailDomainEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewRepositoryIssueDomainEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

var NewVersionEntityFunc func(client *IronocSDK, entopts map[string]any) IronocEntity

