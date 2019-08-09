import { gql } from "apollo-boost"

export const AddCourseMutation = gql`
  mutation addCourse(
    $name: String
    $slug: String
    $new_photo: Upload
    $base64: Boolean
    $promote: Boolean
    $start_point: Boolean
    $hidden: Boolean
    $status: CourseStatus
    $course_translations: [CourseTranslationCreateWithoutCourseInput!]
    $open_university_registration_links: [OpenUniversityRegistrationLinkCreateWithoutCourseInput!]
    $study_modules: [ID!]
    $order: Int
  ) {
    addCourse(
      name: $name
      slug: $slug
      new_photo: $new_photo
      base64: $base64
      promote: $promote
      start_point: $start_point
      hidden: $hidden
      status: $status
      course_translations: $course_translations
      open_university_registration_links: $open_university_registration_links
      study_modules: $study_modules
      order: $order
    ) {
      id
      slug
      name
      order
      photo {
        id
        name
        original
        original_mimetype
        compressed
        compressed_mimetype
        uncompressed
        uncompressed_mimetype
      }
      course_translations {
        id
        language
        name
        description
        link
      }
      open_university_registration_links {
        id
        course_code
        language
        link
      }
      study_modules {
        id
      }
    }
  }
`

export const UpdateCourseMutation = gql`
  mutation updateCourse(
    $id: ID
    $name: String
    $slug: String
    $photo: ID
    $new_photo: Upload
    $base64: Boolean
    $promote: Boolean
    $start_point: Boolean
    $hidden: Boolean
    $status: CourseStatus
    $new_slug: String
    $course_translations: [CourseTranslationWithIdInput!]
    $open_university_registration_links: [OpenUniversityRegistrationLinkWithIdInput!]
    $study_modules: [ID!]
    $order: Int
  ) {
    updateCourse(
      id: $id
      name: $name
      slug: $slug
      new_slug: $new_slug
      photo: $photo
      new_photo: $new_photo
      base64: $base64
      promote: $promote
      start_point: $start_point
      hidden: $hidden
      status: $status
      course_translations: $course_translations
      open_university_registration_links: $open_university_registration_links
      study_modules: $study_modules
      order: $order
    ) {
      id
      slug
      name
      order
      photo {
        id
        name
        original
        original_mimetype
        compressed
        compressed_mimetype
        uncompressed
        uncompressed_mimetype
      }
      course_translations {
        id
        language
        name
        description
        link
      }
      open_university_registration_links {
        id
        course_code
        language
        link
      }
      study_modules {
        id
      }
    }
  }
`

export const DeleteCourseMutation = gql`
  mutation deleteCourse($id: ID) {
    deleteCourse(id: $id) {
      id
      slug
    }
  }
`

export const CheckSlugQuery = gql`
  query checkSlug($slug: String) {
    course_exists(slug: $slug)
  }
`

export const AddImageMutation = gql`
  mutation addImage($file: Upload!, $base64: Boolean) {
    addImage(file: $file, base64: $base64) {
      id
      name
      original
      original_mimetype
      compressed
      compressed_mimetype
      uncompressed
      uncompressed_mimetype
      encoding
      default
    }
  }
`

export const DeleteImageMutation = gql`
  mutation deleteImage($id: UUID!) {
    deleteImage(id: $id)
  }
`