import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBalancedProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BalancedProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly progStartDate: string;
  readonly progLifts: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBalancedProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BalancedProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly progStartDate: string;
  readonly progLifts: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BalancedProgram = LazyLoading extends LazyLoadingDisabled ? EagerBalancedProgram : LazyBalancedProgram

export declare const BalancedProgram: (new (init: ModelInit<BalancedProgram>) => BalancedProgram) & {
  copyOf(source: BalancedProgram, mutator: (draft: MutableModel<BalancedProgram>) => MutableModel<BalancedProgram> | void): BalancedProgram;
}

type EagerReferenceLifts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReferenceLifts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liftId: number;
  readonly liftName: string;
  readonly liftLoad: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReferenceLifts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReferenceLifts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liftId: number;
  readonly liftName: string;
  readonly liftLoad: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReferenceLifts = LazyLoading extends LazyLoadingDisabled ? EagerReferenceLifts : LazyReferenceLifts

export declare const ReferenceLifts: (new (init: ModelInit<ReferenceLifts>) => ReferenceLifts) & {
  copyOf(source: ReferenceLifts, mutator: (draft: MutableModel<ReferenceLifts>) => MutableModel<ReferenceLifts> | void): ReferenceLifts;
}