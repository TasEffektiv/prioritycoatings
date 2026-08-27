import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col">
      <Link href={post.href} className="group relative block h-[270px] w-full overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex min-h-[180px] flex-col justify-center bg-white p-7">
        <h2 className="line-clamp-2 text-[23px] font-bold leading-[31px] text-black">
          <Link href={post.href} className="hover:text-brand-teal">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-black/70">
          {post.date} <span className="mx-1">&middot;</span> {post.readTime}
        </p>
      </div>
    </article>
  );
}
