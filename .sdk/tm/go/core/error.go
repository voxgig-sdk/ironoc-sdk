package core

type IronocError struct {
	IsIronocError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIronocError(code string, msg string, ctx *Context) *IronocError {
	return &IronocError{
		IsIronocError: true,
		Sdk:              "Ironoc",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IronocError) Error() string {
	return e.Msg
}
