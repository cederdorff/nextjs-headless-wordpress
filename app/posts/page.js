export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`);
  const posts = await response.json();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </main>
  );
}
