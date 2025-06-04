/*
  Warnings:

  - You are about to drop the `ForumTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ForumTags" DROP CONSTRAINT "ForumTags_forumId_fkey";

-- DropForeignKey
ALTER TABLE "ForumTags" DROP CONSTRAINT "ForumTags_tagId_fkey";

-- DropForeignKey
ALTER TABLE "ForumTags" DROP CONSTRAINT "ForumTags_userId_fkey";

-- DropTable
DROP TABLE "ForumTags";

-- DropTable
DROP TABLE "Tags";

-- CreateTable
CREATE TABLE "Tag" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumTag" (
    "id" VARCHAR(36) NOT NULL,
    "tagId" VARCHAR(36) NOT NULL,
    "forumId" VARCHAR(36) NOT NULL,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" VARCHAR(36),

    CONSTRAINT "ForumTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ForumTag" ADD CONSTRAINT "ForumTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumTag" ADD CONSTRAINT "ForumTag_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "Forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumTag" ADD CONSTRAINT "ForumTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
