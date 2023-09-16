import { Context } from "@apollo/client";
import UserModel, { CreateParentInput } from "../schemas/user.schema";
import { ApolloError } from "apollo-server-micro";
import FamilyModel from "../schemas/family.schema";
import EmailValidationModel from "../schemas/emailValidation.schema";

class UserService {
  async createParent(input: CreateParentInput) {
    const isEmailUsed = !!(await UserModel.find()
      .findByEmail(input.email)
      .lean());
    if (isEmailUsed) throw new ApolloError("register.error.emailAlreadyUsed");

    // If user doesn't have familyId, create a new family
    if (!input?.familyId) {
      const [family] = await FamilyModel.create();
      const user = await UserModel.create({
        ...input,
        familyId: family?._id,
      });
      await EmailValidationModel.create({
        userId: user?._id,
      });

      return user;
    }

    const user = await UserModel.create(input);
    await EmailValidationModel.create({
      userId: user?._id,
    });

    return user;
  }

  async getCurrentUser(context: Context) {
    if (!context.userId) return null;

    const user = await UserModel.findById(context.userId).lean();
    return user;
  }
}

export default UserService;
