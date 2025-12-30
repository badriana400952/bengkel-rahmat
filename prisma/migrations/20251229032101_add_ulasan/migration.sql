-- CreateTable
CREATE TABLE "Ulasan" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nama" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,
    "kendaraan" TEXT NOT NULL,

    CONSTRAINT "Ulasan_pkey" PRIMARY KEY ("id")
);
