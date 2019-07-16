/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CourseStatus, CourseTranslationWithIdInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCourse
// ====================================================

export interface updateCourse_updateCourse_photo {
  __typename: "Image";
  id: any;
  compressed: string | null;
  compressed_mimetype: string | null;
  uncompressed: string;
  uncompressed_mimetype: string;
}

export interface updateCourse_updateCourse_course_translations {
  __typename: "CourseTranslation";
  id: any;
  language: string;
  name: string;
  description: string;
  link: string;
}

export interface updateCourse_updateCourse {
  __typename: "Course";
  id: any;
  slug: string;
  photo: updateCourse_updateCourse_photo | null;
  course_translations: updateCourse_updateCourse_course_translations[] | null;
}

export interface updateCourse {
  updateCourse: updateCourse_updateCourse;
}

export interface updateCourseVariables {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
  photo?: string | null;
  promote?: boolean | null;
  start_point?: boolean | null;
  status?: CourseStatus | null;
  new_slug?: string | null;
  course_translations?: CourseTranslationWithIdInput[] | null;
}
