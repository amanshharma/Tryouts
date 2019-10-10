import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
type Query {
  hello: String!
  country: String!
  greeting(name: String): String!
  add(a: Float, b: Float): Float!

}
`;
const resolvers = {
  Query: {
    hello() {
      return "Aman is here";
    },
    country() {
      return "India";
    },
    greeting(parent, args, ctx, info) {
      console.log("args", args);
      return "Hey yo";
    },
    add(parent, args, ctx, info) {
      const { a, b } = args;
      return a + b;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Server hasbeen started!!"));
