# Migration `20200922005538-add-ssaleprice`

This migration has been generated at 9/21/2020, 8:55:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "salePrice" Decimal(65,30)   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200921203057-added-onsale..20200922005538-add-ssaleprice
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
@@ -33,8 +33,9 @@
   createdAt    DateTime      @default(now())
   description  String
   name         String
   onSale       Boolean       @default(false)
+  salePrice    Float?
   owner        User?         @relation(fields: [ownerId], references: [id])
   ownerId      String?
   reviews      Review[]
   tags         Tag[]
```


