-- Ironoc SDK error

local IronocError = {}
IronocError.__index = IronocError


function IronocError.new(code, msg, ctx)
  local self = setmetatable({}, IronocError)
  self.is_sdk_error = true
  self.sdk = "Ironoc"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IronocError:error()
  return self.msg
end


function IronocError:__tostring()
  return self.msg
end


return IronocError
