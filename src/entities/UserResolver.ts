import { User } from "./User";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  async organisation(): Promise<User> {
    return {
      name: "username",
      meta: {
        createdAt: new Date(),
      },
    };
  }
}
