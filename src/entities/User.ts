import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Meta } from "./Common";
import { Field, Resolver, ObjectType, Query } from "type-graphql";

@ObjectType()
export class User {
	@Field()
	@Property()
	name: String;

	@Field((type) => Meta)
	@Property({ default: {}, _id: false })
	meta: Meta;
}

export const UserModel = getModelForClass(User);
