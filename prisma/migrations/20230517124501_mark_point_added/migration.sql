/*
  Warnings:

  - Added the required column `updated_at` to the `ExamMark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamMark" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "point" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
