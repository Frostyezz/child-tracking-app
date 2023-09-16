import bcrypt from "bcrypt";
import {
  ModelOptions,
  ReturnModelType,
  Severity,
  getModelForClass,
  index,
  pre,
  prop,
  queryMethod,
} from "@typegoose/typegoose";
import { AsQueryMethod } from "@typegoose/typegoose/lib/types";
import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from "type-graphql";
import { FAMILY_ROLE, GENDER, LANGUAGE } from "../types/enums";
import { IsEmail, IsOptional, MaxLength, MinLength } from "class-validator";

registerEnumType(FAMILY_ROLE, {
  name: "FAMILY_ROLE",
});

registerEnumType(GENDER, {
  name: "GENDER",
});

registerEnumType(LANGUAGE, {
  name: "LANGUAGE",
});

interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
}

function findByEmail(
  this: ReturnModelType<typeof User, QueryHelpers>,
  email: User["email"]
) {
  return this.findOne({ email });
}

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@pre<User>("save", function () {
  if (!this.isModified("password") || !this.password) return;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password.trim(), salt);
  this.password = hash;
})
@index({ email: 1 })
@queryMethod(findByEmail)
@ObjectType()
export class User {
  @Field(() => String)
  readonly _id: string;

  @Field(() => String)
  @prop({ type: String, required: true, trim: true })
  familyId: string;

  @Field(() => String, { nullable: true })
  @prop({
    type: String,
    required: false,
    trim: true,
    unique: true,
    lowercase: true,
  })
  email?: string;

  @prop({ required: false, trim: true })
  password?: string;

  @Field(() => FAMILY_ROLE)
  @prop({
    type: String,
    enum: FAMILY_ROLE,
    required: true,
    default: FAMILY_ROLE.PARENT,
  })
  role: FAMILY_ROLE;

  @Field(() => String)
  @prop({ type: String, required: true, trim: true })
  firstName: string;

  @Field(() => String)
  @prop({ type: String, required: true, trim: true })
  lastName: string;

  @Field(() => String)
  @prop({ type: String, required: false, trim: true })
  avatar?: string;

  @Field(() => GENDER)
  @prop({
    type: String,
    enum: GENDER,
    required: true,
    default: GENDER.MALE,
  })
  gender: GENDER;

  @Field(() => LANGUAGE)
  @prop({
    type: String,
    enum: LANGUAGE,
    required: true,
    default: LANGUAGE.en,
  })
  language: LANGUAGE;

  @prop()
  scanId?: number;
}

const UserModel = getModelForClass<typeof User, QueryHelpers>(User);
export default UserModel;

@InputType()
export class CreateParentInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, {
    message: "Password must be at least 6 characters long",
  })
  @MaxLength(50, {
    message: "Password must not be longer than 50 characters",
  })
  @Field(() => String)
  password: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => GENDER)
  gender: GENDER;

  @Field(() => LANGUAGE)
  language: LANGUAGE;

  @IsOptional()
  @Field(() => String, { nullable: true })
  avatar?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  familyId?: string;
}
