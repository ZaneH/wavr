# Migration `20200926223337-add-user-to-promo`

This migration has been generated by Zane Helton at 9/26/2020, 6:33:37 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."PromoCode" ADD COLUMN "userId" text   NOT NULL 

ALTER TABLE "public"."PromoCode" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200926222433-percent-off-on-code..20200926223337-add-user-to-promo
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
@@ -17,8 +17,9 @@
   email         String        @unique
   emailVerified Boolean       @default(false)
   password      String
   products      Product[]
+  promoCodes    PromoCode[]
   reviews       Review[]
   transactions  Transaction[]
   updatedAt     DateTime      @updatedAt
   username      String        @unique
@@ -122,5 +123,7 @@
   product    Product   @relation(fields: [productId], references: [id])
   productId  String
   useLimit   Int?
   uses       Int       @default(0)
+  user       User      @relation(fields: [userId], references: [id])
+  userId     String
 }
```


