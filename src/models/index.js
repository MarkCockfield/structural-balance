// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BalancedProgram, ReferenceLifts } = initSchema(schema);

export {
  BalancedProgram,
  ReferenceLifts
};