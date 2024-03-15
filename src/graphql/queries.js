/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBalancedProgram = /* GraphQL */ `
  query GetBalancedProgram($id: ID!) {
    getBalancedProgram(id: $id) {
      id
      progStartDate
      progLifts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBalancedPrograms = /* GraphQL */ `
  query ListBalancedPrograms(
    $filter: ModelBalancedProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalancedPrograms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        progStartDate
        progLifts
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReferenceLifts = /* GraphQL */ `
  query GetReferenceLifts($id: ID!) {
    getReferenceLifts(id: $id) {
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
export const listReferenceLifts = /* GraphQL */ `
  query ListReferenceLifts(
    $filter: ModelReferenceLiftsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferenceLifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        liftId
        liftName
        liftLoad
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
