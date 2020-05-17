/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDataset = /* GraphQL */ `
  query GetDataset($id: ID!) {
    getDataset(id: $id) {
      id
      name
      description
      source
      originalLink
      endpoint
      uploaded
      notes
    }
  }
`;
export const listDatasets = /* GraphQL */ `
  query ListDatasets(
    $filter: ModelDatasetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        source
        originalLink
        endpoint
        uploaded
        notes
      }
      nextToken
    }
  }
`;
