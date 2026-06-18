import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) return null;
  return res.json();
}

const BlogDetailPage = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Post not found.</p>
        <Link
          href="/"
          className="text-indigo-600 hover:underline mt-2 inline-block"
        >
          ← Back to homepage
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-8">
      <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
        {post?.title}
      </h1>
      <p className="text-gray-700 leading-relaxed">{post?.body}</p>
      <Link
        href="/"
        className="inline-block mt-8 text-indigo-600 hover:underline text-sm"
      >
        ← Back to all posts
      </Link>
    </article>
  );
};

export default BlogDetailPage;
