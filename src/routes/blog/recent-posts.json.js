import { getAllPosts, sortPostsByDate } from "./_posts.js";

export function get(req, res) {
  const posts = getAllPosts("src/posts");
  const sortedPosts = sortPostsByDate(posts).slice(0, 3);

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(sortedPosts));
}
