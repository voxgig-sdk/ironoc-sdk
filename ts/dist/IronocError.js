"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronocError = void 0;
class IronocError extends Error {
    isIronocError = true;
    sdk = 'Ironoc';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IronocError = IronocError;
//# sourceMappingURL=IronocError.js.map