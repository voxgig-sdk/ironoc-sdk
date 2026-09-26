import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { RepositoryIssueDomain, RepositoryIssueDomainListMatch } from '../IronocTypes';
declare class RepositoryIssueDomainEntity extends IronocEntityBase<RepositoryIssueDomain> {
    constructor(client: IronocSDK, entopts: any);
    make(this: RepositoryIssueDomainEntity): RepositoryIssueDomainEntity;
    list(this: any, reqmatch?: RepositoryIssueDomainListMatch, ctrl?: Control): Promise<RepositoryIssueDomainEntity[]>;
}
export { RepositoryIssueDomainEntity };
