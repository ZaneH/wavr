# Migration `20200903082428-appprove-transactions`

This migration has been generated by Zane Helton at 9/3/2020, 4:24:28 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Transaction" ADD COLUMN "approved" boolean   NOT NULL DEFAULT false
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200903075710-rename-paypal-id..20200903082428-appprove-transactions
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
@@ -43,8 +43,9 @@
 model Transaction {
   id              String    @default(uuid()) @id
   amount          Float     @default(0)
+  approved        Boolean   @default(false)
   buyer           User?     @relation(fields: [buyerId], references: [id])
   buyerId         String?
   createdAt       DateTime  @default(now())
   email           String?
```


