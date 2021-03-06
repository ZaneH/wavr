# Migration `20200904225505-isarchived-and-file`

This migration has been generated by Zane Helton at 9/4/2020, 6:55:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Image" ADD COLUMN "isArchived" boolean   NOT NULL DEFAULT false

ALTER TABLE "public"."Product" ADD COLUMN "isArchived" boolean   NOT NULL DEFAULT false

ALTER TABLE "public"."Review" ADD COLUMN "isArchived" boolean   NOT NULL DEFAULT false

CREATE TABLE "public"."File" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"productId" text   ,
"secret" text   NOT NULL ,
"url" text   NOT NULL ,
"isArchived" boolean   NOT NULL DEFAULT false,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "File.secret_unique" ON "public"."File"("secret")

CREATE UNIQUE INDEX "File.url_unique" ON "public"."File"("url")

CREATE UNIQUE INDEX "File_productId_unique" ON "public"."File"("productId")

ALTER TABLE "public"."File" ADD FOREIGN KEY ("productId")REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200904192705-unique-license-key..20200904225505-isarchived-and-file
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
@@ -38,8 +38,10 @@
   tags         Tag[]
   transactions Transaction[]
   updatedAt    DateTime      @updatedAt
   images       Image[]
+  file         File
+  isArchived   Boolean       @default(false)
 }
 model Transaction {
   id              String    @default(uuid()) @id
@@ -66,23 +68,35 @@
   products  Product[]
 }
 model Review {
-  id        String   @default(uuid()) @id
-  author    User     @relation(fields: [authorId], references: [id])
-  authorId  String
-  createdAt DateTime @default(now())
-  message   String
-  product   Product  @relation(fields: [productId], references: [id])
-  productId String
-  stars     Int
-  updatedAt DateTime @updatedAt
+  id         String   @default(uuid()) @id
+  author     User     @relation(fields: [authorId], references: [id])
+  authorId   String
+  createdAt  DateTime @default(now())
+  message    String
+  product    Product  @relation(fields: [productId], references: [id])
+  productId  String
+  stars      Int
+  updatedAt  DateTime @updatedAt
+  isArchived Boolean  @default(false)
 }
 model Image {
-  id        String   @default(uuid()) @id
-  createdAt DateTime @default(now())
-  product   Product? @relation(fields: [productId], references: [id])
-  productId String?
-  secret    String   @unique
-  url       String   @unique
+  id         String   @default(uuid()) @id
+  createdAt  DateTime @default(now())
+  product    Product? @relation(fields: [productId], references: [id])
+  productId  String?
+  secret     String   @unique
+  url        String   @unique
+  isArchived Boolean  @default(false)
 }
+
+model File {
+  id         String   @default(uuid()) @id
+  createdAt  DateTime @default(now())
+  product    Product? @relation(fields: [productId], references: [id])
+  productId  String?
+  secret     String   @unique
+  url        String   @unique
+  isArchived Boolean  @default(false)
+}
```


