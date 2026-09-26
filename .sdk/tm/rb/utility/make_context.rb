# Ironoc SDK utility: make_context
require_relative '../core/context'
module IronocUtilities
  MakeContext = ->(ctxmap, basectx) {
    IronocContext.new(ctxmap, basectx)
  }
end
