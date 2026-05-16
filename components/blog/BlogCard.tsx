import Link from "next/link";
import type { BlogPost } from "./types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-[#1A1F2E] rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors duration-300 group flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="bg-light-emerald/20 text-light-emerald text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.date}</span>
          {post.readTime && (
            <span className="text-gray-600 text-sm">{post.readTime} minuta lexim</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.description}
          </p>
        )}
        <Link
          href={`/blog/${post.id}`}
          className="text-light-emerald hover:underline font-medium text-sm inline-flex items-center gap-1 mt-auto"
        >
          Lexo Më Tepër →
        </Link>
      </div>
    </article>
  );
}
