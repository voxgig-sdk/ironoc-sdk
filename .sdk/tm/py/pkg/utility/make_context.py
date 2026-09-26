# Ironoc SDK utility: make_context

from projectname_sdk.core.context import IronocContext


def make_context_util(ctxmap, basectx):
    return IronocContext(ctxmap, basectx)
