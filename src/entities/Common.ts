import { prop as Property, getModelForClass, Ref } from "@typegoose/typegoose";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Meta {
	@Field()
	@Property()
	createdAt?: Date;

	@Field((type) => User, { nullable: true })
	@Property({ ref: "User" })
	createdBy?: Ref<User>;
}

export const MetaModel = getModelForClass(Meta);
