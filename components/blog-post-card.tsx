import Link from 'next/link';
import { BlogPost } from '@/lib/blog-data';
import { ArrowRight } from 'lucide-react';

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col h-full border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Meta Info */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
          {post.category}
        </span>
        <span>{post.readTime} min read</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 mb-4 flex-grow">
        {post.excerpt}
      </p>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* Read More Link */}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-gray-900 font-semibold group"
      >
        Read Article
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  );
}
