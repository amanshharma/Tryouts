export default {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0;
      setInterval(() => {
        count++;
        pubsub.publish("count", {
          count
        });
      }, 1000);
      return pubsub.asyncIterator("count");
    }
  },
  comment: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      return pubsub.asyncIterator("comment");
    }
  }
};
