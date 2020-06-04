import "reflect-metadata";
import bodyParser from "body-parser";
import ExpressPlaygroundMiddleware from "graphql-playground-middleware-express";
import { buildSchema } from "type-graphql";
import { createGraphqlMiddleware } from "express-gql";
import express from "express";
import { OrganisationResolver } from "./entities/Org";
import { UserResolver } from "./entities/User";

(async function main() {
	const app = express();

	const schema = await buildSchema({
		resolvers: [OrganisationResolver, UserResolver],
		validate: {
			skipMissingProperties: false,
		},
	});

	app.post(
		"/graphql",
		bodyParser.json(),
		createGraphqlMiddleware({
			schema,
		})
	);

	app.get(
		"/playground",
		ExpressPlaygroundMiddleware({
			endpoint: "/graphql",
			settings: { "request.credentials": "include" } as any,
		})
	);

	const port: number = 4000;
	await app.listen(port);
})();
