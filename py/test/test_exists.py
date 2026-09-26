# Ironoc SDK exists test

import pytest
from ironoc_sdk import IronocSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IronocSDK.test(None, None)
        assert testsdk is not None
