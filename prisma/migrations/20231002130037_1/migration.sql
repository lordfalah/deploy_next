-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "description" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);
