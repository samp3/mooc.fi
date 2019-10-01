import { gql } from "apollo-boost"

export const AddStudyModuleMutation = gql`
  mutation addStudyModule(
    $slug: String!
    $name: String!
    $image: String
    $order: Int
    $study_module_translations: [StudyModuleTranslationCreateWithoutStudy_moduleInput!]
  ) {
    addStudyModule(
      slug: $slug
      name: $name
      image: $image
      order: $order
      study_module_translations: $study_module_translations
    ) {
      id
      slug
      name
      image
      order
      study_module_translations {
        id
        language
        name
        description
      }
    }
  }
`

export const UpdateStudyModuleMutation = gql`
  mutation updateStudyModule(
    $id: ID
    $slug: String!
    $new_slug: String
    $name: String!
    $image: String
    $order: Int
    $study_module_translations: [StudyModuleTranslationWithIdInput!]
  ) {
    updateStudyModule(
      id: $id
      slug: $slug
      new_slug: $new_slug
      name: $name
      image: $image
      order: $order
      study_module_translations: $study_module_translations
    ) {
      id
      slug
      name
      image
      order
      study_module_translations {
        id
        language
        name
        description
      }
    }
  }
`

export const DeleteStudyModuleMutation = gql`
  mutation deleteStudyModule($slug: String!) {
    deleteStudyModule(slug: $slug) {
      id
      slug
    }
  }
`