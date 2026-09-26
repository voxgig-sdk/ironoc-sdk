import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { CoffeeDomain, CoffeeDomainListMatch } from '../IronocTypes';
declare class CoffeeDomainEntity extends IronocEntityBase<CoffeeDomain> {
    constructor(client: IronocSDK, entopts: any);
    make(this: CoffeeDomainEntity): CoffeeDomainEntity;
    list(this: any, reqmatch?: CoffeeDomainListMatch, ctrl?: Control): Promise<CoffeeDomainEntity[]>;
}
export { CoffeeDomainEntity };
