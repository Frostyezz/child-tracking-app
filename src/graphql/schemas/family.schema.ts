import { Field, ObjectType } from "type-graphql";
import { ModelOptions, Severity, getModelForClass } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@ObjectType()
export class Family {
  @Field(() => String)
  readonly _id: string;
}

const FamilyModel = getModelForClass<typeof Family>(Family);
export default FamilyModel;
