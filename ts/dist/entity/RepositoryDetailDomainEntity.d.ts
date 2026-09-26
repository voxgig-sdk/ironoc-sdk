import { IronocEntityBase } from '../IronocEntityBase';
import type { IronocSDK } from '../IronocSDK';
import type { Control } from '../types';
import type { RepositoryDetailDomain, RepositoryDetailDomainLoadMatch, RepositoryDetailDomainListMatch } from '../IronocTypes';
declare class RepositoryDetailDomainEntity extends IronocEntityBase<RepositoryDetailDomain> {
    constructor(client: IronocSDK, entopts: any);
    make(this: RepositoryDetailDomainEntity): RepositoryDetailDomainEntity;
    load(this: any, reqmatch?: RepositoryDetailDomainLoadMatch, ctrl?: Control): Promise<RepositoryDetailDomainEntity>;
    list(this: any, reqmatch?: RepositoryDetailDomainListMatch, ctrl?: Control): Promise<RepositoryDetailDomainEntity[]>;
}
export { RepositoryDetailDomainEntity };
