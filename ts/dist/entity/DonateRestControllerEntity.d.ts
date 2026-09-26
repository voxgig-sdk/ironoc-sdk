import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { DonateRestController, DonateRestControllerListMatch } from '../IronocTypes';
declare class DonateRestControllerEntity extends IronocEntityBase<DonateRestController> {
    constructor(client: IronocSDK, entopts: any);
    make(this: DonateRestControllerEntity): DonateRestControllerEntity;
    list(this: any, reqmatch?: DonateRestControllerListMatch, ctrl?: Control): Promise<DonateRestControllerEntity[]>;
}
export { DonateRestControllerEntity };
