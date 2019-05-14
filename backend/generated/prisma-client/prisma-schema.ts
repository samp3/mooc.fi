// Code generated by Prisma (prisma@1.30.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCompletion {
  count: Int!
}

type AggregateCompletionRegistered {
  count: Int!
}

type AggregateCourse {
  count: Int!
}

type AggregateOpenUniversityCourse {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Completion {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User!
  course: Course!
}

type CompletionConnection {
  pageInfo: PageInfo!
  edges: [CompletionEdge]!
  aggregate: AggregateCompletion!
}

input CompletionCreateInput {
  user: UserCreateOneInput!
  course: CourseCreateOneInput!
}

type CompletionEdge {
  node: Completion!
  cursor: String!
}

enum CompletionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompletionPreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CompletionRegistered {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User!
  course: Course!
  organisation: String!
}

type CompletionRegisteredConnection {
  pageInfo: PageInfo!
  edges: [CompletionRegisteredEdge]!
  aggregate: AggregateCompletionRegistered!
}

input CompletionRegisteredCreateInput {
  user: UserCreateOneInput!
  course: CourseCreateOneInput!
  organisation: String!
}

type CompletionRegisteredEdge {
  node: CompletionRegistered!
  cursor: String!
}

enum CompletionRegisteredOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  organisation_ASC
  organisation_DESC
}

type CompletionRegisteredPreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  organisation: String!
}

type CompletionRegisteredSubscriptionPayload {
  mutation: MutationType!
  node: CompletionRegistered
  updatedFields: [String!]
  previousValues: CompletionRegisteredPreviousValues
}

input CompletionRegisteredSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompletionRegisteredWhereInput
  AND: [CompletionRegisteredSubscriptionWhereInput!]
  OR: [CompletionRegisteredSubscriptionWhereInput!]
  NOT: [CompletionRegisteredSubscriptionWhereInput!]
}

input CompletionRegisteredUpdateInput {
  user: UserUpdateOneRequiredInput
  course: CourseUpdateOneRequiredInput
  organisation: String
}

input CompletionRegisteredUpdateManyMutationInput {
  organisation: String
}

input CompletionRegisteredWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  course: CourseWhereInput
  organisation: String
  organisation_not: String
  organisation_in: [String!]
  organisation_not_in: [String!]
  organisation_lt: String
  organisation_lte: String
  organisation_gt: String
  organisation_gte: String
  organisation_contains: String
  organisation_not_contains: String
  organisation_starts_with: String
  organisation_not_starts_with: String
  organisation_ends_with: String
  organisation_not_ends_with: String
  AND: [CompletionRegisteredWhereInput!]
  OR: [CompletionRegisteredWhereInput!]
  NOT: [CompletionRegisteredWhereInput!]
}

input CompletionRegisteredWhereUniqueInput {
  id: UUID
}

type CompletionSubscriptionPayload {
  mutation: MutationType!
  node: Completion
  updatedFields: [String!]
  previousValues: CompletionPreviousValues
}

input CompletionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompletionWhereInput
  AND: [CompletionSubscriptionWhereInput!]
  OR: [CompletionSubscriptionWhereInput!]
  NOT: [CompletionSubscriptionWhereInput!]
}

input CompletionUpdateInput {
  user: UserUpdateOneRequiredInput
  course: CourseUpdateOneRequiredInput
}

input CompletionWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  course: CourseWhereInput
  AND: [CompletionWhereInput!]
  OR: [CompletionWhereInput!]
  NOT: [CompletionWhereInput!]
}

input CompletionWhereUniqueInput {
  id: UUID
}

type Course {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  slug: String!
  open_university_courses(where: OpenUniversityCourseWhereInput, orderBy: OpenUniversityCourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OpenUniversityCourse!]
}

type CourseConnection {
  pageInfo: PageInfo!
  edges: [CourseEdge]!
  aggregate: AggregateCourse!
}

input CourseCreateInput {
  name: String!
  slug: String!
  open_university_courses: OpenUniversityCourseCreateManyWithoutCourseInput
}

input CourseCreateOneInput {
  create: CourseCreateInput
  connect: CourseWhereUniqueInput
}

input CourseCreateOneWithoutOpen_university_coursesInput {
  create: CourseCreateWithoutOpen_university_coursesInput
  connect: CourseWhereUniqueInput
}

input CourseCreateWithoutOpen_university_coursesInput {
  name: String!
  slug: String!
}

type CourseEdge {
  node: Course!
  cursor: String!
}

enum CourseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
}

type CoursePreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  slug: String!
}

type CourseSubscriptionPayload {
  mutation: MutationType!
  node: Course
  updatedFields: [String!]
  previousValues: CoursePreviousValues
}

input CourseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CourseWhereInput
  AND: [CourseSubscriptionWhereInput!]
  OR: [CourseSubscriptionWhereInput!]
  NOT: [CourseSubscriptionWhereInput!]
}

input CourseUpdateDataInput {
  name: String
  slug: String
  open_university_courses: OpenUniversityCourseUpdateManyWithoutCourseInput
}

input CourseUpdateInput {
  name: String
  slug: String
  open_university_courses: OpenUniversityCourseUpdateManyWithoutCourseInput
}

input CourseUpdateManyMutationInput {
  name: String
  slug: String
}

input CourseUpdateOneRequiredInput {
  create: CourseCreateInput
  update: CourseUpdateDataInput
  upsert: CourseUpsertNestedInput
  connect: CourseWhereUniqueInput
}

input CourseUpdateOneRequiredWithoutOpen_university_coursesInput {
  create: CourseCreateWithoutOpen_university_coursesInput
  update: CourseUpdateWithoutOpen_university_coursesDataInput
  upsert: CourseUpsertWithoutOpen_university_coursesInput
  connect: CourseWhereUniqueInput
}

input CourseUpdateWithoutOpen_university_coursesDataInput {
  name: String
  slug: String
}

input CourseUpsertNestedInput {
  update: CourseUpdateDataInput!
  create: CourseCreateInput!
}

input CourseUpsertWithoutOpen_university_coursesInput {
  update: CourseUpdateWithoutOpen_university_coursesDataInput!
  create: CourseCreateWithoutOpen_university_coursesInput!
}

input CourseWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  open_university_courses_every: OpenUniversityCourseWhereInput
  open_university_courses_some: OpenUniversityCourseWhereInput
  open_university_courses_none: OpenUniversityCourseWhereInput
  AND: [CourseWhereInput!]
  OR: [CourseWhereInput!]
  NOT: [CourseWhereInput!]
}

input CourseWhereUniqueInput {
  id: UUID
  slug: String
}

scalar DateTime

scalar Long

type Mutation {
  createCompletion(data: CompletionCreateInput!): Completion!
  updateCompletion(data: CompletionUpdateInput!, where: CompletionWhereUniqueInput!): Completion
  upsertCompletion(where: CompletionWhereUniqueInput!, create: CompletionCreateInput!, update: CompletionUpdateInput!): Completion!
  deleteCompletion(where: CompletionWhereUniqueInput!): Completion
  deleteManyCompletions(where: CompletionWhereInput): BatchPayload!
  createCompletionRegistered(data: CompletionRegisteredCreateInput!): CompletionRegistered!
  updateCompletionRegistered(data: CompletionRegisteredUpdateInput!, where: CompletionRegisteredWhereUniqueInput!): CompletionRegistered
  updateManyCompletionRegistereds(data: CompletionRegisteredUpdateManyMutationInput!, where: CompletionRegisteredWhereInput): BatchPayload!
  upsertCompletionRegistered(where: CompletionRegisteredWhereUniqueInput!, create: CompletionRegisteredCreateInput!, update: CompletionRegisteredUpdateInput!): CompletionRegistered!
  deleteCompletionRegistered(where: CompletionRegisteredWhereUniqueInput!): CompletionRegistered
  deleteManyCompletionRegistereds(where: CompletionRegisteredWhereInput): BatchPayload!
  createCourse(data: CourseCreateInput!): Course!
  updateCourse(data: CourseUpdateInput!, where: CourseWhereUniqueInput!): Course
  updateManyCourses(data: CourseUpdateManyMutationInput!, where: CourseWhereInput): BatchPayload!
  upsertCourse(where: CourseWhereUniqueInput!, create: CourseCreateInput!, update: CourseUpdateInput!): Course!
  deleteCourse(where: CourseWhereUniqueInput!): Course
  deleteManyCourses(where: CourseWhereInput): BatchPayload!
  createOpenUniversityCourse(data: OpenUniversityCourseCreateInput!): OpenUniversityCourse!
  updateOpenUniversityCourse(data: OpenUniversityCourseUpdateInput!, where: OpenUniversityCourseWhereUniqueInput!): OpenUniversityCourse
  updateManyOpenUniversityCourses(data: OpenUniversityCourseUpdateManyMutationInput!, where: OpenUniversityCourseWhereInput): BatchPayload!
  upsertOpenUniversityCourse(where: OpenUniversityCourseWhereUniqueInput!, create: OpenUniversityCourseCreateInput!, update: OpenUniversityCourseUpdateInput!): OpenUniversityCourse!
  deleteOpenUniversityCourse(where: OpenUniversityCourseWhereUniqueInput!): OpenUniversityCourse
  deleteManyOpenUniversityCourses(where: OpenUniversityCourseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type OpenUniversityCourse {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  course_code: String!
  course: Course!
}

type OpenUniversityCourseConnection {
  pageInfo: PageInfo!
  edges: [OpenUniversityCourseEdge]!
  aggregate: AggregateOpenUniversityCourse!
}

input OpenUniversityCourseCreateInput {
  course_code: String!
  course: CourseCreateOneWithoutOpen_university_coursesInput!
}

input OpenUniversityCourseCreateManyWithoutCourseInput {
  create: [OpenUniversityCourseCreateWithoutCourseInput!]
  connect: [OpenUniversityCourseWhereUniqueInput!]
}

input OpenUniversityCourseCreateWithoutCourseInput {
  course_code: String!
}

type OpenUniversityCourseEdge {
  node: OpenUniversityCourse!
  cursor: String!
}

enum OpenUniversityCourseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  course_code_ASC
  course_code_DESC
}

type OpenUniversityCoursePreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  course_code: String!
}

input OpenUniversityCourseScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  course_code: String
  course_code_not: String
  course_code_in: [String!]
  course_code_not_in: [String!]
  course_code_lt: String
  course_code_lte: String
  course_code_gt: String
  course_code_gte: String
  course_code_contains: String
  course_code_not_contains: String
  course_code_starts_with: String
  course_code_not_starts_with: String
  course_code_ends_with: String
  course_code_not_ends_with: String
  AND: [OpenUniversityCourseScalarWhereInput!]
  OR: [OpenUniversityCourseScalarWhereInput!]
  NOT: [OpenUniversityCourseScalarWhereInput!]
}

type OpenUniversityCourseSubscriptionPayload {
  mutation: MutationType!
  node: OpenUniversityCourse
  updatedFields: [String!]
  previousValues: OpenUniversityCoursePreviousValues
}

input OpenUniversityCourseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OpenUniversityCourseWhereInput
  AND: [OpenUniversityCourseSubscriptionWhereInput!]
  OR: [OpenUniversityCourseSubscriptionWhereInput!]
  NOT: [OpenUniversityCourseSubscriptionWhereInput!]
}

input OpenUniversityCourseUpdateInput {
  course_code: String
  course: CourseUpdateOneRequiredWithoutOpen_university_coursesInput
}

input OpenUniversityCourseUpdateManyDataInput {
  course_code: String
}

input OpenUniversityCourseUpdateManyMutationInput {
  course_code: String
}

input OpenUniversityCourseUpdateManyWithoutCourseInput {
  create: [OpenUniversityCourseCreateWithoutCourseInput!]
  delete: [OpenUniversityCourseWhereUniqueInput!]
  connect: [OpenUniversityCourseWhereUniqueInput!]
  set: [OpenUniversityCourseWhereUniqueInput!]
  disconnect: [OpenUniversityCourseWhereUniqueInput!]
  update: [OpenUniversityCourseUpdateWithWhereUniqueWithoutCourseInput!]
  upsert: [OpenUniversityCourseUpsertWithWhereUniqueWithoutCourseInput!]
  deleteMany: [OpenUniversityCourseScalarWhereInput!]
  updateMany: [OpenUniversityCourseUpdateManyWithWhereNestedInput!]
}

input OpenUniversityCourseUpdateManyWithWhereNestedInput {
  where: OpenUniversityCourseScalarWhereInput!
  data: OpenUniversityCourseUpdateManyDataInput!
}

input OpenUniversityCourseUpdateWithoutCourseDataInput {
  course_code: String
}

input OpenUniversityCourseUpdateWithWhereUniqueWithoutCourseInput {
  where: OpenUniversityCourseWhereUniqueInput!
  data: OpenUniversityCourseUpdateWithoutCourseDataInput!
}

input OpenUniversityCourseUpsertWithWhereUniqueWithoutCourseInput {
  where: OpenUniversityCourseWhereUniqueInput!
  update: OpenUniversityCourseUpdateWithoutCourseDataInput!
  create: OpenUniversityCourseCreateWithoutCourseInput!
}

input OpenUniversityCourseWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  course_code: String
  course_code_not: String
  course_code_in: [String!]
  course_code_not_in: [String!]
  course_code_lt: String
  course_code_lte: String
  course_code_gt: String
  course_code_gte: String
  course_code_contains: String
  course_code_not_contains: String
  course_code_starts_with: String
  course_code_not_starts_with: String
  course_code_ends_with: String
  course_code_not_ends_with: String
  course: CourseWhereInput
  AND: [OpenUniversityCourseWhereInput!]
  OR: [OpenUniversityCourseWhereInput!]
  NOT: [OpenUniversityCourseWhereInput!]
}

input OpenUniversityCourseWhereUniqueInput {
  id: UUID
  course_code: String
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  completion(where: CompletionWhereUniqueInput!): Completion
  completions(where: CompletionWhereInput, orderBy: CompletionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Completion]!
  completionsConnection(where: CompletionWhereInput, orderBy: CompletionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompletionConnection!
  completionRegistered(where: CompletionRegisteredWhereUniqueInput!): CompletionRegistered
  completionRegistereds(where: CompletionRegisteredWhereInput, orderBy: CompletionRegisteredOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CompletionRegistered]!
  completionRegisteredsConnection(where: CompletionRegisteredWhereInput, orderBy: CompletionRegisteredOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompletionRegisteredConnection!
  course(where: CourseWhereUniqueInput!): Course
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course]!
  coursesConnection(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourseConnection!
  openUniversityCourse(where: OpenUniversityCourseWhereUniqueInput!): OpenUniversityCourse
  openUniversityCourses(where: OpenUniversityCourseWhereInput, orderBy: OpenUniversityCourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OpenUniversityCourse]!
  openUniversityCoursesConnection(where: OpenUniversityCourseWhereInput, orderBy: OpenUniversityCourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OpenUniversityCourseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  completion(where: CompletionSubscriptionWhereInput): CompletionSubscriptionPayload
  completionRegistered(where: CompletionRegisteredSubscriptionWhereInput): CompletionRegisteredSubscriptionPayload
  course(where: CourseSubscriptionWhereInput): CourseSubscriptionPayload
  openUniversityCourse(where: OpenUniversityCourseSubscriptionWhereInput): OpenUniversityCourseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  upstream_id: Int!
  first_name: String
  last_name: String
  email: String!
  administrator: Boolean!
  completed_enough: Boolean!
  real_student_number: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  upstream_id: Int!
  first_name: String
  last_name: String
  email: String!
  administrator: Boolean!
  completed_enough: Boolean
  real_student_number: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  upstream_id_ASC
  upstream_id_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  email_ASC
  email_DESC
  administrator_ASC
  administrator_DESC
  completed_enough_ASC
  completed_enough_DESC
  real_student_number_ASC
  real_student_number_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  upstream_id: Int!
  first_name: String
  last_name: String
  email: String!
  administrator: Boolean!
  completed_enough: Boolean!
  real_student_number: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  upstream_id: Int
  first_name: String
  last_name: String
  email: String
  administrator: Boolean
  completed_enough: Boolean
  real_student_number: String
}

input UserUpdateInput {
  upstream_id: Int
  first_name: String
  last_name: String
  email: String
  administrator: Boolean
  completed_enough: Boolean
  real_student_number: String
}

input UserUpdateManyMutationInput {
  upstream_id: Int
  first_name: String
  last_name: String
  email: String
  administrator: Boolean
  completed_enough: Boolean
  real_student_number: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  upstream_id: Int
  upstream_id_not: Int
  upstream_id_in: [Int!]
  upstream_id_not_in: [Int!]
  upstream_id_lt: Int
  upstream_id_lte: Int
  upstream_id_gt: Int
  upstream_id_gte: Int
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  administrator: Boolean
  administrator_not: Boolean
  completed_enough: Boolean
  completed_enough_not: Boolean
  real_student_number: String
  real_student_number_not: String
  real_student_number_in: [String!]
  real_student_number_not_in: [String!]
  real_student_number_lt: String
  real_student_number_lte: String
  real_student_number_gt: String
  real_student_number_gte: String
  real_student_number_contains: String
  real_student_number_not_contains: String
  real_student_number_starts_with: String
  real_student_number_not_starts_with: String
  real_student_number_ends_with: String
  real_student_number_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  upstream_id: Int
}

scalar UUID
`