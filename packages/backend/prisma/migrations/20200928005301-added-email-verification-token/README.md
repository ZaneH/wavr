# Migration `20200928005301-added-email-verification-token`

This migration has been generated by Zane Helton at 9/27/2020, 8:53:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "emailVerifyToken" text   

CREATE UNIQUE INDEX "User.emailVerifyToken_unique" ON "public"."User"("emailVerifyToken")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200926235352-percent-off-required..20200928005301-added-email-verification-token
--- datamodel.dml
+++ datamodel.dml
@@ -3,27 +3,28 @@
 }
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 model User {
-  id            String        @default(uuid()) @id
-  adTokens      Int           @default(0)
-  avatarURL     String?
-  createdAt     DateTime      @default(now())
-  createdTags   Tag[]
-  displayName   String?
-  email         String        @unique
-  emailVerified Boolean       @default(false)
-  password      String
-  products      Product[]
-  promoCodes    PromoCode[]
-  reviews       Review[]
-  transactions  Transaction[]
-  updatedAt     DateTime      @updatedAt
-  username      String        @unique
+  id               String        @default(uuid()) @id
+  adTokens         Int           @default(0)
+  avatarURL        String?
+  createdAt        DateTime      @default(now())
+  createdTags      Tag[]
+  displayName      String?
+  email            String        @unique
+  emailVerified    Boolean       @default(false)
+  password         String
+  products         Product[]
+  promoCodes       PromoCode[]
+  reviews          Review[]
+  transactions     Transaction[]
+  updatedAt        DateTime      @updatedAt
+  username         String        @unique
+  emailVerifyToken String?       @unique
   // balance
   unpaidBalance Float @default(0)
   paidBalance   Float @default(0)
```


