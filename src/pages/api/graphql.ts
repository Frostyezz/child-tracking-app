import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import Cors from "cors";
import { verifyJwt } from "@/common/utils/jwt";
import { resolvers } from "@/graphql/resolvers";
import { Context } from "@/graphql/types/context";
import { User } from "@/graphql/schemas/user.schema";
import dbConnect from "@/common/utils/dbConnect";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  origin: [
    "https://studio.apollographql.com",
    "http://localhost:3000",
    "https://localhost",
    "https://safemode.vercel.app",
  ],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const schema = await buildSchema({
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: async (ctx: Context) => {
    if (ctx.req.cookies.SafemodeJWT) {
      const decoded = await verifyJwt<{
        _id: User["_id"];
        role: User["role"];
        familyId: User["familyId"];
      }>(ctx.req.cookies.SafemodeJWT);
      if (decoded) {
        ctx.userId = decoded._id;
        ctx.role = decoded.role;
      }
    }
    return ctx;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  await dbConnect();
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
