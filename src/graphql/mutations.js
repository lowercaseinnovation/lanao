/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDataset = /* GraphQL */ `
  mutation CreateDataset(
    $input: CreateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    createDataset(input: $input, condition: $condition) {
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
export const updateDataset = /* GraphQL */ `
  mutation UpdateDataset(
    $input: UpdateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    updateDataset(input: $input, condition: $condition) {
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
export const deleteDataset = /* GraphQL */ `
  mutation DeleteDataset(
    $input: DeleteDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    deleteDataset(input: $input, condition: $condition) {
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
