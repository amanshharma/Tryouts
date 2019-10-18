const posts = [
  { id: 11, title: "one", body: "aaaa", published: true, author: 1 },
  { id: 12, title: "two", body: "aaaa", published: true, author: 1 },
  { id: 13, title: "three", body: "aaaa", published: true, author: 2 }
];

const users = [
  { id: 1, name: "aman", email: "a@gmail.com", age: 29, post: 12, comment: 21 },
  { id: 3, name: "aman", email: "a@gmail.com", age: 29, post: 12, comment: 21 },
  { id: 2, name: "aman", email: "a@gmail.com", age: 29, post: 13, comment: 21 }
];

const comments = [
  { id: 21, text: "comment1", author: 3 },
  { id: 22, text: "comment1", author: 3 },
  { id: 21, text: "comment1", author: 1 },
  { id: 24, text: "comment1", author: 2 },
  { id: 25, text: "comment1", author: 1 }
];

const db = {
  posts,
  users,
  comments
};

export { db as default };
