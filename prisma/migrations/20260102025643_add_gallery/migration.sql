-- CreateTable
CREATE TABLE "Galery" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "caption" TEXT NOT NULL,

    CONSTRAINT "Galery_pkey" PRIMARY KEY ("id")
);
