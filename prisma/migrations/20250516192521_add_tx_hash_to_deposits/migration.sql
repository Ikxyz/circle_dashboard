/*
  Warnings:

  - Added the required column `txHash` to the `Deposit` table without a default value. This is not possible if the table is not empty.

*/
-- Step 1: Add the column as nullable first
ALTER TABLE "Deposit" ADD COLUMN "txHash" TEXT;

-- Step 2: Update existing records with a placeholder value
UPDATE "Deposit" SET "txHash" = 'legacy_deposit_pre_txhash' WHERE "txHash" IS NULL;

-- Step 3: Make the column NOT NULL
ALTER TABLE "Deposit" ALTER COLUMN "txHash" SET NOT NULL;
