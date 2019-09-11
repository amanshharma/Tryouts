import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
type Query {
  hello: String!
}
`;
const resolvers = {
  Query: {
    hello() {
      return "Aman is here";
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Server hasbeen started!!"));
