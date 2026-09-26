import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { Coffee, CoffeeListMatch, CoffeeUpdateData } from '../IronocTypes';
declare class CoffeeEntity extends IronocEntityBase<Coffee> {
    constructor(client: IronocSDK, entopts: any);
    make(this: CoffeeEntity): CoffeeEntity;
    list(this: any, reqmatch?: CoffeeListMatch, ctrl?: Control): Promise<CoffeeEntity[]>;
    update(this: any, reqdata?: CoffeeUpdateData, ctrl?: Control): Promise<CoffeeEntity>;
}
export { CoffeeEntity };
