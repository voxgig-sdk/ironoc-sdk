import { Context } from './Context';
declare class IronocError extends Error {
    isIronocError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { IronocError };
