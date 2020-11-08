import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum AccountType {
  Free = 'FREE',
  Pro = 'PRO',
  Proplus = 'PROPLUS'
}

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  product: Product;
};

export type AdCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<AdCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<AdWhereUniqueInput>>>;
};

export type AdCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt: Scalars['DateTime'];
};

export type AdListRelationFilter = {
  every?: Maybe<AdWhereInput>;
  some?: Maybe<AdWhereInput>;
  none?: Maybe<AdWhereInput>;
};

export type AdScalarWhereInput = {
  AND?: Maybe<Array<Maybe<AdScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<AdScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AdScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expiresAt?: Maybe<DateTimeFilter>;
  productId?: Maybe<StringFilter>;
};

export type AdUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<AdCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<AdWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<AdWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AdWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AdWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<AdUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<AdUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<AdScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<AdUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type AdUpdateManyWithWhereNestedInput = {
  where: AdScalarWhereInput;
  data: AdUpdateManyDataInput;
};

export type AdUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpdateWithWhereUniqueWithoutProductInput = {
  where: AdWhereUniqueInput;
  data: AdUpdateWithoutProductDataInput;
};

export type AdUpsertWithWhereUniqueWithoutProductInput = {
  where: AdWhereUniqueInput;
  update: AdUpdateWithoutProductDataInput;
  create: AdCreateWithoutProductInput;
};

export type AdWhereInput = {
  AND?: Maybe<Array<Maybe<AdWhereInput>>>;
  OR?: Maybe<Array<Maybe<AdWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AdWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expiresAt?: Maybe<DateTimeFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringFilter>;
};

export type AdWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  isArchived: Scalars['Boolean'];
  name: Scalars['String'];
  product: Product;
  url: Scalars['String'];
};

export type FileCreateOneWithoutProductInput = {
  create?: Maybe<FileCreateWithoutProductInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type FileCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  secret: Scalars['String'];
  url: Scalars['String'];
  oneTimeCodes?: Maybe<OneTimeCodeCreateManyWithoutFileInput>;
};

export type FileUpdateOneWithoutProductInput = {
  create?: Maybe<FileCreateWithoutProductInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FileUpdateWithoutProductDataInput>;
  upsert?: Maybe<FileUpsertWithoutProductInput>;
};

export type FileUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  oneTimeCodes?: Maybe<OneTimeCodeUpdateManyWithoutFileInput>;
};

export type FileUpsertWithoutProductInput = {
  update: FileUpdateWithoutProductDataInput;
  create: FileCreateWithoutProductInput;
};

export type FileWhereInput = {
  AND?: Maybe<Array<Maybe<FileWhereInput>>>;
  OR?: Maybe<Array<Maybe<FileWhereInput>>>;
  NOT?: Maybe<Array<Maybe<FileWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  secret?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  oneTimeCodes?: Maybe<OneTimeCodeListRelationFilter>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['String'];
  isArchived: Scalars['Boolean'];
  url: Scalars['String'];
};

export type ImageCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ImageCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
};

export type ImageCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  secret: Scalars['String'];
  url: Scalars['String'];
};

export type ImageListRelationFilter = {
  every?: Maybe<ImageWhereInput>;
  some?: Maybe<ImageWhereInput>;
  none?: Maybe<ImageWhereInput>;
};

export type ImageScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  productId?: Maybe<StringNullableFilter>;
  secret?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type ImageUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ImageCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type ImageUpdateManyWithWhereNestedInput = {
  where: ImageScalarWhereInput;
  data: ImageUpdateManyDataInput;
};

export type ImageUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  secret?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithWhereUniqueWithoutProductInput = {
  where: ImageWhereUniqueInput;
  data: ImageUpdateWithoutProductDataInput;
};

export type ImageUpsertWithWhereUniqueWithoutProductInput = {
  where: ImageWhereUniqueInput;
  update: ImageUpdateWithoutProductDataInput;
  create: ImageCreateWithoutProductInput;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<Maybe<ImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ImageWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ImageWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringNullableFilter>;
  secret?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneReport: Report;
  updateOneUser?: Maybe<User>;
  createOneProduct: Product;
  updateOneProduct?: Maybe<Product>;
  createOneTransaction: Transaction;
  createOneReview: Review;
  createOnePromoCode: PromoCode;
  deleteOnePromoCode?: Maybe<PromoCode>;
  redeemKey: Transaction;
  changePassword: User;
  login: AuthPayload;
  signup: AuthPayload;
  changePasswordWithToken: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  verifyEmail: Scalars['Boolean'];
  resendVerificationEmail: Scalars['Boolean'];
  requestWithdraw: Scalars['Boolean'];
  verifyWithdraw: Scalars['Boolean'];
  startAd?: Maybe<Ad>;
  /** Returns true if the Favorite was added, false if removed */
  toggleFavorite: Scalars['Boolean'];
};


export type MutationCreateOneReportArgs = {
  data: ReportCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOnePromoCodeArgs = {
  data: PromoCodeCreateInput;
};


export type MutationDeleteOnePromoCodeArgs = {
  where: PromoCodeWhereUniqueInput;
};


export type MutationRedeemKeyArgs = {
  key: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationChangePasswordWithTokenArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};


export type MutationResendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type MutationRequestWithdrawArgs = {
  id: Scalars['String'];
};


export type MutationVerifyWithdrawArgs = {
  token: Scalars['String'];
};


export type MutationStartAdArgs = {
  productId: Scalars['String'];
};


export type MutationToggleFavoriteArgs = {
  productId: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type OneTimeCode = {
  __typename?: 'OneTimeCode';
  id: Scalars['String'];
  expired: Scalars['Boolean'];
};

export type OneTimeCodeCreateManyWithoutFileInput = {
  create?: Maybe<Array<Maybe<OneTimeCodeCreateWithoutFileInput>>>;
  connect?: Maybe<Array<Maybe<OneTimeCodeWhereUniqueInput>>>;
};

export type OneTimeCodeCreateWithoutFileInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expired?: Maybe<Scalars['Boolean']>;
  code: Scalars['String'];
};

export type OneTimeCodeListRelationFilter = {
  every?: Maybe<OneTimeCodeWhereInput>;
  some?: Maybe<OneTimeCodeWhereInput>;
  none?: Maybe<OneTimeCodeWhereInput>;
};

export type OneTimeCodeScalarWhereInput = {
  AND?: Maybe<Array<Maybe<OneTimeCodeScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<OneTimeCodeScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<OneTimeCodeScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expired?: Maybe<BoolFilter>;
  fileId?: Maybe<StringFilter>;
  code?: Maybe<StringFilter>;
};

export type OneTimeCodeUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expired?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OneTimeCodeUpdateManyWithoutFileInput = {
  create?: Maybe<Array<Maybe<OneTimeCodeCreateWithoutFileInput>>>;
  connect?: Maybe<Array<Maybe<OneTimeCodeWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<OneTimeCodeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OneTimeCodeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<OneTimeCodeWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<OneTimeCodeUpdateWithWhereUniqueWithoutFileInput>>>;
  updateMany?: Maybe<Array<Maybe<OneTimeCodeUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<OneTimeCodeScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<OneTimeCodeUpsertWithWhereUniqueWithoutFileInput>>>;
};

export type OneTimeCodeUpdateManyWithWhereNestedInput = {
  where: OneTimeCodeScalarWhereInput;
  data: OneTimeCodeUpdateManyDataInput;
};

export type OneTimeCodeUpdateWithoutFileDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expired?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
};

export type OneTimeCodeUpdateWithWhereUniqueWithoutFileInput = {
  where: OneTimeCodeWhereUniqueInput;
  data: OneTimeCodeUpdateWithoutFileDataInput;
};

export type OneTimeCodeUpsertWithWhereUniqueWithoutFileInput = {
  where: OneTimeCodeWhereUniqueInput;
  update: OneTimeCodeUpdateWithoutFileDataInput;
  create: OneTimeCodeCreateWithoutFileInput;
};

export type OneTimeCodeWhereInput = {
  AND?: Maybe<Array<Maybe<OneTimeCodeWhereInput>>>;
  OR?: Maybe<Array<Maybe<OneTimeCodeWhereInput>>>;
  NOT?: Maybe<Array<Maybe<OneTimeCodeWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expired?: Maybe<BoolFilter>;
  file?: Maybe<FileWhereInput>;
  fileId?: Maybe<StringFilter>;
  code?: Maybe<StringFilter>;
};

export type OneTimeCodeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Payout = {
  __typename?: 'Payout';
  id: Scalars['String'];
  product: Product;
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
};

export type PayoutCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
};

export type PayoutCreateManyWithoutTransactionInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutTransactionInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
};

export type PayoutCreateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
};

export type PayoutCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  forPlatform?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserCreateOneWithoutPayoutsInput>;
  transaction: TransactionCreateOneWithoutPayoutsInput;
};

export type PayoutCreateWithoutTransactionInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  forPlatform?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserCreateOneWithoutPayoutsInput>;
  product: ProductCreateOneWithoutPayoutsInput;
};

export type PayoutCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  forPlatform?: Maybe<Scalars['Boolean']>;
  product: ProductCreateOneWithoutPayoutsInput;
  transaction: TransactionCreateOneWithoutPayoutsInput;
};

export type PayoutListRelationFilter = {
  every?: Maybe<PayoutWhereInput>;
  some?: Maybe<PayoutWhereInput>;
  none?: Maybe<PayoutWhereInput>;
};

export type PayoutScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  amount?: Maybe<FloatFilter>;
  userId?: Maybe<StringNullableFilter>;
  forPlatform?: Maybe<BoolFilter>;
  productId?: Maybe<StringFilter>;
  transactionId?: Maybe<StringFilter>;
};

export type PayoutUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  forPlatform?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PayoutUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PayoutUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<PayoutUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PayoutUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type PayoutUpdateManyWithoutTransactionInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutTransactionInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PayoutUpdateWithWhereUniqueWithoutTransactionInput>>>;
  updateMany?: Maybe<Array<Maybe<PayoutUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PayoutUpsertWithWhereUniqueWithoutTransactionInput>>>;
};

export type PayoutUpdateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<PayoutCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PayoutWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PayoutUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<PayoutUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PayoutScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PayoutUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PayoutUpdateManyWithWhereNestedInput = {
  where: PayoutScalarWhereInput;
  data: PayoutUpdateManyDataInput;
};

export type PayoutUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  forPlatform?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutPayoutsInput>;
  transaction?: Maybe<TransactionUpdateOneRequiredWithoutPayoutsInput>;
};

export type PayoutUpdateWithoutTransactionDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  forPlatform?: Maybe<BoolFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutPayoutsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPayoutsInput>;
};

export type PayoutUpdateWithoutUserDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  forPlatform?: Maybe<BoolFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPayoutsInput>;
  transaction?: Maybe<TransactionUpdateOneRequiredWithoutPayoutsInput>;
};

export type PayoutUpdateWithWhereUniqueWithoutProductInput = {
  where: PayoutWhereUniqueInput;
  data: PayoutUpdateWithoutProductDataInput;
};

export type PayoutUpdateWithWhereUniqueWithoutTransactionInput = {
  where: PayoutWhereUniqueInput;
  data: PayoutUpdateWithoutTransactionDataInput;
};

export type PayoutUpdateWithWhereUniqueWithoutUserInput = {
  where: PayoutWhereUniqueInput;
  data: PayoutUpdateWithoutUserDataInput;
};

export type PayoutUpsertWithWhereUniqueWithoutProductInput = {
  where: PayoutWhereUniqueInput;
  update: PayoutUpdateWithoutProductDataInput;
  create: PayoutCreateWithoutProductInput;
};

export type PayoutUpsertWithWhereUniqueWithoutTransactionInput = {
  where: PayoutWhereUniqueInput;
  update: PayoutUpdateWithoutTransactionDataInput;
  create: PayoutCreateWithoutTransactionInput;
};

export type PayoutUpsertWithWhereUniqueWithoutUserInput = {
  where: PayoutWhereUniqueInput;
  update: PayoutUpdateWithoutUserDataInput;
  create: PayoutCreateWithoutUserInput;
};

export type PayoutWhereInput = {
  AND?: Maybe<Array<Maybe<PayoutWhereInput>>>;
  OR?: Maybe<Array<Maybe<PayoutWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PayoutWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  amount?: Maybe<FloatFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringNullableFilter>;
  forPlatform?: Maybe<BoolFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringFilter>;
  transaction?: Maybe<TransactionWhereInput>;
  transactionId?: Maybe<StringFilter>;
};

export type PayoutWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  name: Scalars['String'];
  onSale: Scalars['Boolean'];
  salePrice?: Maybe<Scalars['Float']>;
  owner?: Maybe<User>;
  tags: Array<Tag>;
  reviews: Array<Review>;
  updatedAt: Scalars['DateTime'];
  transactions: Array<Transaction>;
  isFavorite: Scalars['Boolean'];
  /** Returns true if a user has bought the specified product */
  ownsProduct: Scalars['Boolean'];
  filename: Scalars['String'];
  hasReviewed: Scalars['Boolean'];
  stars: Scalars['Float'];
  images: Array<Scalars['String']>;
};


export type ProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TagWhereUniqueInput>;
  after?: Maybe<TagWhereUniqueInput>;
};


export type ProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ReviewWhereUniqueInput>;
  after?: Maybe<ReviewWhereUniqueInput>;
};


export type ProductTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TransactionWhereUniqueInput>;
  after?: Maybe<TransactionWhereUniqueInput>;
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutOwnerInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
};

export type ProductCreateManyWithoutTagsInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutTagsInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
};

export type ProductCreateManyWithoutTransactionsInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutTransactionsInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
};

export type ProductCreateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
};

export type ProductCreateOneWithoutPayoutsInput = {
  create?: Maybe<ProductCreateWithoutPayoutsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOneWithoutPromoCodesInput = {
  create?: Maybe<ProductCreateWithoutPromoCodesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOneWithoutReportsInput = {
  create?: Maybe<ProductCreateWithoutReportsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOneWithoutReviewsInput = {
  create?: Maybe<ProductCreateWithoutReviewsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutPayoutsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutPromoCodesInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutReportsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutReviewsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutTagsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutTransactionsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  users?: Maybe<UserCreateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  onSale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<UserCreateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewCreateManyWithoutProductInput>;
  tags?: Maybe<TagCreateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionCreateManyWithoutProductsInput>;
  images?: Maybe<ImageCreateManyWithoutProductInput>;
  file?: Maybe<FileCreateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutProductInput>;
  payouts?: Maybe<PayoutCreateManyWithoutProductInput>;
  reports?: Maybe<ReportCreateManyWithoutProductInput>;
  ads?: Maybe<AdCreateManyWithoutProductInput>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  onSale?: Maybe<BoolFilter>;
  salePrice?: Maybe<FloatNullableFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  fileId?: Maybe<StringNullableFilter>;
};

export type ProductUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutOwnerInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutOwnerInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutOwnerInput>>>;
};

export type ProductUpdateManyWithoutTagsInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutTagsInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutTagsInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutTagsInput>>>;
};

export type ProductUpdateManyWithoutTransactionsInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutTransactionsInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutTransactionsInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutTransactionsInput>>>;
};

export type ProductUpdateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<ProductCreateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutUsersInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutUsersInput>>>;
};

export type ProductUpdateManyWithWhereNestedInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
};

export type ProductUpdateOneRequiredWithoutPayoutsInput = {
  create?: Maybe<ProductCreateWithoutPayoutsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutPayoutsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutPayoutsInput>;
};

export type ProductUpdateOneRequiredWithoutReportsInput = {
  create?: Maybe<ProductCreateWithoutReportsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutReportsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutReportsInput>;
};

export type ProductUpdateOneRequiredWithoutReviewsInput = {
  create?: Maybe<ProductCreateWithoutReviewsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutReviewsInput>;
};

export type ProductUpdateOneWithoutPromoCodesInput = {
  create?: Maybe<ProductCreateWithoutPromoCodesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutPromoCodesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutPromoCodesInput>;
};

export type ProductUpdateWithoutOwnerDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutPayoutsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutPromoCodesDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutReportsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutReviewsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutTagsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutTransactionsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  users?: Maybe<UserUpdateManyWithoutFavoritesInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutUsersDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  onSale?: Maybe<BoolFieldUpdateOperationsInput>;
  salePrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutProductsInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutProductInput>;
  tags?: Maybe<TagUpdateManyWithoutProductsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutProductsInput>;
  images?: Maybe<ImageUpdateManyWithoutProductInput>;
  file?: Maybe<FileUpdateOneWithoutProductInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutProductInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutProductInput>;
  reports?: Maybe<ReportUpdateManyWithoutProductInput>;
  ads?: Maybe<AdUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithWhereUniqueWithoutOwnerInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutOwnerDataInput;
};

export type ProductUpdateWithWhereUniqueWithoutTagsInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutTagsDataInput;
};

export type ProductUpdateWithWhereUniqueWithoutTransactionsInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutTransactionsDataInput;
};

export type ProductUpdateWithWhereUniqueWithoutUsersInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutUsersDataInput;
};

export type ProductUpsertWithoutPayoutsInput = {
  update: ProductUpdateWithoutPayoutsDataInput;
  create: ProductCreateWithoutPayoutsInput;
};

export type ProductUpsertWithoutPromoCodesInput = {
  update: ProductUpdateWithoutPromoCodesDataInput;
  create: ProductCreateWithoutPromoCodesInput;
};

export type ProductUpsertWithoutReportsInput = {
  update: ProductUpdateWithoutReportsDataInput;
  create: ProductCreateWithoutReportsInput;
};

export type ProductUpsertWithoutReviewsInput = {
  update: ProductUpdateWithoutReviewsDataInput;
  create: ProductCreateWithoutReviewsInput;
};

export type ProductUpsertWithWhereUniqueWithoutOwnerInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutOwnerDataInput;
  create: ProductCreateWithoutOwnerInput;
};

export type ProductUpsertWithWhereUniqueWithoutTagsInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutTagsDataInput;
  create: ProductCreateWithoutTagsInput;
};

export type ProductUpsertWithWhereUniqueWithoutTransactionsInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutTransactionsDataInput;
  create: ProductCreateWithoutTransactionsInput;
};

export type ProductUpsertWithWhereUniqueWithoutUsersInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutUsersDataInput;
  create: ProductCreateWithoutUsersInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  onSale?: Maybe<BoolFilter>;
  salePrice?: Maybe<FloatNullableFilter>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringNullableFilter>;
  reviews?: Maybe<ReviewListRelationFilter>;
  tags?: Maybe<TagListRelationFilter>;
  transactions?: Maybe<TransactionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  images?: Maybe<ImageListRelationFilter>;
  isArchived?: Maybe<BoolFilter>;
  file?: Maybe<FileWhereInput>;
  fileId?: Maybe<StringNullableFilter>;
  promoCodes?: Maybe<PromoCodeListRelationFilter>;
  payouts?: Maybe<PayoutListRelationFilter>;
  users?: Maybe<UserListRelationFilter>;
  reports?: Maybe<ReportListRelationFilter>;
  ads?: Maybe<AdListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PromoCode = {
  __typename?: 'PromoCode';
  id: Scalars['String'];
  affectsAll: Scalars['Boolean'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  isArchived: Scalars['Boolean'];
  percentOff: Scalars['Int'];
  product?: Maybe<Product>;
  useLimit?: Maybe<Scalars['Int']>;
  user: User;
  uses: Scalars['Int'];
};

export type PromoCodeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  affectsAll: Scalars['Boolean'];
  code: Scalars['String'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  percentOff: Scalars['Int'];
  useLimit?: Maybe<Scalars['Int']>;
  uses?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductCreateOneWithoutPromoCodesInput>;
};

export type PromoCodeCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
};

export type PromoCodeCreateManyWithoutTransactionsInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutTransactionsInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
};

export type PromoCodeCreateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
};

export type PromoCodeCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  affectsAll: Scalars['Boolean'];
  code: Scalars['String'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  percentOff: Scalars['Int'];
  useLimit?: Maybe<Scalars['Int']>;
  uses?: Maybe<Scalars['Int']>;
  user: UserCreateOneWithoutPromoCodesInput;
  transactions?: Maybe<TransactionCreateManyWithoutPromosInput>;
};

export type PromoCodeCreateWithoutTransactionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  affectsAll: Scalars['Boolean'];
  code: Scalars['String'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  percentOff: Scalars['Int'];
  useLimit?: Maybe<Scalars['Int']>;
  uses?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductCreateOneWithoutPromoCodesInput>;
  user: UserCreateOneWithoutPromoCodesInput;
};

export type PromoCodeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  affectsAll: Scalars['Boolean'];
  code: Scalars['String'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  percentOff: Scalars['Int'];
  useLimit?: Maybe<Scalars['Int']>;
  uses?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductCreateOneWithoutPromoCodesInput>;
  transactions?: Maybe<TransactionCreateManyWithoutPromosInput>;
};

export type PromoCodeListRelationFilter = {
  every?: Maybe<PromoCodeWhereInput>;
  some?: Maybe<PromoCodeWhereInput>;
  none?: Maybe<PromoCodeWhereInput>;
};

export type PromoCodeScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  affectsAll?: Maybe<BoolFilter>;
  code?: Maybe<StringFilter>;
  expiresAt?: Maybe<DateTimeNullableFilter>;
  percentOff?: Maybe<IntFilter>;
  productId?: Maybe<StringNullableFilter>;
  useLimit?: Maybe<IntNullableFilter>;
  uses?: Maybe<IntFilter>;
  userId?: Maybe<StringFilter>;
};

export type PromoCodeUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  affectsAll?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
  expiresAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  percentOff?: Maybe<IntFieldUpdateOperationsInput>;
  useLimit?: Maybe<NullableIntFieldUpdateOperationsInput>;
  uses?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PromoCodeUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PromoCodeUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<PromoCodeUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PromoCodeUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type PromoCodeUpdateManyWithoutTransactionsInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutTransactionsInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PromoCodeUpdateWithWhereUniqueWithoutTransactionsInput>>>;
  updateMany?: Maybe<Array<Maybe<PromoCodeUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PromoCodeUpsertWithWhereUniqueWithoutTransactionsInput>>>;
};

export type PromoCodeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<PromoCodeCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PromoCodeWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PromoCodeUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<PromoCodeUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<PromoCodeScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PromoCodeUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type PromoCodeUpdateManyWithWhereNestedInput = {
  where: PromoCodeScalarWhereInput;
  data: PromoCodeUpdateManyDataInput;
};

export type PromoCodeUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  affectsAll?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
  expiresAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  percentOff?: Maybe<IntFieldUpdateOperationsInput>;
  useLimit?: Maybe<NullableIntFieldUpdateOperationsInput>;
  uses?: Maybe<IntFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutPromoCodesInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutPromosInput>;
};

export type PromoCodeUpdateWithoutTransactionsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  affectsAll?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
  expiresAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  percentOff?: Maybe<IntFieldUpdateOperationsInput>;
  useLimit?: Maybe<NullableIntFieldUpdateOperationsInput>;
  uses?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneWithoutPromoCodesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutPromoCodesInput>;
};

export type PromoCodeUpdateWithoutUserDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  affectsAll?: Maybe<BoolFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
  expiresAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  percentOff?: Maybe<IntFieldUpdateOperationsInput>;
  useLimit?: Maybe<NullableIntFieldUpdateOperationsInput>;
  uses?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneWithoutPromoCodesInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutPromosInput>;
};

export type PromoCodeUpdateWithWhereUniqueWithoutProductInput = {
  where: PromoCodeWhereUniqueInput;
  data: PromoCodeUpdateWithoutProductDataInput;
};

export type PromoCodeUpdateWithWhereUniqueWithoutTransactionsInput = {
  where: PromoCodeWhereUniqueInput;
  data: PromoCodeUpdateWithoutTransactionsDataInput;
};

export type PromoCodeUpdateWithWhereUniqueWithoutUserInput = {
  where: PromoCodeWhereUniqueInput;
  data: PromoCodeUpdateWithoutUserDataInput;
};

export type PromoCodeUpsertWithWhereUniqueWithoutProductInput = {
  where: PromoCodeWhereUniqueInput;
  update: PromoCodeUpdateWithoutProductDataInput;
  create: PromoCodeCreateWithoutProductInput;
};

export type PromoCodeUpsertWithWhereUniqueWithoutTransactionsInput = {
  where: PromoCodeWhereUniqueInput;
  update: PromoCodeUpdateWithoutTransactionsDataInput;
  create: PromoCodeCreateWithoutTransactionsInput;
};

export type PromoCodeUpsertWithWhereUniqueWithoutUserInput = {
  where: PromoCodeWhereUniqueInput;
  update: PromoCodeUpdateWithoutUserDataInput;
  create: PromoCodeCreateWithoutUserInput;
};

export type PromoCodeWhereInput = {
  AND?: Maybe<Array<Maybe<PromoCodeWhereInput>>>;
  OR?: Maybe<Array<Maybe<PromoCodeWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PromoCodeWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  affectsAll?: Maybe<BoolFilter>;
  code?: Maybe<StringFilter>;
  expiresAt?: Maybe<DateTimeNullableFilter>;
  percentOff?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringNullableFilter>;
  useLimit?: Maybe<IntNullableFilter>;
  uses?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
  transactions?: Maybe<TransactionListRelationFilter>;
};

export type PromoCodeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  oneTimeCodes: Array<OneTimeCode>;
  withdraws: Array<Withdraw>;
  promoCode?: Maybe<PromoCode>;
  promoCodes: Array<PromoCode>;
  files: Array<File>;
  images: Array<Image>;
  product?: Maybe<Product>;
  products: Array<Product>;
  user?: Maybe<User>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  reviews: Array<Review>;
  productCount: Scalars['Int'];
  mySales: Array<Payout>;
  getFileURLs: Scalars['String'];
  featuredProducts: Array<Product>;
  me?: Maybe<User>;
  calculateCart: Scalars['String'];
  getDiscordOauthUrl: Scalars['String'];
  getRandomAd?: Maybe<Ad>;
};


export type QueryOneTimeCodesArgs = {
  where?: Maybe<QueryOneTimeCodesWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OneTimeCodeWhereUniqueInput>;
  after?: Maybe<OneTimeCodeWhereUniqueInput>;
};


export type QueryWithdrawsArgs = {
  where?: Maybe<QueryWithdrawsWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WithdrawWhereUniqueInput>;
  after?: Maybe<WithdrawWhereUniqueInput>;
};


export type QueryPromoCodeArgs = {
  where: PromoCodeWhereUniqueInput;
};


export type QueryPromoCodesArgs = {
  where?: Maybe<QueryPromoCodesWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PromoCodeWhereUniqueInput>;
  after?: Maybe<PromoCodeWhereUniqueInput>;
};


export type QueryFilesArgs = {
  where?: Maybe<QueryFilesWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FileWhereUniqueInput>;
  after?: Maybe<FileWhereUniqueInput>;
};


export type QueryImagesArgs = {
  where?: Maybe<QueryImagesWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ImageWhereUniqueInput>;
  after?: Maybe<ImageWhereUniqueInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  where?: Maybe<QueryProductsWhereInput>;
  orderBy?: Maybe<Array<Maybe<QueryProductsOrderByInput>>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TagWhereUniqueInput>;
  after?: Maybe<TagWhereUniqueInput>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  where?: Maybe<QueryTransactionsWhereInput>;
  orderBy?: Maybe<Array<Maybe<TransactionOrderByInput>>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TransactionWhereUniqueInput>;
  after?: Maybe<TransactionWhereUniqueInput>;
};


export type QueryReviewsArgs = {
  where?: Maybe<QueryReviewsWhereInput>;
  orderBy?: Maybe<Array<Maybe<ReviewOrderByInput>>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ReviewWhereUniqueInput>;
  after?: Maybe<ReviewWhereUniqueInput>;
};


export type QueryProductCountArgs = {
  username?: Maybe<Scalars['String']>;
};


export type QueryMySalesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<TransactionWhereUniqueInput>;
};


export type QueryGetFileUrLsArgs = {
  licenseKey: Scalars['String'];
};


export type QueryFeaturedProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<ProductWhereUniqueInput>;
};


export type QueryCalculateCartArgs = {
  promoCode?: Maybe<Scalars['String']>;
  productIds: Array<Scalars['String']>;
};

export type QueryFilesWhereInput = {
  isArchived?: Maybe<BoolFilter>;
  product?: Maybe<ProductWhereInput>;
};

export type QueryImagesWhereInput = {
  isArchived?: Maybe<BoolFilter>;
  productId?: Maybe<StringNullableFilter>;
};

export type QueryOneTimeCodesWhereInput = {
  code?: Maybe<StringFilter>;
};

export type QueryProductsOrderByInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type QueryProductsWhereInput = {
  tags?: Maybe<TagListRelationFilter>;
  isArchived?: Maybe<BoolFilter>;
};

export type QueryPromoCodesWhereInput = {
  isArchived?: Maybe<BoolFilter>;
  user?: Maybe<UserWhereInput>;
};

export type QueryReviewsWhereInput = {
  author?: Maybe<UserWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type QueryTransactionsWhereInput = {
  buyer?: Maybe<UserWhereInput>;
  products?: Maybe<ProductListRelationFilter>;
};

export type QueryWithdrawsWhereInput = {
  user?: Maybe<UserWhereInput>;
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  product: Product;
  reporter: User;
  resolved: Scalars['Boolean'];
};

export type ReportCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  resolved?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  product: ProductCreateOneWithoutReportsInput;
};

export type ReportCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ReportCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
};

export type ReportCreateManyWithoutReporterInput = {
  create?: Maybe<Array<Maybe<ReportCreateWithoutReporterInput>>>;
  connect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
};

export type ReportCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  resolved?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  reporter: UserCreateOneWithoutReportsInput;
};

export type ReportCreateWithoutReporterInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  resolved?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  product: ProductCreateOneWithoutReportsInput;
};

export type ReportListRelationFilter = {
  every?: Maybe<ReportWhereInput>;
  some?: Maybe<ReportWhereInput>;
  none?: Maybe<ReportWhereInput>;
};

export type ReportScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ReportScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ReportScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ReportScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  resolved?: Maybe<BoolFilter>;
  message?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type ReportUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ReportUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ReportCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ReportUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<ReportUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ReportScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ReportUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type ReportUpdateManyWithoutReporterInput = {
  create?: Maybe<Array<Maybe<ReportCreateWithoutReporterInput>>>;
  connect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ReportWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ReportUpdateWithWhereUniqueWithoutReporterInput>>>;
  updateMany?: Maybe<Array<Maybe<ReportUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ReportScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ReportUpsertWithWhereUniqueWithoutReporterInput>>>;
};

export type ReportUpdateManyWithWhereNestedInput = {
  where: ReportScalarWhereInput;
  data: ReportUpdateManyDataInput;
};

export type ReportUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  reporter?: Maybe<UserUpdateOneRequiredWithoutReportsInput>;
};

export type ReportUpdateWithoutReporterDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutReportsInput>;
};

export type ReportUpdateWithWhereUniqueWithoutProductInput = {
  where: ReportWhereUniqueInput;
  data: ReportUpdateWithoutProductDataInput;
};

export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
  where: ReportWhereUniqueInput;
  data: ReportUpdateWithoutReporterDataInput;
};

export type ReportUpsertWithWhereUniqueWithoutProductInput = {
  where: ReportWhereUniqueInput;
  update: ReportUpdateWithoutProductDataInput;
  create: ReportCreateWithoutProductInput;
};

export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
  where: ReportWhereUniqueInput;
  update: ReportUpdateWithoutReporterDataInput;
  create: ReportCreateWithoutReporterInput;
};

export type ReportWhereInput = {
  AND?: Maybe<Array<Maybe<ReportWhereInput>>>;
  OR?: Maybe<Array<Maybe<ReportWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ReportWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  resolved?: Maybe<BoolFilter>;
  reporter?: Maybe<UserWhereInput>;
  message?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type ReportWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['String'];
  author: User;
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  product: Product;
  stars: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ReviewCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  stars: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  product: ProductCreateOneWithoutReviewsInput;
};

export type ReviewCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<ReviewCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
};

export type ReviewCreateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ReviewCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
};

export type ReviewCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  stars: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  product: ProductCreateOneWithoutReviewsInput;
};

export type ReviewCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  stars: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateOneWithoutReviewsInput;
};

export type ReviewListRelationFilter = {
  every?: Maybe<ReviewWhereInput>;
  some?: Maybe<ReviewWhereInput>;
  none?: Maybe<ReviewWhereInput>;
};

export type ReviewOrderByInput = {
  id?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  isArchived?: Maybe<SortOrder>;
  message?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  stars?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ReviewScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ReviewScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ReviewScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ReviewScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  message?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  stars?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ReviewUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  stars?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<ReviewCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ReviewUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<ReviewUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ReviewScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ReviewUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type ReviewUpdateManyWithoutProductInput = {
  create?: Maybe<Array<Maybe<ReviewCreateWithoutProductInput>>>;
  connect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ReviewWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ReviewUpdateWithWhereUniqueWithoutProductInput>>>;
  updateMany?: Maybe<Array<Maybe<ReviewUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<ReviewScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<ReviewUpsertWithWhereUniqueWithoutProductInput>>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
};

export type ReviewUpdateWithoutAuthorDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  stars?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateWithoutProductDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isArchived?: Maybe<BoolFieldUpdateOperationsInput>;
  message?: Maybe<StringFieldUpdateOperationsInput>;
  stars?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutAuthorDataInput;
};

export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutProductDataInput;
};

export type ReviewUpsertWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutAuthorDataInput;
  create: ReviewCreateWithoutAuthorInput;
};

export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutProductDataInput;
  create: ReviewCreateWithoutProductInput;
};

export type ReviewWhereInput = {
  AND?: Maybe<Array<Maybe<ReviewWhereInput>>>;
  OR?: Maybe<Array<Maybe<ReviewWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ReviewWhereInput>>>;
  id?: Maybe<StringFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  isArchived?: Maybe<BoolFilter>;
  message?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringFilter>;
  stars?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
  products: Array<Product>;
};


export type TagProductsArgs = {
  where?: Maybe<TagProductsWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};

export type TagCreateManyWithoutCreatorInput = {
  create?: Maybe<Array<Maybe<TagCreateWithoutCreatorInput>>>;
  connect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
};

export type TagCreateManyWithoutProductsInput = {
  create?: Maybe<Array<Maybe<TagCreateWithoutProductsInput>>>;
  connect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
};

export type TagCreateWithoutCreatorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  products?: Maybe<ProductCreateManyWithoutTagsInput>;
};

export type TagCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  creator: UserCreateOneWithoutCreatedTagsInput;
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
};

export type TagProductsWhereInput = {
  isArchived?: Maybe<BoolFilter>;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TagScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TagScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TagScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creatorId?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type TagUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithoutCreatorInput = {
  create?: Maybe<Array<Maybe<TagCreateWithoutCreatorInput>>>;
  connect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TagUpdateWithWhereUniqueWithoutCreatorInput>>>;
  updateMany?: Maybe<Array<Maybe<TagUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<TagScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<TagUpsertWithWhereUniqueWithoutCreatorInput>>>;
};

export type TagUpdateManyWithoutProductsInput = {
  create?: Maybe<Array<Maybe<TagCreateWithoutProductsInput>>>;
  connect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TagUpdateWithWhereUniqueWithoutProductsInput>>>;
  updateMany?: Maybe<Array<Maybe<TagUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<TagScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<TagUpsertWithWhereUniqueWithoutProductsInput>>>;
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
};

export type TagUpdateWithoutCreatorDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutTagsInput>;
};

export type TagUpdateWithoutProductsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedTagsInput>;
};

export type TagUpdateWithWhereUniqueWithoutCreatorInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutCreatorDataInput;
};

export type TagUpdateWithWhereUniqueWithoutProductsInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutProductsDataInput;
};

export type TagUpsertWithWhereUniqueWithoutCreatorInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutCreatorDataInput;
  create: TagCreateWithoutCreatorInput;
};

export type TagUpsertWithWhereUniqueWithoutProductsInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutProductsDataInput;
  create: TagCreateWithoutProductsInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<Maybe<TagWhereInput>>>;
  OR?: Maybe<Array<Maybe<TagWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TagWhereInput>>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creator?: Maybe<UserWhereInput>;
  creatorId?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String'];
  amount: Scalars['Float'];
  buyer?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  products: Array<Product>;
  licenseKeyShown: Scalars['Int'];
  licenseRedeemed: Scalars['Boolean'];
  licenseKey?: Maybe<Scalars['String']>;
};


export type TransactionProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};

export type TransactionCreateInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseRedeemed?: Maybe<Scalars['Boolean']>;
  licenseKeyShown?: Maybe<Scalars['Int']>;
  paypalPaymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  buyer?: Maybe<UserCreateOneWithoutTransactionsInput>;
  products?: Maybe<ProductCreateManyWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeCreateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutCreateManyWithoutTransactionInput>;
};

export type TransactionCreateManyWithoutBuyerInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutBuyerInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
};

export type TransactionCreateManyWithoutProductsInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutProductsInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
};

export type TransactionCreateManyWithoutPromosInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutPromosInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
};

export type TransactionCreateOneWithoutPayoutsInput = {
  create?: Maybe<TransactionCreateWithoutPayoutsInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
};

export type TransactionCreateWithoutBuyerInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseRedeemed?: Maybe<Scalars['Boolean']>;
  licenseKeyShown?: Maybe<Scalars['Int']>;
  paypalPaymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateManyWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeCreateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutCreateManyWithoutTransactionInput>;
};

export type TransactionCreateWithoutPayoutsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseRedeemed?: Maybe<Scalars['Boolean']>;
  licenseKeyShown?: Maybe<Scalars['Int']>;
  paypalPaymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  buyer?: Maybe<UserCreateOneWithoutTransactionsInput>;
  products?: Maybe<ProductCreateManyWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeCreateManyWithoutTransactionsInput>;
};

export type TransactionCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseRedeemed?: Maybe<Scalars['Boolean']>;
  licenseKeyShown?: Maybe<Scalars['Int']>;
  paypalPaymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  buyer?: Maybe<UserCreateOneWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeCreateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutCreateManyWithoutTransactionInput>;
};

export type TransactionCreateWithoutPromosInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseRedeemed?: Maybe<Scalars['Boolean']>;
  licenseKeyShown?: Maybe<Scalars['Int']>;
  paypalPaymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  buyer?: Maybe<UserCreateOneWithoutTransactionsInput>;
  products?: Maybe<ProductCreateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutCreateManyWithoutTransactionInput>;
};

export type TransactionListRelationFilter = {
  every?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
};

export type TransactionOrderByInput = {
  id?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  approved?: Maybe<SortOrder>;
  buyerId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  licenseKey?: Maybe<SortOrder>;
  licenseRedeemed?: Maybe<SortOrder>;
  licenseKeyShown?: Maybe<SortOrder>;
  paypalPaymentId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  approved?: Maybe<BoolFilter>;
  buyerId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  licenseKey?: Maybe<StringNullableFilter>;
  licenseRedeemed?: Maybe<BoolFilter>;
  licenseKeyShown?: Maybe<IntFilter>;
  paypalPaymentId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TransactionUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseRedeemed?: Maybe<BoolFieldUpdateOperationsInput>;
  licenseKeyShown?: Maybe<IntFieldUpdateOperationsInput>;
  paypalPaymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithoutBuyerInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutBuyerInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransactionUpdateWithWhereUniqueWithoutBuyerInput>>>;
  updateMany?: Maybe<Array<Maybe<TransactionUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<TransactionUpsertWithWhereUniqueWithoutBuyerInput>>>;
};

export type TransactionUpdateManyWithoutProductsInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutProductsInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransactionUpdateWithWhereUniqueWithoutProductsInput>>>;
  updateMany?: Maybe<Array<Maybe<TransactionUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<TransactionUpsertWithWhereUniqueWithoutProductsInput>>>;
};

export type TransactionUpdateManyWithoutPromosInput = {
  create?: Maybe<Array<Maybe<TransactionCreateWithoutPromosInput>>>;
  connect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<TransactionWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TransactionUpdateWithWhereUniqueWithoutPromosInput>>>;
  updateMany?: Maybe<Array<Maybe<TransactionUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<TransactionScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<TransactionUpsertWithWhereUniqueWithoutPromosInput>>>;
};

export type TransactionUpdateManyWithWhereNestedInput = {
  where: TransactionScalarWhereInput;
  data: TransactionUpdateManyDataInput;
};

export type TransactionUpdateOneRequiredWithoutPayoutsInput = {
  create?: Maybe<TransactionCreateWithoutPayoutsInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
  update?: Maybe<TransactionUpdateWithoutPayoutsDataInput>;
  upsert?: Maybe<TransactionUpsertWithoutPayoutsInput>;
};

export type TransactionUpdateWithoutBuyerDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseRedeemed?: Maybe<BoolFieldUpdateOperationsInput>;
  licenseKeyShown?: Maybe<IntFieldUpdateOperationsInput>;
  paypalPaymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeUpdateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutTransactionInput>;
};

export type TransactionUpdateWithoutPayoutsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseRedeemed?: Maybe<BoolFieldUpdateOperationsInput>;
  licenseKeyShown?: Maybe<IntFieldUpdateOperationsInput>;
  paypalPaymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  buyer?: Maybe<UserUpdateOneWithoutTransactionsInput>;
  products?: Maybe<ProductUpdateManyWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeUpdateManyWithoutTransactionsInput>;
};

export type TransactionUpdateWithoutProductsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseRedeemed?: Maybe<BoolFieldUpdateOperationsInput>;
  licenseKeyShown?: Maybe<IntFieldUpdateOperationsInput>;
  paypalPaymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  buyer?: Maybe<UserUpdateOneWithoutTransactionsInput>;
  promos?: Maybe<PromoCodeUpdateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutTransactionInput>;
};

export type TransactionUpdateWithoutPromosDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseKey?: Maybe<NullableStringFieldUpdateOperationsInput>;
  licenseRedeemed?: Maybe<BoolFieldUpdateOperationsInput>;
  licenseKeyShown?: Maybe<IntFieldUpdateOperationsInput>;
  paypalPaymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  buyer?: Maybe<UserUpdateOneWithoutTransactionsInput>;
  products?: Maybe<ProductUpdateManyWithoutTransactionsInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutTransactionInput>;
};

export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutBuyerDataInput;
};

export type TransactionUpdateWithWhereUniqueWithoutProductsInput = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutProductsDataInput;
};

export type TransactionUpdateWithWhereUniqueWithoutPromosInput = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutPromosDataInput;
};

export type TransactionUpsertWithoutPayoutsInput = {
  update: TransactionUpdateWithoutPayoutsDataInput;
  create: TransactionCreateWithoutPayoutsInput;
};

export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
  where: TransactionWhereUniqueInput;
  update: TransactionUpdateWithoutBuyerDataInput;
  create: TransactionCreateWithoutBuyerInput;
};

export type TransactionUpsertWithWhereUniqueWithoutProductsInput = {
  where: TransactionWhereUniqueInput;
  update: TransactionUpdateWithoutProductsDataInput;
  create: TransactionCreateWithoutProductsInput;
};

export type TransactionUpsertWithWhereUniqueWithoutPromosInput = {
  where: TransactionWhereUniqueInput;
  update: TransactionUpdateWithoutPromosDataInput;
  create: TransactionCreateWithoutPromosInput;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  approved?: Maybe<BoolFilter>;
  buyer?: Maybe<UserWhereInput>;
  buyerId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  licenseKey?: Maybe<StringNullableFilter>;
  licenseRedeemed?: Maybe<BoolFilter>;
  licenseKeyShown?: Maybe<IntFilter>;
  paypalPaymentId?: Maybe<StringNullableFilter>;
  products?: Maybe<ProductListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  promos?: Maybe<PromoCodeListRelationFilter>;
  payouts?: Maybe<PayoutListRelationFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  licenseKey?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  discordId?: Maybe<Scalars['String']>;
  isVerified: Scalars['Boolean'];
  accountType: AccountType;
  adTokens: Scalars['Float'];
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  favorites: Array<Product>;
  email: Scalars['String'];
  emailOnSale: Scalars['Boolean'];
  emailUpdates: Scalars['Boolean'];
  emailVerified: Scalars['Boolean'];
  paidBalance: Scalars['Float'];
  paypalEmail?: Maybe<Scalars['String']>;
  products: Array<Product>;
  transactions: Array<Transaction>;
  unpaidBalance: Scalars['Float'];
  username: Scalars['String'];
  storageQuotaPercent: Scalars['Int'];
  productQuotaPercent: Scalars['Int'];
};


export type UserFavoritesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};


export type UserProductsArgs = {
  where?: Maybe<UserProductsWhereInput>;
  orderBy?: Maybe<Array<Maybe<UserProductsOrderByInput>>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};


export type UserTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TransactionWhereUniqueInput>;
  after?: Maybe<TransactionWhereUniqueInput>;
};

export type UserCreateManyWithoutFavoritesInput = {
  create?: Maybe<Array<Maybe<UserCreateWithoutFavoritesInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
};

export type UserCreateOneWithoutCreatedTagsInput = {
  create?: Maybe<UserCreateWithoutCreatedTagsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutPayoutsInput = {
  create?: Maybe<UserCreateWithoutPayoutsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutPromoCodesInput = {
  create?: Maybe<UserCreateWithoutPromoCodesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutReportsInput = {
  create?: Maybe<UserCreateWithoutReportsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutReviewsInput = {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutTransactionsInput = {
  create?: Maybe<UserCreateWithoutTransactionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutCreatedTagsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutFavoritesInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutPayoutsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutPromoCodesInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutReportsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
};

export type UserCreateWithoutReviewsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  transactions?: Maybe<TransactionCreateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserCreateWithoutTransactionsInput = {
  id?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<Scalars['Float']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discordId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordResetToken?: Maybe<Scalars['String']>;
  paypalEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  unpaidBalance?: Maybe<Scalars['Float']>;
  paidBalance?: Maybe<Scalars['Float']>;
  emailOnSale?: Maybe<Scalars['Boolean']>;
  emailUpdates?: Maybe<Scalars['Boolean']>;
  createdTags?: Maybe<TagCreateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductCreateManyWithoutUsersInput>;
  products?: Maybe<ProductCreateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeCreateManyWithoutUserInput>;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
  payouts?: Maybe<PayoutCreateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawCreateManyWithoutUserInput>;
  reports?: Maybe<ReportCreateManyWithoutReporterInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserProductsOrderByInput = {
  amount?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type UserProductsWhereInput = {
  isArchived?: Maybe<BoolFilter>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFilter>;
  avatarURL?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  discordId?: Maybe<StringNullableFilter>;
  displayName?: Maybe<StringNullableFilter>;
  email?: Maybe<StringFilter>;
  emailVerified?: Maybe<BoolFilter>;
  emailVerifyToken?: Maybe<StringFilter>;
  isAdmin?: Maybe<BoolFilter>;
  password?: Maybe<StringFilter>;
  passwordResetToken?: Maybe<StringFilter>;
  paypalEmail?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
  isVerified?: Maybe<BoolFilter>;
  verifiedAt?: Maybe<DateTimeNullableFilter>;
  unpaidBalance?: Maybe<FloatFilter>;
  paidBalance?: Maybe<FloatFilter>;
  emailOnSale?: Maybe<BoolFilter>;
  emailUpdates?: Maybe<BoolFilter>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutFavoritesInput = {
  create?: Maybe<Array<Maybe<UserCreateWithoutFavoritesInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutFavoritesInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutFavoritesInput>>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
};

export type UserUpdateOneRequiredWithoutCreatedTagsInput = {
  create?: Maybe<UserCreateWithoutCreatedTagsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCreatedTagsDataInput>;
  upsert?: Maybe<UserUpsertWithoutCreatedTagsInput>;
};

export type UserUpdateOneRequiredWithoutPromoCodesInput = {
  create?: Maybe<UserCreateWithoutPromoCodesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPromoCodesDataInput>;
  upsert?: Maybe<UserUpsertWithoutPromoCodesInput>;
};

export type UserUpdateOneRequiredWithoutReportsInput = {
  create?: Maybe<UserCreateWithoutReportsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutReportsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReportsInput>;
};

export type UserUpdateOneRequiredWithoutReviewsInput = {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneWithoutPayoutsInput = {
  create?: Maybe<UserCreateWithoutPayoutsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPayoutsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPayoutsInput>;
};

export type UserUpdateOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutProductsDataInput>;
  upsert?: Maybe<UserUpsertWithoutProductsInput>;
};

export type UserUpdateOneWithoutTransactionsInput = {
  create?: Maybe<UserCreateWithoutTransactionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutTransactionsDataInput>;
  upsert?: Maybe<UserUpsertWithoutTransactionsInput>;
};

export type UserUpdateWithoutCreatedTagsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutFavoritesDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutPayoutsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutProductsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutPromoCodesDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutReportsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutReviewsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutBuyerInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithoutTransactionsDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFieldUpdateOperationsInput>;
  avatarURL?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  discordId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  displayName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  emailVerifyToken?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordResetToken?: Maybe<StringFieldUpdateOperationsInput>;
  paypalEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  isVerified?: Maybe<BoolFieldUpdateOperationsInput>;
  verifiedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  unpaidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  paidBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  emailOnSale?: Maybe<BoolFieldUpdateOperationsInput>;
  emailUpdates?: Maybe<BoolFieldUpdateOperationsInput>;
  createdTags?: Maybe<TagUpdateManyWithoutCreatorInput>;
  favorites?: Maybe<ProductUpdateManyWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutOwnerInput>;
  promoCodes?: Maybe<PromoCodeUpdateManyWithoutUserInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
  payouts?: Maybe<PayoutUpdateManyWithoutUserInput>;
  withdraws?: Maybe<WithdrawUpdateManyWithoutUserInput>;
  reports?: Maybe<ReportUpdateManyWithoutReporterInput>;
};

export type UserUpdateWithWhereUniqueWithoutFavoritesInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFavoritesDataInput;
};

export type UserUpsertWithoutCreatedTagsInput = {
  update: UserUpdateWithoutCreatedTagsDataInput;
  create: UserCreateWithoutCreatedTagsInput;
};

export type UserUpsertWithoutPayoutsInput = {
  update: UserUpdateWithoutPayoutsDataInput;
  create: UserCreateWithoutPayoutsInput;
};

export type UserUpsertWithoutProductsInput = {
  update: UserUpdateWithoutProductsDataInput;
  create: UserCreateWithoutProductsInput;
};

export type UserUpsertWithoutPromoCodesInput = {
  update: UserUpdateWithoutPromoCodesDataInput;
  create: UserCreateWithoutPromoCodesInput;
};

export type UserUpsertWithoutReportsInput = {
  update: UserUpdateWithoutReportsDataInput;
  create: UserCreateWithoutReportsInput;
};

export type UserUpsertWithoutReviewsInput = {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
};

export type UserUpsertWithoutTransactionsInput = {
  update: UserUpdateWithoutTransactionsDataInput;
  create: UserCreateWithoutTransactionsInput;
};

export type UserUpsertWithWhereUniqueWithoutFavoritesInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFavoritesDataInput;
  create: UserCreateWithoutFavoritesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<StringFilter>;
  accountType?: Maybe<AccountType>;
  adTokens?: Maybe<FloatFilter>;
  avatarURL?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  createdTags?: Maybe<TagListRelationFilter>;
  discordId?: Maybe<StringNullableFilter>;
  displayName?: Maybe<StringNullableFilter>;
  email?: Maybe<StringFilter>;
  emailVerified?: Maybe<BoolFilter>;
  emailVerifyToken?: Maybe<StringFilter>;
  favorites?: Maybe<ProductListRelationFilter>;
  isAdmin?: Maybe<BoolFilter>;
  password?: Maybe<StringFilter>;
  passwordResetToken?: Maybe<StringFilter>;
  paypalEmail?: Maybe<StringNullableFilter>;
  products?: Maybe<ProductListRelationFilter>;
  promoCodes?: Maybe<PromoCodeListRelationFilter>;
  reviews?: Maybe<ReviewListRelationFilter>;
  transactions?: Maybe<TransactionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
  payouts?: Maybe<PayoutListRelationFilter>;
  isVerified?: Maybe<BoolFilter>;
  verifiedAt?: Maybe<DateTimeNullableFilter>;
  withdraws?: Maybe<WithdrawListRelationFilter>;
  reports?: Maybe<ReportListRelationFilter>;
  unpaidBalance?: Maybe<FloatFilter>;
  paidBalance?: Maybe<FloatFilter>;
  emailOnSale?: Maybe<BoolFilter>;
  emailUpdates?: Maybe<BoolFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerifyToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Withdraw = {
  __typename?: 'Withdraw';
  id: Scalars['String'];
  approved: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
};

export type WithdrawCreateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<WithdrawCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<WithdrawWhereUniqueInput>>>;
};

export type WithdrawCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  confirmToken?: Maybe<Scalars['String']>;
};

export type WithdrawListRelationFilter = {
  every?: Maybe<WithdrawWhereInput>;
  some?: Maybe<WithdrawWhereInput>;
  none?: Maybe<WithdrawWhereInput>;
};

export type WithdrawScalarWhereInput = {
  AND?: Maybe<Array<Maybe<WithdrawScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<WithdrawScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<WithdrawScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  approved?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  confirmToken?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type WithdrawUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  confirmToken?: Maybe<StringFieldUpdateOperationsInput>;
};

export type WithdrawUpdateManyWithoutUserInput = {
  create?: Maybe<Array<Maybe<WithdrawCreateWithoutUserInput>>>;
  connect?: Maybe<Array<Maybe<WithdrawWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<WithdrawWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<WithdrawWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<WithdrawWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<WithdrawUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<WithdrawUpdateManyWithWhereNestedInput>>>;
  deleteMany?: Maybe<Array<Maybe<WithdrawScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<WithdrawUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type WithdrawUpdateManyWithWhereNestedInput = {
  where: WithdrawScalarWhereInput;
  data: WithdrawUpdateManyDataInput;
};

export type WithdrawUpdateWithoutUserDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  confirmToken?: Maybe<StringFieldUpdateOperationsInput>;
};

export type WithdrawUpdateWithWhereUniqueWithoutUserInput = {
  where: WithdrawWhereUniqueInput;
  data: WithdrawUpdateWithoutUserDataInput;
};

export type WithdrawUpsertWithWhereUniqueWithoutUserInput = {
  where: WithdrawWhereUniqueInput;
  update: WithdrawUpdateWithoutUserDataInput;
  create: WithdrawCreateWithoutUserInput;
};

export type WithdrawWhereInput = {
  AND?: Maybe<Array<Maybe<WithdrawWhereInput>>>;
  OR?: Maybe<Array<Maybe<WithdrawWhereInput>>>;
  NOT?: Maybe<Array<Maybe<WithdrawWhereInput>>>;
  id?: Maybe<StringFilter>;
  approved?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  confirmToken?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type WithdrawWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AuthPayloadFragmentFragment = (
  { __typename?: 'AuthPayload' }
  & Pick<AuthPayload, 'token'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserDisplayFragmentFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'paypalEmail'>
    & UserFragmentFragment
  )> }
);

export type FeaturedProductsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<ProductWhereUniqueInput>;
}>;


export type FeaturedProductsQuery = (
  { __typename?: 'Query' }
  & { featuredProducts: Array<(
    { __typename?: 'Product' }
    & { owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
    & ProductDisplayFragmentFragment
  )> }
);

export type NewProductsQueryVariables = Exact<{
  count: Scalars['Int'];
}>;


export type NewProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & { owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
    & ProductDisplayFragmentFragment
  )> }
);

export type TagFragmentFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'id' | 'name'>
);

export type TagsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type TagsQuery = (
  { __typename?: 'Query' }
  & { tags: Array<(
    { __typename?: 'Tag' }
    & TagFragmentFragment
  )> }
);

export type CalculateCartQueryVariables = Exact<{
  productIds: Array<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
}>;


export type CalculateCartQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'calculateCart'>
);

export type PromoCodeQueryVariables = Exact<{
  where: PromoCodeWhereUniqueInput;
}>;


export type PromoCodeQuery = (
  { __typename?: 'Query' }
  & { promoCode?: Maybe<(
    { __typename?: 'PromoCode' }
    & PromoCodeFragmentFragment
  )> }
);

export type CreateTransactionMutationVariables = Exact<{
  data: TransactionCreateInput;
}>;


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createOneTransaction: (
    { __typename?: 'Transaction' }
    & TransactionFragmentFragment
  ) }
);

export type RedeemKeyMutationVariables = Exact<{
  key: Scalars['String'];
}>;


export type RedeemKeyMutation = (
  { __typename?: 'Mutation' }
  & { redeemKey: (
    { __typename?: 'Transaction' }
    & TransactionFragmentFragment
  ) }
);

export type TransactionWithLicenseKeyQueryVariables = Exact<{
  where: TransactionWhereUniqueInput;
}>;


export type TransactionWithLicenseKeyQuery = (
  { __typename?: 'Query' }
  & { transaction?: Maybe<(
    { __typename?: 'Transaction' }
    & TransactionLicenseKeyFragmentFragment
  )> }
);

export type TransactionsQueryVariables = Exact<{
  where: QueryTransactionsWhereInput;
  orderBy?: Maybe<Array<TransactionOrderByInput>>;
}>;


export type TransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & TransactionNoBuyerFragmentFragment
  )> }
);

export type TransactionProductsQueryVariables = Exact<{
  where: TransactionWhereUniqueInput;
}>;


export type TransactionProductsQuery = (
  { __typename?: 'Query' }
  & { transaction?: Maybe<(
    { __typename?: 'Transaction' }
    & TransactionProductsFragmentFragment
  )> }
);

export type GetFileUrlsQueryVariables = Exact<{
  licenseKey: Scalars['String'];
}>;


export type GetFileUrlsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getFileURLs'>
);

export type StartAdMutationVariables = Exact<{
  productId: Scalars['String'];
}>;


export type StartAdMutation = (
  { __typename?: 'Mutation' }
  & { startAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'createdAt' | 'expiresAt'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'name'>
    ) }
  )> }
);

export type GetDiscordOauthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDiscordOauthUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getDiscordOauthUrl'>
);

export type ToggleFavoriteMutationVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ToggleFavoriteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleFavorite'>
);

export type GetFavoritesForUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetFavoritesForUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { favorites: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'images' | 'name'>
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'displayName' | 'username'>
      )> }
    )> }
  )> }
);

export type GetFilesQueryVariables = Exact<{
  where: QueryFilesWhereInput;
}>;


export type GetFilesQuery = (
  { __typename?: 'Query' }
  & { files: Array<(
    { __typename?: 'File' }
    & Pick<File, 'id' | 'createdAt' | 'name' | 'url'>
  )> }
);

export type GetImagesQueryVariables = Exact<{
  where: QueryImagesWhereInput;
}>;


export type GetImagesQuery = (
  { __typename?: 'Query' }
  & { images: Array<(
    { __typename?: 'Image' }
    & Pick<Image, 'id' | 'url'>
  )> }
);

export type MySalesQueryVariables = Exact<{ [key: string]: never; }>;


export type MySalesQuery = (
  { __typename?: 'Query' }
  & { mySales: Array<(
    { __typename?: 'Payout' }
    & Pick<Payout, 'id' | 'createdAt' | 'amount'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'createdAt' | 'name'>
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    ) }
  )> }
);

export type CreateProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createOneProduct: (
    { __typename?: 'Product' }
    & ProductFragmentFragment
  ) }
);

export type UpdateProductMutationVariables = Exact<{
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragmentFragment
  )> }
);

export type PromoCodeFragmentFragment = (
  { __typename?: 'PromoCode' }
  & Pick<PromoCode, 'id' | 'isArchived' | 'createdAt' | 'expiresAt' | 'code' | 'uses' | 'useLimit' | 'percentOff'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
  )> }
);

export type CreatePromoCodeMutationVariables = Exact<{
  data: PromoCodeCreateInput;
}>;


export type CreatePromoCodeMutation = (
  { __typename?: 'Mutation' }
  & { createOnePromoCode: (
    { __typename?: 'PromoCode' }
    & PromoCodeFragmentFragment
  ) }
);

export type DeleteOnePromoCodeMutationVariables = Exact<{
  where: PromoCodeWhereUniqueInput;
}>;


export type DeleteOnePromoCodeMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePromoCode?: Maybe<(
    { __typename?: 'PromoCode' }
    & Pick<PromoCode, 'id'>
  )> }
);

export type PromoCodesQueryVariables = Exact<{
  where: QueryPromoCodesWhereInput;
}>;


export type PromoCodesQuery = (
  { __typename?: 'Query' }
  & { promoCodes: Array<(
    { __typename?: 'PromoCode' }
    & PromoCodeFragmentFragment
  )> }
);

export type RequestWithdrawMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RequestWithdrawMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestWithdraw'>
);

export type WithdrawsQueryVariables = Exact<{
  where?: Maybe<QueryWithdrawsWhereInput>;
}>;


export type WithdrawsQuery = (
  { __typename?: 'Query' }
  & { withdraws: Array<(
    { __typename?: 'Withdraw' }
    & Pick<Withdraw, 'id' | 'approved' | 'createdAt'>
  )> }
);

export type OneTimeCodesQueryVariables = Exact<{
  where?: Maybe<QueryOneTimeCodesWhereInput>;
}>;


export type OneTimeCodesQuery = (
  { __typename?: 'Query' }
  & { oneTimeCodes: Array<(
    { __typename?: 'OneTimeCode' }
    & Pick<OneTimeCode, 'id' | 'expired'>
  )> }
);

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyEmail'>
);

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type GetRandomAdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomAdQuery = (
  { __typename?: 'Query' }
  & { getRandomAd?: Maybe<(
    { __typename?: 'Ad' }
    & { product: (
      { __typename?: 'Product' }
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & UserDisplayFragmentFragment
      )> }
      & ProductDisplayFragmentFragment
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type ProductFragmentFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'amount' | 'description' | 'name' | 'createdAt' | 'updatedAt' | 'images' | 'onSale' | 'salePrice' | 'stars' | 'isFavorite' | 'filename' | 'hasReviewed' | 'ownsProduct'>
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & TransactionFragmentFragment
  )> }
);

export type ProductDisplayFragmentFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'amount' | 'onSale' | 'salePrice' | 'description' | 'name' | 'createdAt' | 'updatedAt' | 'images' | 'stars'>
);

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & { tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>, owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
    & ProductFragmentFragment
  )> }
);

export type ProductCountQueryVariables = Exact<{
  username?: Maybe<Scalars['String']>;
}>;


export type ProductCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'productCount'>
);

export type ProductImageQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductImageQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'images'>
  )> }
);

export type ProductPriceQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductPriceQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'amount'>
  )> }
);

export type ProductsQueryVariables = Exact<{
  where?: Maybe<QueryProductsWhereInput>;
  orderBy?: Maybe<Array<QueryProductsOrderByInput>>;
  after?: Maybe<ProductWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & { owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
    & ProductDisplayFragmentFragment
  )> }
);

export type CreateReportMutationVariables = Exact<{
  data: ReportCreateInput;
}>;


export type CreateReportMutation = (
  { __typename?: 'Mutation' }
  & { createOneReport: (
    { __typename?: 'Report' }
    & Pick<Report, 'id'>
  ) }
);

export type ReviewFragmentFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id' | 'stars' | 'message' | 'updatedAt' | 'createdAt'>
  & { product: (
    { __typename?: 'Product' }
    & { owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
    & ProductFragmentFragment
  ), author: (
    { __typename?: 'User' }
    & UserDisplayFragmentFragment
  ) }
);

export type CreateReviewMutationVariables = Exact<{
  data: ReviewCreateInput;
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createOneReview: (
    { __typename?: 'Review' }
    & ReviewFragmentFragment
  ) }
);

export type ReviewsQueryVariables = Exact<{
  where: QueryReviewsWhereInput;
  orderBy?: Maybe<Array<ReviewOrderByInput>>;
}>;


export type ReviewsQuery = (
  { __typename?: 'Query' }
  & { reviews: Array<(
    { __typename?: 'Review' }
    & ReviewFragmentFragment
  )> }
);

export type ChangePasswordWithTokenMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type ChangePasswordWithTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePasswordWithToken'>
);

export type ResendVerificationEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendVerificationEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resendVerificationEmail'>
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & AuthPayloadFragmentFragment
  ) }
);

export type TaggedProductsQueryVariables = Exact<{
  id: Scalars['String'];
  first: Scalars['Int'];
  after?: Maybe<ProductWhereUniqueInput>;
  where?: Maybe<TagProductsWhereInput>;
}>;


export type TaggedProductsQuery = (
  { __typename?: 'Query' }
  & { tag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
    & { products: Array<(
      { __typename?: 'Product' }
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & UserDisplayFragmentFragment
      )> }
      & ProductFragmentFragment
    )> }
  )> }
);

export type TransactionFragmentFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'id' | 'amount' | 'createdAt'>
  & { buyer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type TransactionNoBuyerFragmentFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'id' | 'amount' | 'createdAt'>
);

export type TransactionLicenseKeyFragmentFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'licenseKey'>
  & TransactionFragmentFragment
);

export type TransactionProductsFragmentFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'licenseKey'>
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'images'>
    & { owner?: Maybe<(
      { __typename?: 'User' }
      & UserDisplayFragmentFragment
    )> }
  )> }
  & TransactionFragmentFragment
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'adTokens' | 'email' | 'isVerified' | 'discordId' | 'createdAt' | 'emailVerified' | 'emailOnSale' | 'emailUpdates'>
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & TransactionFragmentFragment
  )> }
  & UserDisplayFragmentFragment
);

export type UserBalanceFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'unpaidBalance' | 'paidBalance'>
);

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type UserDisplayQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserDisplayQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserDisplayFragmentFragment
  )> }
);

export type UserBalanceQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserBalanceQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserBalanceFragmentFragment
  )> }
);

export type UserProductsQueryVariables = Exact<{
  where: UserWhereUniqueInput;
  orderBy?: Maybe<Array<UserProductsOrderByInput>>;
  after?: Maybe<ProductWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  productsWhere?: Maybe<UserProductsWhereInput>;
}>;


export type UserProductsQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'productQuotaPercent' | 'storageQuotaPercent'>
    & { products: Array<(
      { __typename?: 'Product' }
      & { tags: Array<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      )>, owner?: Maybe<(
        { __typename?: 'User' }
        & UserDisplayFragmentFragment
      )> }
      & ProductDisplayFragmentFragment
    )> }
  )> }
);

export type UserDisplayFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'isVerified' | 'displayName' | 'avatarURL'>
);

export type VerifyWithdrawMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyWithdrawMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyWithdraw'>
);

export const UserDisplayFragmentFragmentDoc = gql`
    fragment userDisplayFragment on User {
  id
  username
  isVerified
  displayName
  avatarURL
}
    `;
export const AuthPayloadFragmentFragmentDoc = gql`
    fragment authPayloadFragment on AuthPayload {
  token
  user {
    ...userDisplayFragment
  }
}
    ${UserDisplayFragmentFragmentDoc}`;
export const TagFragmentFragmentDoc = gql`
    fragment tagFragment on Tag {
  id
  name
}
    `;
export const PromoCodeFragmentFragmentDoc = gql`
    fragment promoCodeFragment on PromoCode {
  id
  isArchived
  createdAt
  expiresAt
  code
  uses
  useLimit
  percentOff
  user {
    id
  }
  product {
    id
    name
  }
}
    `;
export const ProductDisplayFragmentFragmentDoc = gql`
    fragment productDisplayFragment on Product {
  id
  amount
  onSale
  salePrice
  description
  name
  createdAt
  updatedAt
  images
  stars
}
    `;
export const TransactionFragmentFragmentDoc = gql`
    fragment transactionFragment on Transaction {
  id
  amount
  createdAt
  buyer {
    id
  }
}
    `;
export const ProductFragmentFragmentDoc = gql`
    fragment productFragment on Product {
  id
  amount
  description
  name
  createdAt
  updatedAt
  images
  onSale
  salePrice
  stars
  isFavorite
  filename
  hasReviewed
  ownsProduct
  transactions {
    ...transactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;
export const ReviewFragmentFragmentDoc = gql`
    fragment reviewFragment on Review {
  id
  stars
  message
  updatedAt
  createdAt
  product {
    ...productFragment
    owner {
      ...userDisplayFragment
    }
  }
  author {
    ...userDisplayFragment
  }
}
    ${ProductFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;
export const TransactionNoBuyerFragmentFragmentDoc = gql`
    fragment transactionNoBuyerFragment on Transaction {
  id
  amount
  createdAt
}
    `;
export const TransactionLicenseKeyFragmentFragmentDoc = gql`
    fragment transactionLicenseKeyFragment on Transaction {
  ...transactionFragment
  licenseKey
}
    ${TransactionFragmentFragmentDoc}`;
export const TransactionProductsFragmentFragmentDoc = gql`
    fragment transactionProductsFragment on Transaction {
  ...transactionFragment
  licenseKey
  products {
    id
    name
    images
    owner {
      ...userDisplayFragment
    }
  }
}
    ${TransactionFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;
export const UserFragmentFragmentDoc = gql`
    fragment userFragment on User {
  adTokens
  email
  isVerified
  discordId
  createdAt
  ...userDisplayFragment
  emailVerified
  emailOnSale
  emailUpdates
  transactions {
    ...transactionFragment
  }
}
    ${UserDisplayFragmentFragmentDoc}
${TransactionFragmentFragmentDoc}`;
export const UserBalanceFragmentFragmentDoc = gql`
    fragment userBalanceFragment on User {
  unpaidBalance
  paidBalance
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!, $confirmNewPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword) {
    id
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...userFragment
    paypalEmail
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const FeaturedProductsDocument = gql`
    query FeaturedProducts($first: Int, $after: ProductWhereUniqueInput) {
  featuredProducts(first: $first, after: $after) {
    ...productDisplayFragment
    owner {
      ...userDisplayFragment
    }
  }
}
    ${ProductDisplayFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useFeaturedProductsQuery__
 *
 * To run a query within a React component, call `useFeaturedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFeaturedProductsQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedProductsQuery, FeaturedProductsQueryVariables>) {
        return Apollo.useQuery<FeaturedProductsQuery, FeaturedProductsQueryVariables>(FeaturedProductsDocument, baseOptions);
      }
export function useFeaturedProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedProductsQuery, FeaturedProductsQueryVariables>) {
          return Apollo.useLazyQuery<FeaturedProductsQuery, FeaturedProductsQueryVariables>(FeaturedProductsDocument, baseOptions);
        }
export type FeaturedProductsQueryHookResult = ReturnType<typeof useFeaturedProductsQuery>;
export type FeaturedProductsLazyQueryHookResult = ReturnType<typeof useFeaturedProductsLazyQuery>;
export type FeaturedProductsQueryResult = Apollo.QueryResult<FeaturedProductsQuery, FeaturedProductsQueryVariables>;
export function refetchFeaturedProductsQuery(variables?: FeaturedProductsQueryVariables) {
      return { query: FeaturedProductsDocument, variables: variables }
    }
export const NewProductsDocument = gql`
    query NewProducts($count: Int!) {
  products(orderBy: {createdAt: desc}, first: $count) {
    ...productDisplayFragment
    owner {
      ...userDisplayFragment
    }
  }
}
    ${ProductDisplayFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useNewProductsQuery__
 *
 * To run a query within a React component, call `useNewProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewProductsQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useNewProductsQuery(baseOptions?: Apollo.QueryHookOptions<NewProductsQuery, NewProductsQueryVariables>) {
        return Apollo.useQuery<NewProductsQuery, NewProductsQueryVariables>(NewProductsDocument, baseOptions);
      }
export function useNewProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewProductsQuery, NewProductsQueryVariables>) {
          return Apollo.useLazyQuery<NewProductsQuery, NewProductsQueryVariables>(NewProductsDocument, baseOptions);
        }
export type NewProductsQueryHookResult = ReturnType<typeof useNewProductsQuery>;
export type NewProductsLazyQueryHookResult = ReturnType<typeof useNewProductsLazyQuery>;
export type NewProductsQueryResult = Apollo.QueryResult<NewProductsQuery, NewProductsQueryVariables>;
export function refetchNewProductsQuery(variables?: NewProductsQueryVariables) {
      return { query: NewProductsDocument, variables: variables }
    }
export const TagsDocument = gql`
    query Tags($first: Int) {
  tags(first: $first) {
    ...tagFragment
  }
}
    ${TagFragmentFragmentDoc}`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export function refetchTagsQuery(variables?: TagsQueryVariables) {
      return { query: TagsDocument, variables: variables }
    }
export const CalculateCartDocument = gql`
    query CalculateCart($productIds: [String!]!, $promoCode: String) {
  calculateCart(productIds: $productIds, promoCode: $promoCode)
}
    `;

/**
 * __useCalculateCartQuery__
 *
 * To run a query within a React component, call `useCalculateCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculateCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculateCartQuery({
 *   variables: {
 *      productIds: // value for 'productIds'
 *      promoCode: // value for 'promoCode'
 *   },
 * });
 */
export function useCalculateCartQuery(baseOptions?: Apollo.QueryHookOptions<CalculateCartQuery, CalculateCartQueryVariables>) {
        return Apollo.useQuery<CalculateCartQuery, CalculateCartQueryVariables>(CalculateCartDocument, baseOptions);
      }
export function useCalculateCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculateCartQuery, CalculateCartQueryVariables>) {
          return Apollo.useLazyQuery<CalculateCartQuery, CalculateCartQueryVariables>(CalculateCartDocument, baseOptions);
        }
export type CalculateCartQueryHookResult = ReturnType<typeof useCalculateCartQuery>;
export type CalculateCartLazyQueryHookResult = ReturnType<typeof useCalculateCartLazyQuery>;
export type CalculateCartQueryResult = Apollo.QueryResult<CalculateCartQuery, CalculateCartQueryVariables>;
export function refetchCalculateCartQuery(variables?: CalculateCartQueryVariables) {
      return { query: CalculateCartDocument, variables: variables }
    }
export const PromoCodeDocument = gql`
    query PromoCode($where: PromoCodeWhereUniqueInput!) {
  promoCode(where: $where) {
    ...promoCodeFragment
  }
}
    ${PromoCodeFragmentFragmentDoc}`;

/**
 * __usePromoCodeQuery__
 *
 * To run a query within a React component, call `usePromoCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromoCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromoCodeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePromoCodeQuery(baseOptions?: Apollo.QueryHookOptions<PromoCodeQuery, PromoCodeQueryVariables>) {
        return Apollo.useQuery<PromoCodeQuery, PromoCodeQueryVariables>(PromoCodeDocument, baseOptions);
      }
export function usePromoCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromoCodeQuery, PromoCodeQueryVariables>) {
          return Apollo.useLazyQuery<PromoCodeQuery, PromoCodeQueryVariables>(PromoCodeDocument, baseOptions);
        }
export type PromoCodeQueryHookResult = ReturnType<typeof usePromoCodeQuery>;
export type PromoCodeLazyQueryHookResult = ReturnType<typeof usePromoCodeLazyQuery>;
export type PromoCodeQueryResult = Apollo.QueryResult<PromoCodeQuery, PromoCodeQueryVariables>;
export function refetchPromoCodeQuery(variables?: PromoCodeQueryVariables) {
      return { query: PromoCodeDocument, variables: variables }
    }
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($data: TransactionCreateInput!) {
  createOneTransaction(data: $data) {
    ...transactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, baseOptions);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const RedeemKeyDocument = gql`
    mutation RedeemKey($key: String!) {
  redeemKey(key: $key) {
    ...transactionFragment
  }
}
    ${TransactionFragmentFragmentDoc}`;
export type RedeemKeyMutationFn = Apollo.MutationFunction<RedeemKeyMutation, RedeemKeyMutationVariables>;

/**
 * __useRedeemKeyMutation__
 *
 * To run a mutation, you first call `useRedeemKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemKeyMutation, { data, loading, error }] = useRedeemKeyMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useRedeemKeyMutation(baseOptions?: Apollo.MutationHookOptions<RedeemKeyMutation, RedeemKeyMutationVariables>) {
        return Apollo.useMutation<RedeemKeyMutation, RedeemKeyMutationVariables>(RedeemKeyDocument, baseOptions);
      }
export type RedeemKeyMutationHookResult = ReturnType<typeof useRedeemKeyMutation>;
export type RedeemKeyMutationResult = Apollo.MutationResult<RedeemKeyMutation>;
export type RedeemKeyMutationOptions = Apollo.BaseMutationOptions<RedeemKeyMutation, RedeemKeyMutationVariables>;
export const TransactionWithLicenseKeyDocument = gql`
    query TransactionWithLicenseKey($where: TransactionWhereUniqueInput!) {
  transaction(where: $where) {
    ...transactionLicenseKeyFragment
  }
}
    ${TransactionLicenseKeyFragmentFragmentDoc}`;

/**
 * __useTransactionWithLicenseKeyQuery__
 *
 * To run a query within a React component, call `useTransactionWithLicenseKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionWithLicenseKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionWithLicenseKeyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTransactionWithLicenseKeyQuery(baseOptions?: Apollo.QueryHookOptions<TransactionWithLicenseKeyQuery, TransactionWithLicenseKeyQueryVariables>) {
        return Apollo.useQuery<TransactionWithLicenseKeyQuery, TransactionWithLicenseKeyQueryVariables>(TransactionWithLicenseKeyDocument, baseOptions);
      }
export function useTransactionWithLicenseKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionWithLicenseKeyQuery, TransactionWithLicenseKeyQueryVariables>) {
          return Apollo.useLazyQuery<TransactionWithLicenseKeyQuery, TransactionWithLicenseKeyQueryVariables>(TransactionWithLicenseKeyDocument, baseOptions);
        }
export type TransactionWithLicenseKeyQueryHookResult = ReturnType<typeof useTransactionWithLicenseKeyQuery>;
export type TransactionWithLicenseKeyLazyQueryHookResult = ReturnType<typeof useTransactionWithLicenseKeyLazyQuery>;
export type TransactionWithLicenseKeyQueryResult = Apollo.QueryResult<TransactionWithLicenseKeyQuery, TransactionWithLicenseKeyQueryVariables>;
export function refetchTransactionWithLicenseKeyQuery(variables?: TransactionWithLicenseKeyQueryVariables) {
      return { query: TransactionWithLicenseKeyDocument, variables: variables }
    }
export const TransactionsDocument = gql`
    query Transactions($where: QueryTransactionsWhereInput!, $orderBy: [TransactionOrderByInput!]) {
  transactions(where: $where, orderBy: $orderBy) {
    ...transactionNoBuyerFragment
  }
}
    ${TransactionNoBuyerFragmentFragmentDoc}`;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, baseOptions);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, baseOptions);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export function refetchTransactionsQuery(variables?: TransactionsQueryVariables) {
      return { query: TransactionsDocument, variables: variables }
    }
export const TransactionProductsDocument = gql`
    query TransactionProducts($where: TransactionWhereUniqueInput!) {
  transaction(where: $where) {
    ...transactionProductsFragment
  }
}
    ${TransactionProductsFragmentFragmentDoc}`;

/**
 * __useTransactionProductsQuery__
 *
 * To run a query within a React component, call `useTransactionProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTransactionProductsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionProductsQuery, TransactionProductsQueryVariables>) {
        return Apollo.useQuery<TransactionProductsQuery, TransactionProductsQueryVariables>(TransactionProductsDocument, baseOptions);
      }
export function useTransactionProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionProductsQuery, TransactionProductsQueryVariables>) {
          return Apollo.useLazyQuery<TransactionProductsQuery, TransactionProductsQueryVariables>(TransactionProductsDocument, baseOptions);
        }
export type TransactionProductsQueryHookResult = ReturnType<typeof useTransactionProductsQuery>;
export type TransactionProductsLazyQueryHookResult = ReturnType<typeof useTransactionProductsLazyQuery>;
export type TransactionProductsQueryResult = Apollo.QueryResult<TransactionProductsQuery, TransactionProductsQueryVariables>;
export function refetchTransactionProductsQuery(variables?: TransactionProductsQueryVariables) {
      return { query: TransactionProductsDocument, variables: variables }
    }
export const GetFileUrlsDocument = gql`
    query GetFileUrls($licenseKey: String!) {
  getFileURLs(licenseKey: $licenseKey)
}
    `;

/**
 * __useGetFileUrlsQuery__
 *
 * To run a query within a React component, call `useGetFileUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileUrlsQuery({
 *   variables: {
 *      licenseKey: // value for 'licenseKey'
 *   },
 * });
 */
export function useGetFileUrlsQuery(baseOptions?: Apollo.QueryHookOptions<GetFileUrlsQuery, GetFileUrlsQueryVariables>) {
        return Apollo.useQuery<GetFileUrlsQuery, GetFileUrlsQueryVariables>(GetFileUrlsDocument, baseOptions);
      }
export function useGetFileUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileUrlsQuery, GetFileUrlsQueryVariables>) {
          return Apollo.useLazyQuery<GetFileUrlsQuery, GetFileUrlsQueryVariables>(GetFileUrlsDocument, baseOptions);
        }
export type GetFileUrlsQueryHookResult = ReturnType<typeof useGetFileUrlsQuery>;
export type GetFileUrlsLazyQueryHookResult = ReturnType<typeof useGetFileUrlsLazyQuery>;
export type GetFileUrlsQueryResult = Apollo.QueryResult<GetFileUrlsQuery, GetFileUrlsQueryVariables>;
export function refetchGetFileUrlsQuery(variables?: GetFileUrlsQueryVariables) {
      return { query: GetFileUrlsDocument, variables: variables }
    }
export const StartAdDocument = gql`
    mutation StartAd($productId: String!) {
  startAd(productId: $productId) {
    id
    createdAt
    expiresAt
    product {
      name
    }
  }
}
    `;
export type StartAdMutationFn = Apollo.MutationFunction<StartAdMutation, StartAdMutationVariables>;

/**
 * __useStartAdMutation__
 *
 * To run a mutation, you first call `useStartAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startAdMutation, { data, loading, error }] = useStartAdMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useStartAdMutation(baseOptions?: Apollo.MutationHookOptions<StartAdMutation, StartAdMutationVariables>) {
        return Apollo.useMutation<StartAdMutation, StartAdMutationVariables>(StartAdDocument, baseOptions);
      }
export type StartAdMutationHookResult = ReturnType<typeof useStartAdMutation>;
export type StartAdMutationResult = Apollo.MutationResult<StartAdMutation>;
export type StartAdMutationOptions = Apollo.BaseMutationOptions<StartAdMutation, StartAdMutationVariables>;
export const GetDiscordOauthUrlDocument = gql`
    query GetDiscordOauthUrl {
  getDiscordOauthUrl
}
    `;

/**
 * __useGetDiscordOauthUrlQuery__
 *
 * To run a query within a React component, call `useGetDiscordOauthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDiscordOauthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDiscordOauthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDiscordOauthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GetDiscordOauthUrlQuery, GetDiscordOauthUrlQueryVariables>) {
        return Apollo.useQuery<GetDiscordOauthUrlQuery, GetDiscordOauthUrlQueryVariables>(GetDiscordOauthUrlDocument, baseOptions);
      }
export function useGetDiscordOauthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDiscordOauthUrlQuery, GetDiscordOauthUrlQueryVariables>) {
          return Apollo.useLazyQuery<GetDiscordOauthUrlQuery, GetDiscordOauthUrlQueryVariables>(GetDiscordOauthUrlDocument, baseOptions);
        }
export type GetDiscordOauthUrlQueryHookResult = ReturnType<typeof useGetDiscordOauthUrlQuery>;
export type GetDiscordOauthUrlLazyQueryHookResult = ReturnType<typeof useGetDiscordOauthUrlLazyQuery>;
export type GetDiscordOauthUrlQueryResult = Apollo.QueryResult<GetDiscordOauthUrlQuery, GetDiscordOauthUrlQueryVariables>;
export function refetchGetDiscordOauthUrlQuery(variables?: GetDiscordOauthUrlQueryVariables) {
      return { query: GetDiscordOauthUrlDocument, variables: variables }
    }
export const ToggleFavoriteDocument = gql`
    mutation ToggleFavorite($productId: String!) {
  toggleFavorite(productId: $productId)
}
    `;
export type ToggleFavoriteMutationFn = Apollo.MutationFunction<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;

/**
 * __useToggleFavoriteMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteMutation, { data, loading, error }] = useToggleFavoriteMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useToggleFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>) {
        return Apollo.useMutation<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>(ToggleFavoriteDocument, baseOptions);
      }
export type ToggleFavoriteMutationHookResult = ReturnType<typeof useToggleFavoriteMutation>;
export type ToggleFavoriteMutationResult = Apollo.MutationResult<ToggleFavoriteMutation>;
export type ToggleFavoriteMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;
export const GetFavoritesForUserDocument = gql`
    query GetFavoritesForUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    favorites {
      id
      images
      name
      owner {
        displayName
        username
      }
    }
  }
}
    `;

/**
 * __useGetFavoritesForUserQuery__
 *
 * To run a query within a React component, call `useGetFavoritesForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritesForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritesForUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetFavoritesForUserQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoritesForUserQuery, GetFavoritesForUserQueryVariables>) {
        return Apollo.useQuery<GetFavoritesForUserQuery, GetFavoritesForUserQueryVariables>(GetFavoritesForUserDocument, baseOptions);
      }
export function useGetFavoritesForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoritesForUserQuery, GetFavoritesForUserQueryVariables>) {
          return Apollo.useLazyQuery<GetFavoritesForUserQuery, GetFavoritesForUserQueryVariables>(GetFavoritesForUserDocument, baseOptions);
        }
export type GetFavoritesForUserQueryHookResult = ReturnType<typeof useGetFavoritesForUserQuery>;
export type GetFavoritesForUserLazyQueryHookResult = ReturnType<typeof useGetFavoritesForUserLazyQuery>;
export type GetFavoritesForUserQueryResult = Apollo.QueryResult<GetFavoritesForUserQuery, GetFavoritesForUserQueryVariables>;
export function refetchGetFavoritesForUserQuery(variables?: GetFavoritesForUserQueryVariables) {
      return { query: GetFavoritesForUserDocument, variables: variables }
    }
export const GetFilesDocument = gql`
    query GetFiles($where: QueryFilesWhereInput!) {
  files(where: $where) {
    id
    createdAt
    name
    url
  }
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, baseOptions);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, baseOptions);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export function refetchGetFilesQuery(variables?: GetFilesQueryVariables) {
      return { query: GetFilesDocument, variables: variables }
    }
export const GetImagesDocument = gql`
    query GetImages($where: QueryImagesWhereInput!) {
  images(where: $where) {
    id
    url
  }
}
    `;

/**
 * __useGetImagesQuery__
 *
 * To run a query within a React component, call `useGetImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetImagesQuery(baseOptions?: Apollo.QueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
        return Apollo.useQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, baseOptions);
      }
export function useGetImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
          return Apollo.useLazyQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, baseOptions);
        }
export type GetImagesQueryHookResult = ReturnType<typeof useGetImagesQuery>;
export type GetImagesLazyQueryHookResult = ReturnType<typeof useGetImagesLazyQuery>;
export type GetImagesQueryResult = Apollo.QueryResult<GetImagesQuery, GetImagesQueryVariables>;
export function refetchGetImagesQuery(variables?: GetImagesQueryVariables) {
      return { query: GetImagesDocument, variables: variables }
    }
export const MySalesDocument = gql`
    query MySales {
  mySales {
    id
    createdAt
    amount
    product {
      id
      createdAt
      name
      owner {
        id
      }
    }
  }
}
    `;

/**
 * __useMySalesQuery__
 *
 * To run a query within a React component, call `useMySalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMySalesQuery(baseOptions?: Apollo.QueryHookOptions<MySalesQuery, MySalesQueryVariables>) {
        return Apollo.useQuery<MySalesQuery, MySalesQueryVariables>(MySalesDocument, baseOptions);
      }
export function useMySalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MySalesQuery, MySalesQueryVariables>) {
          return Apollo.useLazyQuery<MySalesQuery, MySalesQueryVariables>(MySalesDocument, baseOptions);
        }
export type MySalesQueryHookResult = ReturnType<typeof useMySalesQuery>;
export type MySalesLazyQueryHookResult = ReturnType<typeof useMySalesLazyQuery>;
export type MySalesQueryResult = Apollo.QueryResult<MySalesQuery, MySalesQueryVariables>;
export function refetchMySalesQuery(variables?: MySalesQueryVariables) {
      return { query: MySalesDocument, variables: variables }
    }
export const CreateProductDocument = gql`
    mutation CreateProduct($data: ProductCreateInput!) {
  createOneProduct(data: $data) {
    ...productFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {
  updateOneProduct(where: $where, data: $data) {
    ...productFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreatePromoCodeDocument = gql`
    mutation CreatePromoCode($data: PromoCodeCreateInput!) {
  createOnePromoCode(data: $data) {
    ...promoCodeFragment
  }
}
    ${PromoCodeFragmentFragmentDoc}`;
export type CreatePromoCodeMutationFn = Apollo.MutationFunction<CreatePromoCodeMutation, CreatePromoCodeMutationVariables>;

/**
 * __useCreatePromoCodeMutation__
 *
 * To run a mutation, you first call `useCreatePromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromoCodeMutation, { data, loading, error }] = useCreatePromoCodeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePromoCodeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePromoCodeMutation, CreatePromoCodeMutationVariables>) {
        return Apollo.useMutation<CreatePromoCodeMutation, CreatePromoCodeMutationVariables>(CreatePromoCodeDocument, baseOptions);
      }
export type CreatePromoCodeMutationHookResult = ReturnType<typeof useCreatePromoCodeMutation>;
export type CreatePromoCodeMutationResult = Apollo.MutationResult<CreatePromoCodeMutation>;
export type CreatePromoCodeMutationOptions = Apollo.BaseMutationOptions<CreatePromoCodeMutation, CreatePromoCodeMutationVariables>;
export const DeleteOnePromoCodeDocument = gql`
    mutation DeleteOnePromoCode($where: PromoCodeWhereUniqueInput!) {
  deleteOnePromoCode(where: $where) {
    id
  }
}
    `;
export type DeleteOnePromoCodeMutationFn = Apollo.MutationFunction<DeleteOnePromoCodeMutation, DeleteOnePromoCodeMutationVariables>;

/**
 * __useDeleteOnePromoCodeMutation__
 *
 * To run a mutation, you first call `useDeleteOnePromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePromoCodeMutation, { data, loading, error }] = useDeleteOnePromoCodeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOnePromoCodeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOnePromoCodeMutation, DeleteOnePromoCodeMutationVariables>) {
        return Apollo.useMutation<DeleteOnePromoCodeMutation, DeleteOnePromoCodeMutationVariables>(DeleteOnePromoCodeDocument, baseOptions);
      }
export type DeleteOnePromoCodeMutationHookResult = ReturnType<typeof useDeleteOnePromoCodeMutation>;
export type DeleteOnePromoCodeMutationResult = Apollo.MutationResult<DeleteOnePromoCodeMutation>;
export type DeleteOnePromoCodeMutationOptions = Apollo.BaseMutationOptions<DeleteOnePromoCodeMutation, DeleteOnePromoCodeMutationVariables>;
export const PromoCodesDocument = gql`
    query PromoCodes($where: QueryPromoCodesWhereInput!) {
  promoCodes(where: $where) {
    ...promoCodeFragment
  }
}
    ${PromoCodeFragmentFragmentDoc}`;

/**
 * __usePromoCodesQuery__
 *
 * To run a query within a React component, call `usePromoCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromoCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromoCodesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePromoCodesQuery(baseOptions?: Apollo.QueryHookOptions<PromoCodesQuery, PromoCodesQueryVariables>) {
        return Apollo.useQuery<PromoCodesQuery, PromoCodesQueryVariables>(PromoCodesDocument, baseOptions);
      }
export function usePromoCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromoCodesQuery, PromoCodesQueryVariables>) {
          return Apollo.useLazyQuery<PromoCodesQuery, PromoCodesQueryVariables>(PromoCodesDocument, baseOptions);
        }
export type PromoCodesQueryHookResult = ReturnType<typeof usePromoCodesQuery>;
export type PromoCodesLazyQueryHookResult = ReturnType<typeof usePromoCodesLazyQuery>;
export type PromoCodesQueryResult = Apollo.QueryResult<PromoCodesQuery, PromoCodesQueryVariables>;
export function refetchPromoCodesQuery(variables?: PromoCodesQueryVariables) {
      return { query: PromoCodesDocument, variables: variables }
    }
export const RequestWithdrawDocument = gql`
    mutation RequestWithdraw($id: String!) {
  requestWithdraw(id: $id)
}
    `;
export type RequestWithdrawMutationFn = Apollo.MutationFunction<RequestWithdrawMutation, RequestWithdrawMutationVariables>;

/**
 * __useRequestWithdrawMutation__
 *
 * To run a mutation, you first call `useRequestWithdrawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestWithdrawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestWithdrawMutation, { data, loading, error }] = useRequestWithdrawMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRequestWithdrawMutation(baseOptions?: Apollo.MutationHookOptions<RequestWithdrawMutation, RequestWithdrawMutationVariables>) {
        return Apollo.useMutation<RequestWithdrawMutation, RequestWithdrawMutationVariables>(RequestWithdrawDocument, baseOptions);
      }
export type RequestWithdrawMutationHookResult = ReturnType<typeof useRequestWithdrawMutation>;
export type RequestWithdrawMutationResult = Apollo.MutationResult<RequestWithdrawMutation>;
export type RequestWithdrawMutationOptions = Apollo.BaseMutationOptions<RequestWithdrawMutation, RequestWithdrawMutationVariables>;
export const WithdrawsDocument = gql`
    query Withdraws($where: QueryWithdrawsWhereInput) {
  withdraws(where: $where) {
    id
    approved
    createdAt
  }
}
    `;

/**
 * __useWithdrawsQuery__
 *
 * To run a query within a React component, call `useWithdrawsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWithdrawsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWithdrawsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useWithdrawsQuery(baseOptions?: Apollo.QueryHookOptions<WithdrawsQuery, WithdrawsQueryVariables>) {
        return Apollo.useQuery<WithdrawsQuery, WithdrawsQueryVariables>(WithdrawsDocument, baseOptions);
      }
export function useWithdrawsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WithdrawsQuery, WithdrawsQueryVariables>) {
          return Apollo.useLazyQuery<WithdrawsQuery, WithdrawsQueryVariables>(WithdrawsDocument, baseOptions);
        }
export type WithdrawsQueryHookResult = ReturnType<typeof useWithdrawsQuery>;
export type WithdrawsLazyQueryHookResult = ReturnType<typeof useWithdrawsLazyQuery>;
export type WithdrawsQueryResult = Apollo.QueryResult<WithdrawsQuery, WithdrawsQueryVariables>;
export function refetchWithdrawsQuery(variables?: WithdrawsQueryVariables) {
      return { query: WithdrawsDocument, variables: variables }
    }
export const OneTimeCodesDocument = gql`
    query OneTimeCodes($where: QueryOneTimeCodesWhereInput) {
  oneTimeCodes(where: $where) {
    id
    expired
  }
}
    `;

/**
 * __useOneTimeCodesQuery__
 *
 * To run a query within a React component, call `useOneTimeCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneTimeCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneTimeCodesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOneTimeCodesQuery(baseOptions?: Apollo.QueryHookOptions<OneTimeCodesQuery, OneTimeCodesQueryVariables>) {
        return Apollo.useQuery<OneTimeCodesQuery, OneTimeCodesQueryVariables>(OneTimeCodesDocument, baseOptions);
      }
export function useOneTimeCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneTimeCodesQuery, OneTimeCodesQueryVariables>) {
          return Apollo.useLazyQuery<OneTimeCodesQuery, OneTimeCodesQueryVariables>(OneTimeCodesDocument, baseOptions);
        }
export type OneTimeCodesQueryHookResult = ReturnType<typeof useOneTimeCodesQuery>;
export type OneTimeCodesLazyQueryHookResult = ReturnType<typeof useOneTimeCodesLazyQuery>;
export type OneTimeCodesQueryResult = Apollo.QueryResult<OneTimeCodesQuery, OneTimeCodesQueryVariables>;
export function refetchOneTimeCodesQuery(variables?: OneTimeCodesQueryVariables) {
      return { query: OneTimeCodesDocument, variables: variables }
    }
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token)
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String!) {
  resetPassword(email: $email)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const GetRandomAdDocument = gql`
    query GetRandomAd {
  getRandomAd {
    product {
      ...productDisplayFragment
      owner {
        ...userDisplayFragment
      }
    }
  }
}
    ${ProductDisplayFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useGetRandomAdQuery__
 *
 * To run a query within a React component, call `useGetRandomAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomAdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRandomAdQuery(baseOptions?: Apollo.QueryHookOptions<GetRandomAdQuery, GetRandomAdQueryVariables>) {
        return Apollo.useQuery<GetRandomAdQuery, GetRandomAdQueryVariables>(GetRandomAdDocument, baseOptions);
      }
export function useGetRandomAdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomAdQuery, GetRandomAdQueryVariables>) {
          return Apollo.useLazyQuery<GetRandomAdQuery, GetRandomAdQueryVariables>(GetRandomAdDocument, baseOptions);
        }
export type GetRandomAdQueryHookResult = ReturnType<typeof useGetRandomAdQuery>;
export type GetRandomAdLazyQueryHookResult = ReturnType<typeof useGetRandomAdLazyQuery>;
export type GetRandomAdQueryResult = Apollo.QueryResult<GetRandomAdQuery, GetRandomAdQueryVariables>;
export function refetchGetRandomAdQuery(variables?: GetRandomAdQueryVariables) {
      return { query: GetRandomAdDocument, variables: variables }
    }
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ProductDocument = gql`
    query Product($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    ...productFragment
    tags {
      id
      name
    }
    owner {
      ...userDisplayFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export function refetchProductQuery(variables?: ProductQueryVariables) {
      return { query: ProductDocument, variables: variables }
    }
export const ProductCountDocument = gql`
    query ProductCount($username: String) {
  productCount(username: $username)
}
    `;

/**
 * __useProductCountQuery__
 *
 * To run a query within a React component, call `useProductCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCountQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useProductCountQuery(baseOptions?: Apollo.QueryHookOptions<ProductCountQuery, ProductCountQueryVariables>) {
        return Apollo.useQuery<ProductCountQuery, ProductCountQueryVariables>(ProductCountDocument, baseOptions);
      }
export function useProductCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCountQuery, ProductCountQueryVariables>) {
          return Apollo.useLazyQuery<ProductCountQuery, ProductCountQueryVariables>(ProductCountDocument, baseOptions);
        }
export type ProductCountQueryHookResult = ReturnType<typeof useProductCountQuery>;
export type ProductCountLazyQueryHookResult = ReturnType<typeof useProductCountLazyQuery>;
export type ProductCountQueryResult = Apollo.QueryResult<ProductCountQuery, ProductCountQueryVariables>;
export function refetchProductCountQuery(variables?: ProductCountQueryVariables) {
      return { query: ProductCountDocument, variables: variables }
    }
export const ProductImageDocument = gql`
    query ProductImage($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    images
  }
}
    `;

/**
 * __useProductImageQuery__
 *
 * To run a query within a React component, call `useProductImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductImageQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductImageQuery(baseOptions?: Apollo.QueryHookOptions<ProductImageQuery, ProductImageQueryVariables>) {
        return Apollo.useQuery<ProductImageQuery, ProductImageQueryVariables>(ProductImageDocument, baseOptions);
      }
export function useProductImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductImageQuery, ProductImageQueryVariables>) {
          return Apollo.useLazyQuery<ProductImageQuery, ProductImageQueryVariables>(ProductImageDocument, baseOptions);
        }
export type ProductImageQueryHookResult = ReturnType<typeof useProductImageQuery>;
export type ProductImageLazyQueryHookResult = ReturnType<typeof useProductImageLazyQuery>;
export type ProductImageQueryResult = Apollo.QueryResult<ProductImageQuery, ProductImageQueryVariables>;
export function refetchProductImageQuery(variables?: ProductImageQueryVariables) {
      return { query: ProductImageDocument, variables: variables }
    }
export const ProductPriceDocument = gql`
    query ProductPrice($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    amount
  }
}
    `;

/**
 * __useProductPriceQuery__
 *
 * To run a query within a React component, call `useProductPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPriceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductPriceQuery(baseOptions?: Apollo.QueryHookOptions<ProductPriceQuery, ProductPriceQueryVariables>) {
        return Apollo.useQuery<ProductPriceQuery, ProductPriceQueryVariables>(ProductPriceDocument, baseOptions);
      }
export function useProductPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductPriceQuery, ProductPriceQueryVariables>) {
          return Apollo.useLazyQuery<ProductPriceQuery, ProductPriceQueryVariables>(ProductPriceDocument, baseOptions);
        }
export type ProductPriceQueryHookResult = ReturnType<typeof useProductPriceQuery>;
export type ProductPriceLazyQueryHookResult = ReturnType<typeof useProductPriceLazyQuery>;
export type ProductPriceQueryResult = Apollo.QueryResult<ProductPriceQuery, ProductPriceQueryVariables>;
export function refetchProductPriceQuery(variables?: ProductPriceQueryVariables) {
      return { query: ProductPriceDocument, variables: variables }
    }
export const ProductsDocument = gql`
    query Products($where: QueryProductsWhereInput, $orderBy: [QueryProductsOrderByInput!], $after: ProductWhereUniqueInput, $first: Int) {
  products(where: $where, orderBy: $orderBy, after: $after, first: $first) {
    ...productDisplayFragment
    owner {
      ...userDisplayFragment
    }
  }
}
    ${ProductDisplayFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export function refetchProductsQuery(variables?: ProductsQueryVariables) {
      return { query: ProductsDocument, variables: variables }
    }
export const CreateReportDocument = gql`
    mutation CreateReport($data: ReportCreateInput!) {
  createOneReport(data: $data) {
    id
  }
}
    `;
export type CreateReportMutationFn = Apollo.MutationFunction<CreateReportMutation, CreateReportMutationVariables>;

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateReportMutation, CreateReportMutationVariables>) {
        return Apollo.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument, baseOptions);
      }
export type CreateReportMutationHookResult = ReturnType<typeof useCreateReportMutation>;
export type CreateReportMutationResult = Apollo.MutationResult<CreateReportMutation>;
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<CreateReportMutation, CreateReportMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($data: ReviewCreateInput!) {
  createOneReview(data: $data) {
    ...reviewFragment
  }
}
    ${ReviewFragmentFragmentDoc}`;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const ReviewsDocument = gql`
    query Reviews($where: QueryReviewsWhereInput!, $orderBy: [ReviewOrderByInput!]) {
  reviews(where: $where, orderBy: $orderBy) {
    ...reviewFragment
  }
}
    ${ReviewFragmentFragmentDoc}`;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, baseOptions);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, baseOptions);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export function refetchReviewsQuery(variables?: ReviewsQueryVariables) {
      return { query: ReviewsDocument, variables: variables }
    }
export const ChangePasswordWithTokenDocument = gql`
    mutation ChangePasswordWithToken($token: String!, $newPassword: String!, $confirmPassword: String!) {
  changePasswordWithToken(token: $token, newPassword: $newPassword, confirmPassword: $confirmPassword)
}
    `;
export type ChangePasswordWithTokenMutationFn = Apollo.MutationFunction<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>;

/**
 * __useChangePasswordWithTokenMutation__
 *
 * To run a mutation, you first call `useChangePasswordWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordWithTokenMutation, { data, loading, error }] = useChangePasswordWithTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useChangePasswordWithTokenMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>) {
        return Apollo.useMutation<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>(ChangePasswordWithTokenDocument, baseOptions);
      }
export type ChangePasswordWithTokenMutationHookResult = ReturnType<typeof useChangePasswordWithTokenMutation>;
export type ChangePasswordWithTokenMutationResult = Apollo.MutationResult<ChangePasswordWithTokenMutation>;
export type ChangePasswordWithTokenMutationOptions = Apollo.BaseMutationOptions<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>;
export const ResendVerificationEmailDocument = gql`
    mutation resendVerificationEmail($email: String!) {
  resendVerificationEmail(email: $email)
}
    `;
export type ResendVerificationEmailMutationFn = Apollo.MutationFunction<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;

/**
 * __useResendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useResendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationEmailMutation, { data, loading, error }] = useResendVerificationEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendVerificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>) {
        return Apollo.useMutation<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(ResendVerificationEmailDocument, baseOptions);
      }
export type ResendVerificationEmailMutationHookResult = ReturnType<typeof useResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationResult = Apollo.MutationResult<ResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!, $confirmPassword: String!) {
  signup(email: $email, username: $username, password: $password, confirmPassword: $confirmPassword) {
    ...authPayloadFragment
  }
}
    ${AuthPayloadFragmentFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const TaggedProductsDocument = gql`
    query TaggedProducts($id: String!, $first: Int!, $after: ProductWhereUniqueInput, $where: TagProductsWhereInput) {
  tag(where: {id: $id}) {
    id
    name
    products(first: $first, after: $after, where: $where) {
      ...productFragment
      owner {
        ...userDisplayFragment
      }
    }
  }
}
    ${ProductFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useTaggedProductsQuery__
 *
 * To run a query within a React component, call `useTaggedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaggedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaggedProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTaggedProductsQuery(baseOptions?: Apollo.QueryHookOptions<TaggedProductsQuery, TaggedProductsQueryVariables>) {
        return Apollo.useQuery<TaggedProductsQuery, TaggedProductsQueryVariables>(TaggedProductsDocument, baseOptions);
      }
export function useTaggedProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaggedProductsQuery, TaggedProductsQueryVariables>) {
          return Apollo.useLazyQuery<TaggedProductsQuery, TaggedProductsQueryVariables>(TaggedProductsDocument, baseOptions);
        }
export type TaggedProductsQueryHookResult = ReturnType<typeof useTaggedProductsQuery>;
export type TaggedProductsLazyQueryHookResult = ReturnType<typeof useTaggedProductsLazyQuery>;
export type TaggedProductsQueryResult = Apollo.QueryResult<TaggedProductsQuery, TaggedProductsQueryVariables>;
export function refetchTaggedProductsQuery(variables?: TaggedProductsQueryVariables) {
      return { query: TaggedProductsDocument, variables: variables }
    }
export const UpdateUserDocument = gql`
    mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    ...userFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const UserDisplayDocument = gql`
    query UserDisplay($where: UserWhereUniqueInput!) {
  user(where: $where) {
    ...userDisplayFragment
  }
}
    ${UserDisplayFragmentFragmentDoc}`;

/**
 * __useUserDisplayQuery__
 *
 * To run a query within a React component, call `useUserDisplayQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDisplayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDisplayQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserDisplayQuery(baseOptions?: Apollo.QueryHookOptions<UserDisplayQuery, UserDisplayQueryVariables>) {
        return Apollo.useQuery<UserDisplayQuery, UserDisplayQueryVariables>(UserDisplayDocument, baseOptions);
      }
export function useUserDisplayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDisplayQuery, UserDisplayQueryVariables>) {
          return Apollo.useLazyQuery<UserDisplayQuery, UserDisplayQueryVariables>(UserDisplayDocument, baseOptions);
        }
export type UserDisplayQueryHookResult = ReturnType<typeof useUserDisplayQuery>;
export type UserDisplayLazyQueryHookResult = ReturnType<typeof useUserDisplayLazyQuery>;
export type UserDisplayQueryResult = Apollo.QueryResult<UserDisplayQuery, UserDisplayQueryVariables>;
export function refetchUserDisplayQuery(variables?: UserDisplayQueryVariables) {
      return { query: UserDisplayDocument, variables: variables }
    }
export const UserBalanceDocument = gql`
    query UserBalance($where: UserWhereUniqueInput!) {
  user(where: $where) {
    ...userBalanceFragment
  }
}
    ${UserBalanceFragmentFragmentDoc}`;

/**
 * __useUserBalanceQuery__
 *
 * To run a query within a React component, call `useUserBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBalanceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserBalanceQuery(baseOptions?: Apollo.QueryHookOptions<UserBalanceQuery, UserBalanceQueryVariables>) {
        return Apollo.useQuery<UserBalanceQuery, UserBalanceQueryVariables>(UserBalanceDocument, baseOptions);
      }
export function useUserBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBalanceQuery, UserBalanceQueryVariables>) {
          return Apollo.useLazyQuery<UserBalanceQuery, UserBalanceQueryVariables>(UserBalanceDocument, baseOptions);
        }
export type UserBalanceQueryHookResult = ReturnType<typeof useUserBalanceQuery>;
export type UserBalanceLazyQueryHookResult = ReturnType<typeof useUserBalanceLazyQuery>;
export type UserBalanceQueryResult = Apollo.QueryResult<UserBalanceQuery, UserBalanceQueryVariables>;
export function refetchUserBalanceQuery(variables?: UserBalanceQueryVariables) {
      return { query: UserBalanceDocument, variables: variables }
    }
export const UserProductsDocument = gql`
    query UserProducts($where: UserWhereUniqueInput!, $orderBy: [UserProductsOrderByInput!], $after: ProductWhereUniqueInput, $first: Int, $productsWhere: UserProductsWhereInput) {
  user(where: $where) {
    productQuotaPercent
    storageQuotaPercent
    products(where: $productsWhere, orderBy: $orderBy, after: $after, first: $first) {
      ...productDisplayFragment
      tags {
        id
        name
      }
      owner {
        ...userDisplayFragment
      }
    }
  }
}
    ${ProductDisplayFragmentFragmentDoc}
${UserDisplayFragmentFragmentDoc}`;

/**
 * __useUserProductsQuery__
 *
 * To run a query within a React component, call `useUserProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      productsWhere: // value for 'productsWhere'
 *   },
 * });
 */
export function useUserProductsQuery(baseOptions?: Apollo.QueryHookOptions<UserProductsQuery, UserProductsQueryVariables>) {
        return Apollo.useQuery<UserProductsQuery, UserProductsQueryVariables>(UserProductsDocument, baseOptions);
      }
export function useUserProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProductsQuery, UserProductsQueryVariables>) {
          return Apollo.useLazyQuery<UserProductsQuery, UserProductsQueryVariables>(UserProductsDocument, baseOptions);
        }
export type UserProductsQueryHookResult = ReturnType<typeof useUserProductsQuery>;
export type UserProductsLazyQueryHookResult = ReturnType<typeof useUserProductsLazyQuery>;
export type UserProductsQueryResult = Apollo.QueryResult<UserProductsQuery, UserProductsQueryVariables>;
export function refetchUserProductsQuery(variables?: UserProductsQueryVariables) {
      return { query: UserProductsDocument, variables: variables }
    }
export const VerifyWithdrawDocument = gql`
    mutation VerifyWithdraw($token: String!) {
  verifyWithdraw(token: $token)
}
    `;
export type VerifyWithdrawMutationFn = Apollo.MutationFunction<VerifyWithdrawMutation, VerifyWithdrawMutationVariables>;

/**
 * __useVerifyWithdrawMutation__
 *
 * To run a mutation, you first call `useVerifyWithdrawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyWithdrawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyWithdrawMutation, { data, loading, error }] = useVerifyWithdrawMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyWithdrawMutation(baseOptions?: Apollo.MutationHookOptions<VerifyWithdrawMutation, VerifyWithdrawMutationVariables>) {
        return Apollo.useMutation<VerifyWithdrawMutation, VerifyWithdrawMutationVariables>(VerifyWithdrawDocument, baseOptions);
      }
export type VerifyWithdrawMutationHookResult = ReturnType<typeof useVerifyWithdrawMutation>;
export type VerifyWithdrawMutationResult = Apollo.MutationResult<VerifyWithdrawMutation>;
export type VerifyWithdrawMutationOptions = Apollo.BaseMutationOptions<VerifyWithdrawMutation, VerifyWithdrawMutationVariables>;