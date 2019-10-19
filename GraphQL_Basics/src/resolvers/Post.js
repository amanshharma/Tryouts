export default {
  author(parent, args, { db }, info) {
    console.log("parent", parent);
    return db.users.find(user => parent.author === user.id);
  }
};
