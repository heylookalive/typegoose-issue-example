import { Org } from "./Org";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class OrganisationResolver {
  @Query((returns) => Org, { nullable: true })
  async organisation(): Promise<Org> {
    return {
      name: "org",
      meta: {
        createdAt: new Date(),
      },
    };
  }
}
