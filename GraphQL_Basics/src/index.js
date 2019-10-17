import { GraphQLServer } from "graphql-yoga";

const Posts = [
  { id: 11, title: "one", body: "aaaa", published: true, author: 1 },
  { id: 12, title: "two", body: "aaaa", published: true, author: 1 },
  { id: 13, title: "three", body: "aaaa", published: true, author: 2 }
];

const Users = [
  { id: 1, name: "aman", email: "a@gmail.com", age: 29, post: 12, comment: 21 },
  { id: 3, name: "aman", email: "a@gmail.com", age: 29, post: 12, comment: 21 },
  { id: 2, name: "aman", email: "a@gmail.com", age: 29, post: 13, comment: 21 }
];

const Comments = [
  { id: 21, text: "comment1", author: 3 },
  { id: 22, text: "comment1", author: 3 },
  { id: 21, text: "comment1", author: 1 },
  { id: 24, text: "comment1", author: 2 },
  { id: 25, text: "comment1", author: 1 }
];

const typeDefs = `
type Query {
  Users(query: String): [User!]!
  Posts(query: String): [Post!]!
  Comments(query: String): [Comment!]!
}

type Mutation {
  CreateUser(name: String, age: Int): User
}

type User {
  id: ID!
  name: String
  age: Int
  email: String
  post: [Post]
  comment: [Comment]
}

type Post {
  id: ID!
  title: String!
  body: String!
  published: Boolean!
  author: User
}

type Comment {
  id: ID!
  text: String!
  author: [User]
}
`;
const resolvers = {
  Query: {
    Posts() {
      return Posts;
    },

    Users() {
      return Users;
    },

    Comments() {
      return Comments;
    }
  },
  Mutation: {
    CreateUser(parent, args, ctx, info) {
      console.log("create user --", args);
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      console.log("parent", parent);
      return Users.find(user => parent.author === user.id);
    }
  },
  User: {
    post(parent, args, ctx, info) {
      return [Posts.find(post => parent.post === post.id)];
    },
    comment(parent, args, ctx, info) {
      console.log("parent.comment", parent.comment);
      //console.log('parent.comment',parent.comment);
      return Comments.filter(comment => {
        return parent.comment === comment.id;
      });
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return Users.map(user => parent.author === user.id);
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Server hasbeen started!!"));
