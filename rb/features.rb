# Ironoc SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IronocFeatures
  def self.make_feature(name)
    case name
    when "base"
      IronocBaseFeature.new
    when "ratelimit"
      IronocRatelimitFeature.new
    when "retry"
      IronocRetryFeature.new
    when "test"
      IronocTestFeature.new
    when "timeout"
      IronocTimeoutFeature.new
    else
      IronocBaseFeature.new
    end
  end
end
