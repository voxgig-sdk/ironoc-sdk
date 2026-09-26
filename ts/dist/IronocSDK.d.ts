import { CoffeeEntity } from './entity/CoffeeEntity';
import { CoffeeDomainEntity } from './entity/CoffeeDomainEntity';
import { DonateRestControllerEntity } from './entity/DonateRestControllerEntity';
import { PortfolioControllerEntity } from './entity/PortfolioControllerEntity';
import { RepositoryDetailDomainEntity } from './entity/RepositoryDetailDomainEntity';
import { RepositoryIssueDomainEntity } from './entity/RepositoryIssueDomainEntity';
import { VersionEntity } from './entity/VersionEntity';
export type * from './IronocTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { IronocEntityBase } from './IronocEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class IronocSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Coffee(entopts?: Record<string, any>): CoffeeEntity;
    CoffeeDomain(entopts?: Record<string, any>): CoffeeDomainEntity;
    DonateRestController(entopts?: Record<string, any>): DonateRestControllerEntity;
    PortfolioController(entopts?: Record<string, any>): PortfolioControllerEntity;
    RepositoryDetailDomain(entopts?: Record<string, any>): RepositoryDetailDomainEntity;
    RepositoryIssueDomain(entopts?: Record<string, any>): RepositoryIssueDomainEntity;
    Version(entopts?: Record<string, any>): VersionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): IronocSDK;
    tester(testopts?: any, sdkopts?: any): IronocSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof IronocSDK;
export { stdutil, config, BaseFeature, IronocEntityBase, IronocSDK, SDK, };
