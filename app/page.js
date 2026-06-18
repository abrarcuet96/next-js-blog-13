import PostCard from "@/components/PostCard";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12",
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Posts</h1>
        <p className="text-gray-500 mt-1">Thoughts, tutorials and ideas.</p>
      </div>
      <div className="space-y-4 grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
