-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('SUCCESS', 'PROCESSING', 'FAILED');

-- DropIndex
DROP INDEX "WishList_userId_key";

-- AlterTable
CREATE SEQUENCE wishlist_id_seq;
ALTER TABLE "WishList" ALTER COLUMN "id" SET DEFAULT nextval('wishlist_id_seq');
ALTER SEQUENCE wishlist_id_seq OWNED BY "WishList"."id";
