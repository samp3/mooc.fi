/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RegisterCompletionUserOverView
// ====================================================

export interface RegisterCompletionUserOverView_currentUser_completions_course {
  __typename: "Course"
  id: any
  slug: string
  name: string
  ects: string | null
}

export interface RegisterCompletionUserOverView_currentUser_completions_completions_registered_organization {
  __typename: "Organization"
  slug: string
}

export interface RegisterCompletionUserOverView_currentUser_completions_completions_registered {
  __typename: "CompletionRegistered"
  id: any
  created_at: any | null
  organization: RegisterCompletionUserOverView_currentUser_completions_completions_registered_organization | null
}

export interface RegisterCompletionUserOverView_currentUser_completions {
  __typename: "Completion"
  id: any
  email: string
  completion_language: string | null
  completion_link: string | null
  student_number: string | null
  created_at: any | null
  course: RegisterCompletionUserOverView_currentUser_completions_course
  completions_registered:
    | RegisterCompletionUserOverView_currentUser_completions_completions_registered[]
    | null
}

export interface RegisterCompletionUserOverView_currentUser {
  __typename: "User"
  id: any
  upstream_id: number
  first_name: string | null
  last_name: string | null
  completions: RegisterCompletionUserOverView_currentUser_completions[]
}

export interface RegisterCompletionUserOverView {
  currentUser: RegisterCompletionUserOverView_currentUser | null
}
