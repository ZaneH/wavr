# Migration `20200901105703-add-message-to-review`

This migration has been generated by Zane Helton at 9/1/2020, 6:57:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Review" ADD COLUMN "message" text   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200901102238-add-updatedat..20200901105703-add-message-to-review
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
   id            Int           @default(autoincrement()) @id
@@ -21,10 +21,10 @@
   updatedAt     DateTime      @updatedAt
   username      String        @unique
   // email preferences
-  emailOnSale  Boolean  @default(true)
-  emailUpdates Boolean  @default(true)
+  emailOnSale  Boolean @default(true)
+  emailUpdates Boolean @default(true)
 }
 model Product {
   id           Int           @default(autoincrement()) @id
@@ -64,8 +64,9 @@
   id        Int      @default(autoincrement()) @id
   author    User     @relation(fields: [authorId], references: [id])
   authorId  Int
   createdAt DateTime @default(now())
+  message   String
   product   Product  @relation(fields: [productId], references: [id])
   productId Int
   stars     Int
   updatedAt DateTime @updatedAt
```


