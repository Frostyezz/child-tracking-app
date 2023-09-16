import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  prop,
  queryMethod,
} from "@typegoose/typegoose";
import { AsQueryMethod, ReturnModelType } from "@typegoose/typegoose/lib/types";
import { Max, Min } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";

interface QueryHelpers {
  findByUserId: AsQueryMethod<typeof findByUserId>;
}

function findByUserId(
  this: ReturnModelType<typeof EmailValidation, QueryHelpers>,
  userId: EmailValidation["userId"]
) {
  return this.findOne({ userId });
}

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ userId: 1 })
@queryMethod(findByUserId)
@ObjectType()
export class EmailValidation {
  @Field(() => String)
  readonly _id: string;

  @Field(() => String)
  @prop({ type: String, required: true })
  userId: string;

  @Field(() => Int)
  @prop({
    type: String,
    required: true,
    default: Math.floor(Math.random() * 9000 + 1000),
  })
  validationCode: number;

  @Field(() => Boolean)
  @prop({
    type: Boolean,
    required: true,
    default: false,
  })
  isVerified: boolean;
}

const EmailValidationModel = getModelForClass<
  typeof EmailValidation,
  QueryHelpers
>(EmailValidation);
export default EmailValidationModel;

@InputType()
export class VerifyEmailInput {
  @Min(1000)
  @Max(9999)
  @Field(() => Int)
  validationCode: number;
}
