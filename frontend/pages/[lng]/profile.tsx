import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { ProfileUserOverView as UserOverViewData } from "/static/types/generated/ProfileUserOverView"
import Spinner from "/components/Spinner"
import ErrorMessage from "/components/ErrorMessage"
import ProfilePageHeader from "/components/Profile/ProfilePageHeader"
import StudentDataDisplay from "/components/Profile/StudentDataDisplay"
import Container from "/components/Container"
import withSignedIn from "/lib/with-signed-in"

export const UserOverViewQuery = gql`
  query ProfileUserOverView {
    currentUser {
      id
      upstream_id
      first_name
      last_name
      student_number
      email
      completions {
        id
        completion_language
        student_number
        created_at
        course {
          id
          slug
          name
          photo {
            uncompressed
          }
          has_certificate
        }
        completions_registered {
          id
          created_at
          organization {
            slug
          }
        }
      }
    }
  }
`

function Profile() {
  const { data, error, loading } = useQuery<UserOverViewData>(UserOverViewQuery)

  if (error) {
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }

  const first_name = data?.currentUser?.first_name || "No first name"
  const last_name = data?.currentUser?.last_name || "No last name"
  const email = data?.currentUser?.email || "no email"
  const studentNumber = data?.currentUser?.student_number || "no student number"
  const completions = data?.currentUser?.completions ?? []

  return (
    <>
      <ProfilePageHeader
        first_name={first_name}
        last_name={last_name}
        email={email}
        student_number={studentNumber}
      />
      <Container style={{ maxWidth: 900 }}>
        <StudentDataDisplay completions={completions} />
      </Container>
    </>
  )
}

export default withSignedIn(Profile)
