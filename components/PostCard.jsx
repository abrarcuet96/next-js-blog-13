import Link from "next/link";

const PostCard = ({ post }) => {
  const { id, title, tags, author, body, createdAt } = post ?? {};
  const { name } = author ?? {};

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <Link href={`/blog/${id}`}>
          {title && <h2 className="card-title">{title}</h2>}
        </Link>
        {body && <p>{body}</p>}
        <div className="card-actions justify-end">
          {tags &&
            tags?.map((tag) => (
              <div key={id} className="badge badge-outline">
                {tag}
              </div>
            ))}
        </div>
        {author && author.name && (
          <p className="text-xl italic font-semibold">{name}</p>
        )}
        {createdAt && <p className="text-xl">{createdAt}</p>}
      </div>
    </div>
  );
};

export default PostCard;
