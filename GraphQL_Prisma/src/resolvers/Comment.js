export default {
  author(parent, args, { db }, info) {
    return db.users.map(user => parent.author === user.id);
  }
};
