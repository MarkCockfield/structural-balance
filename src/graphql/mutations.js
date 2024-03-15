/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBalancedProgram = /* GraphQL */ `
  mutation CreateBalancedProgram(
    $input: CreateBalancedProgramInput!
    $condition: ModelBalancedProgramConditionInput
  ) {
    createBalancedProgram(input: $input, condition: $condition) {
      id
      progStartDate
      progLifts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBalancedProgram = /* GraphQL */ `
  mutation UpdateBalancedProgram(
    $input: UpdateBalancedProgramInput!
    $condition: ModelBalancedProgramConditionInput
  ) {
    updateBalancedProgram(input: $input, condition: $condition) {
      id
      progStartDate
      progLifts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBalancedProgram = /* GraphQL */ `
  mutation DeleteBalancedProgram(
    $input: DeleteBalancedProgramInput!
    $condition: ModelBalancedProgramConditionInput
  ) {
    deleteBalancedProgram(input: $input, condition: $condition) {
      id
      progStartDate
      progLifts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReferenceLifts = /* GraphQL */ `
  mutation CreateReferenceLifts(
    $input: CreateReferenceLiftsInput!
    $condition: ModelReferenceLiftsConditionInput
  ) {
    createReferenceLifts(input: $input, condition: $condition) {
      id
      liftId
      liftName
      liftLoad
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReferenceLifts = /* GraphQL */ `
  mutation UpdateReferenceLifts(
    $input: UpdateReferenceLiftsInput!
    $condition: ModelReferenceLiftsConditionInput
  ) {
    updateReferenceLifts(input: $input, condition: $condition) {
      id
      liftId
      liftName
      liftLoad
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReferenceLifts = /* GraphQL */ `
  mutation DeleteReferenceLifts(
    $input: DeleteReferenceLiftsInput!
    $condition: ModelReferenceLiftsConditionInput
  ) {
    deleteReferenceLifts(input: $input, condition: $condition) {
      id
      liftId
      liftName
      liftLoad
      createdAt
      updatedAt
      __typename
    }
  }
`;
