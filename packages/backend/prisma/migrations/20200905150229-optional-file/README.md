# Migration `20200905150229-optional-file`

This migration has been generated by Zane Helton at 9/5/2020, 11:02:29 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200905034115-license-key-shown-n-times..20200905150229-optional-file
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
@@ -38,10 +38,10 @@
   tags         Tag[]
   transactions Transaction[]
   updatedAt    DateTime      @updatedAt
   images       Image[]
-  file         File
   isArchived   Boolean       @default(false)
+  file         File?
 }
 model Transaction {
   id              String    @default(uuid()) @id
```

