# Migration `20200902145523-multiple-products-in-transaction`

This migration has been generated by Zane Helton at 9/2/2020, 10:55:23 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Transaction" DROP CONSTRAINT "Transaction_productId_fkey"

ALTER TABLE "public"."Transaction" DROP COLUMN "productId"

CREATE TABLE "public"."_ProductToTransaction" (
"A" text   NOT NULL ,
"B" text   NOT NULL 
)

CREATE UNIQUE INDEX "_ProductToTransaction_AB_unique" ON "public"."_ProductToTransaction"("A", "B")

CREATE INDEX "_ProductToTransaction_B_index" ON "public"."_ProductToTransaction"("B")

ALTER TABLE "public"."_ProductToTransaction" ADD FOREIGN KEY ("A")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_ProductToTransaction" ADD FOREIGN KEY ("B")REFERENCES "public"."Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200901190548-add-image..20200902145523-multiple-products-in-transaction
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 model User {
   id            String        @default(uuid()) @id
@@ -41,16 +41,15 @@
   images       Image[]
 }
 model Transaction {
-  id        String   @default(uuid()) @id
-  amount    Float    @default(0)
-  buyer     User     @relation(fields: [buyerId], references: [id])
+  id        String    @default(uuid()) @id
+  amount    Float     @default(0)
+  buyer     User      @relation(fields: [buyerId], references: [id])
   buyerId   String
-  createdAt DateTime @default(now())
-  product   Product? @relation(fields: [productId], references: [id])
-  productId String?
-  updatedAt DateTime @updatedAt
+  createdAt DateTime  @default(now())
+  products  Product[]
+  updatedAt DateTime  @updatedAt
 }
 model Tag {
   id        String    @default(uuid()) @id
@@ -75,9 +74,9 @@
 model Image {
   id        String   @default(uuid()) @id
   createdAt DateTime @default(now())
+  product   Product? @relation(fields: [productId], references: [id])
+  productId String?
   secret    String   @unique
   url       String   @unique
-  product   Product? @relation(fields: [productId], references: [id])
-  productId String?
 }
```


