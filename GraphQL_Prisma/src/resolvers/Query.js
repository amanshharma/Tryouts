export default {
  Posts(parent, args, { db, prisma }, info) {
    return db.posts;
  },

  Users(parent, args, { db, prisma }, info) {
    //return Users;
    return prisma.query.users(null, info);
  },

  Comments(parent, args, { db }, info) {
    return db.comments;
  }
};
