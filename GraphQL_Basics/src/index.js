import { GraphQLServer } from "graphql-yoga";
import uuidv4 from "uuid/v4";
import db from "./db";

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
    CreateUser(parent, args, { db }, info) {
      console.log("create user --", args);
      const isEmailExists = db.users.some(
        user => user.email === args.data.email
      );
      if (isEmailExists) throw new Error("Email already taken");
      const user = {
        id: uuidv4(),
        name: args.data.name,
        age: args.data.age,
        email: args.data.email
      };
      db.users.push(user);
      return user;
    },
    DeleteUser(parent, args, { db }, info) {
      console.log(args);
      return db.users.find(user => user.id == args.id);
    }
  },
  Post: {
    author(parent, args, { db }, info) {
      console.log("parent", parent);
      return db.users.find(user => parent.author === user.id);
    }
  },
  User: {
    post(parent, args, { db }, info) {
      return [db.posts.find(post => parent.post === post.id)];
    },
    comment(parent, args, { db }, info) {
      console.log("parent.comment", parent.comment);
      //console.log('parent.comment',parent.comment);
      return db.comments.filter(comment => {
        return parent.comment === comment.id;
      });
    }
  },
  Comment: {
    author(parent, args, { db }, info) {
      return db.users.map(user => parent.author === user.id);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    db
  }
});

server.start(() => console.log("Server hasbeen started!!"));
