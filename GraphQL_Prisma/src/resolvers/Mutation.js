import uuidv4 from "uuid/v4";

export default {
  async CreateUser(parent, args, { db, pubsub, prisma }, info) {
    // console.log("create user --", args);
    // const isEmailExists = db.users.some(user => user.email === args.data.email);
    // if (isEmailExists) throw new Error("Email already taken");
    // const user = {
    //   id: uuidv4(),
    //   name: args.data.name,
    //   age: args.data.age,
    //   email: args.data.email
    // };
    // db.users.push(user);
    // console.log("USER", user);
    // pubsub.publish("comment", {
    //   comment: user
    // });
    // return user;

    return prisma.mutation.createUser({ data: args.data }, info);
  },
  DeleteUser(parent, args, { db }, info) {
    console.log(args);
    return db.users.find(user => user.id == args.id);
  }
};
