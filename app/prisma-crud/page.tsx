import PostForm from "./PostForm";
import { getPosts } from "./prisma-db";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default async function page() {
  const posts: Post[] = await getPosts();

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* create post */}
      <PostForm />

      {/* display posts */}
      <ul className="mt-8">
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
