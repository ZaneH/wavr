# Migration `20200905150721-different-file-relation`

This migration has been generated by Zane Helton at 9/5/2020, 11:07:21 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."File_productId_unique"

ALTER TABLE "public"."File" DROP CONSTRAINT "File_productId_fkey"

ALTER TABLE "public"."File" DROP COLUMN "productId"

ALTER TABLE "public"."Product" ADD COLUMN "fileId" text   

CREATE UNIQUE INDEX "Product_fileId_unique" ON "public"."Product"("fileId")

ALTER TABLE "public"."Product" ADD FOREIGN KEY ("fileId")REFERENCES "public"."File"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200905150229-optional-file..20200905150721-different-file-relation
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
@@ -39,9 +39,10 @@
   transactions Transaction[]
   updatedAt    DateTime      @updatedAt
   images       Image[]
   isArchived   Boolean       @default(false)
-  file         File?
+  file         File?         @relation(fields: [fileId], references: [id])
+  fileId       String?
 }
 model Transaction {
   id              String    @default(uuid()) @id
@@ -95,9 +96,8 @@
   id         String   @default(uuid()) @id
   createdAt  DateTime @default(now())
   isArchived Boolean  @default(false)
   name       String
-  product    Product? @relation(fields: [productId], references: [id])
-  productId  String?
   secret     String   @unique
   url        String   @unique
+  Product    Product
 }
```


