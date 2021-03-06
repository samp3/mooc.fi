import { Prisma, Course, User } from "../../generated/prisma-client"
import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType"
import { arg, idArg } from "nexus/dist"
import checkAccess from "../../accessControl"

const addUserCourseServiceProgress = async (
  t: PrismaObjectDefinitionBlock<"Mutation">,
) => {
  t.field("addUserCourseServiceProgress", {
    type: "UserCourseServiceProgress",
    args: {
      progress: arg({ type: "PointsByGroup", required: true }),
      service_id: idArg({ required: true }),
      user_course_progress_id: idArg({ required: true }),
    },
    resolve: async (_, args, ctx) => {
      checkAccess(ctx)
      const { service_id, progress, user_course_progress_id } = args
      const prisma: Prisma = ctx.prisma

      const course: Course = await prisma
        .userCourseProgress({ id: user_course_progress_id })
        .course()
      const user: User = await prisma
        .userCourseProgress({ id: user_course_progress_id })
        .user()

      return prisma.createUserCourseServiceProgress({
        course: { connect: { id: course.id } },
        progress: progress,
        service: { connect: { id: service_id } },
        user: { connect: { id: user.id } },
        user_course_progress: { connect: { id: user_course_progress_id } },
      })
    },
  })
}

const addUserCourseServiceProgressMutations = (
  t: PrismaObjectDefinitionBlock<"Mutation">,
) => {
  addUserCourseServiceProgress(t)
}

export default addUserCourseServiceProgressMutations
