# Migration `20200831121356-caps-sanity-3`

This migration has been generated by Zane Helton at 8/31/2020, 8:13:56 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200831121103-add-tags..20200831121356-caps-sanity-3
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
@@ -17,9 +17,8 @@
   products      Product[]
   transactions  Transaction[]
   updatedAt     DateTime      @updatedAt
   username      String        @unique
-  Tag           Tag[]
 }
 model Product {
   id           Int           @default(autoincrement()) @id
```


