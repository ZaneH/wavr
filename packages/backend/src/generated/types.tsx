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
