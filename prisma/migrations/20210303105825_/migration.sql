-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
