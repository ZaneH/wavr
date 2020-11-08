# Migration `20200831110409-add-transactions`

This migration has been generated by Zane Helton at 8/31/2020, 7:04:09 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Transaction" (
"id" SERIAL,
"amount" Decimal(65,30)   NOT NULL DEFAULT 0,
"buyerId" integer   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"productId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Transaction" ADD FOREIGN KEY ("buyerId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Transaction" ADD FOREIGN KEY ("productId")REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200831083959-drop-private..20200831110409-add-transactions
--- datamodel.dml
+++ datamodel.dml
@@ -3,28 +3,40 @@
 }
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 model User {
-  id            Int       @default(autoincrement()) @id
-  createdAt     DateTime  @default(now())
+  id            Int           @default(autoincrement()) @id
+  createdAt     DateTime      @default(now())
   displayName   String?
-  email         String    @unique
-  emailVerified Boolean   @default(false)
+  email         String        @unique
+  emailVerified Boolean       @default(false)
   password      String
   products      Product[]
-  updatedAt     DateTime  @updatedAt
-  username      String    @unique
+  updatedAt     DateTime      @updatedAt
+  username      String        @unique
+  Transaction   Transaction[]
 }
 model Product {
-  id          Int      @default(autoincrement()) @id
-  createdAt   DateTime @default(now())
+  id          Int           @default(autoincrement()) @id
+  createdAt   DateTime      @default(now())
   description String
   name        String
-  owner       User?    @relation(fields: [ownerId], references: [id])
+  owner       User?         @relation(fields: [ownerId], references: [id])
   ownerId     Int?
-  updatedAt   DateTime @updatedAt
+  updatedAt   DateTime      @updatedAt
+  Transaction Transaction[]
 }
+
+model Transaction {
+  id        Int      @default(autoincrement()) @id
+  amount    Float    @default(0)
+  buyer     User     @relation(fields: [buyerId], references: [id])
+  buyerId   Int
+  createdAt DateTime @default(now())
+  product   Product? @relation(fields: [productId], references: [id])
+  productId Int?
+}
```

