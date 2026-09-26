import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { PortfolioController, PortfolioControllerListMatch } from '../IronocTypes';
declare class PortfolioControllerEntity extends IronocEntityBase<PortfolioController> {
    constructor(client: IronocSDK, entopts: any);
    make(this: PortfolioControllerEntity): PortfolioControllerEntity;
    list(this: any, reqmatch?: PortfolioControllerListMatch, ctrl?: Control): Promise<PortfolioControllerEntity[]>;
}
export { PortfolioControllerEntity };
