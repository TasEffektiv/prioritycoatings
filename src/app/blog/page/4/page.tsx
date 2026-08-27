import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { POSTS, paginate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Page 4 | Priority One Coatings",
  description:
    "Painting and decorating tips, trends and expert advice from Priority One Coatings — Sydney's residential and commercial painting specialists.",
};

export default function BlogPageFour() {
  const { items, totalPages } = paginate(POSTS, 4);

  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Blog" />

        <section className="bg-[#f6f7fc] pb-[60px] pt-[50px] lg:pt-[80px]">
          <div className="mx-auto max-w-[1430px] px-[15px]">
            <div className="flex flex-col gap-[25px] lg:flex-row">
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] sm:grid-cols-2">
                  {items.map((post) => (
                    <PostCard key={post.href} post={post} />
                  ))}
                </div>

                <BlogPagination currentPage={4} totalPages={totalPages} basePath="/blog" />
              </div>

              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
