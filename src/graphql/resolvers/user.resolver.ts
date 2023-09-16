import { Arg, Mutation, Query, Resolver } from "type-graphql";
import type { Context } from "../types/context";
import UserService from "../services/user.service";
import { CreateParentInput, User } from "../schemas/user.schema";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  CreateParent(@Arg("input") input: CreateParentInput) {
    return this.userService.createParent(input);
  }

  @Query(() => User, { nullable: true })
  GetCurrentUser(context: Context) {
    return this.userService.getCurrentUser(context);
  }
}
