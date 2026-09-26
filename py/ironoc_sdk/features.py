# Ironoc SDK feature factory

from ironoc_sdk.feature.base_feature import IronocBaseFeature
from ironoc_sdk.feature.ratelimit_feature import IronocRatelimitFeature
from ironoc_sdk.feature.retry_feature import IronocRetryFeature
from ironoc_sdk.feature.test_feature import IronocTestFeature
from ironoc_sdk.feature.timeout_feature import IronocTimeoutFeature


_FEATURES = {
    "base": lambda: IronocBaseFeature(),
    "ratelimit": lambda: IronocRatelimitFeature(),
    "retry": lambda: IronocRetryFeature(),
    "test": lambda: IronocTestFeature(),
    "timeout": lambda: IronocTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
