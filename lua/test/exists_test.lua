-- Ironoc SDK exists test

local sdk = require("ironoc_sdk")

describe("IronocSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
