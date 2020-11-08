# Migration `20201005234912-add-platform-payment`

This migration has been generated by Zane Helton at 10/5/2020, 7:49:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."PlatformPayment" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"amount" Decimal(65,30)   NOT NULL DEFAULT 0,
"transactionId" text   NOT NULL ,
"productId" text   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."PlatformPayment" ADD FOREIGN KEY ("productId")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."PlatformPayment" ADD FOREIGN KEY ("transactionId")REFERENCES "public"."Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201004221755-add-accounttype..20201005234912-add-platform-payment
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 enum AccountType {
   FREE
@@ -13,9 +13,9 @@
   PROPLUS
 }
 model User {
-  id                 String        @default(uuid()) @id
+  id                 String        @id @default(uuid())
   accountType        AccountType   @default(FREE)
   adTokens           Int           @default(0)
   avatarURL          String?
   createdAt          DateTime      @default(now())
@@ -45,56 +45,67 @@
   emailUpdates Boolean @default(true)
 }
 model Product {
-  id           String        @default(uuid()) @id
-  amount       Float         @default(0)
-  createdAt    DateTime      @default(now())
-  description  String
-  name         String
-  onSale       Boolean       @default(false)
-  salePrice    Float?
-  owner        User?         @relation(fields: [ownerId], references: [id])
-  ownerId      String?
-  reviews      Review[]
-  tags         Tag[]
-  transactions Transaction[]
-  updatedAt    DateTime      @updatedAt
-  images       Image[]
-  isArchived   Boolean       @default(false)
-  file         File?         @relation(fields: [fileId], references: [id])
-  fileId       String?
-  promoCodes   PromoCode[]
+  id              String            @id @default(uuid())
+  amount          Float             @default(0)
+  createdAt       DateTime          @default(now())
+  description     String
+  name            String
+  onSale          Boolean           @default(false)
+  salePrice       Float?
+  owner           User?             @relation(fields: [ownerId], references: [id])
+  ownerId         String?
+  reviews         Review[]
+  tags            Tag[]
+  transactions    Transaction[]
+  updatedAt       DateTime          @updatedAt
+  images          Image[]
+  isArchived      Boolean           @default(false)
+  file            File?             @relation(fields: [fileId], references: [id])
+  fileId          String?
+  promoCodes      PromoCode[]
 }
 model Transaction {
-  id              String      @default(uuid()) @id
-  amount          Float       @default(0)
-  approved        Boolean     @default(false)
-  buyer           User?       @relation(fields: [buyerId], references: [id])
+  id              String            @id @default(uuid())
+  amount          Float             @default(0)
+  approved        Boolean           @default(false)
+  buyer           User?             @relation(fields: [buyerId], references: [id])
   buyerId         String?
-  createdAt       DateTime    @default(now())
+  createdAt       DateTime          @default(now())
   email           String?
-  licenseKey      String?     @unique
-  licenseRedeemed Boolean     @default(false)
-  licenseKeyShown Int         @default(0)
+  licenseKey      String?           @unique
+  licenseRedeemed Boolean           @default(false)
+  licenseKeyShown Int               @default(0)
   paypalPaymentId String?
   products        Product[]
-  updatedAt       DateTime    @updatedAt
+  updatedAt       DateTime          @updatedAt
   promos          PromoCode[]
+  PlatformPayment PlatformPayment[]
 }
+model PlatformPayment {
+  id            String      @id @default(uuid())
+  createdAt     DateTime    @default(now())
+  amount        Float       @default(0)
+  product       Product     @relation(fields: [productId], references: [id])
+  transaction   Transaction @relation(fields: [transactionId], references: [id])
+  transactionId String
+  productId     String
+}
+
 model Tag {
-  id        String    @default(uuid()) @id
+  id        String    @id @default(uuid())
   createdAt DateTime  @default(now())
   creator   User      @relation(fields: [creatorId], references: [id])
   creatorId String
   name      String
   products  Product[]
 }
 model Review {
-  id         String   @default(uuid()) @id
+  id         String   @id @default(uuid())
   author     User     @relation(fields: [authorId], references: [id])
   authorId   String
   createdAt  DateTime @default(now())
   isArchived Boolean  @default(false)
@@ -105,9 +116,9 @@
   updatedAt  DateTime @updatedAt
 }
 model Image {
-  id         String   @default(uuid()) @id
+  id         String   @id @default(uuid())
   createdAt  DateTime @default(now())
   isArchived Boolean  @default(false)
   product    Product? @relation(fields: [productId], references: [id])
   productId  String?
@@ -115,9 +126,9 @@
   url        String   @unique
 }
 model File {
-  id         String   @default(uuid()) @id
+  id         String   @id @default(uuid())
   createdAt  DateTime @default(now())
   isArchived Boolean  @default(false)
   name       String
   secret     String   @unique
@@ -125,9 +136,9 @@
   product    Product
 }
 model PromoCode {
-  id           String        @default(uuid()) @id
+  id           String        @id @default(uuid())
   createdAt    DateTime      @default(now())
   isArchived   Boolean       @default(false)
   affectsAll   Boolean
   code         String        @unique
@@ -142,9 +153,9 @@
   transactions Transaction[]
 }
 model Withdraw {
-  id           String   @default(uuid()) @id
+  id           String   @id @default(uuid())
   approved     Boolean  @default(false)
   createdAt    DateTime @default(now())
   confirmToken String   @default(cuid())
   user         User     @relation(fields: [userId], references: [id])
```

