import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { Version, VersionLoadMatch } from '../IronocTypes';
declare class VersionEntity extends IronocEntityBase<Version> {
    constructor(client: IronocSDK, entopts: any);
    make(this: VersionEntity): VersionEntity;
    load(this: any, reqmatch?: VersionLoadMatch, ctrl?: Control): Promise<VersionEntity>;
}
export { VersionEntity };
