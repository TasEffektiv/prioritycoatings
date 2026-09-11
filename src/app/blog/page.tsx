import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { POSTS, paginate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Painting And Decorating Blog By Priority One Coatings",
  description:
    "Visit our painting and decorating blog page frequently for industry updates, news, DIY info, and painting and renovation tips and tricks from our experts.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const { items, totalPages } = paginate(POSTS, 1);

  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader path="/blog" title="Blog" />

        <section className="bg-[#f6f7fc] pb-[60px] pt-[50px] lg:pt-[80px]">
          <div className="mx-auto max-w-[1430px] px-[15px]">
            <div className="flex flex-col gap-[25px] lg:flex-row">
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] sm:grid-cols-2">
                  {items.map((post) => (
                    <PostCard key={post.href} post={post} />
                  ))}
                </div>

                <BlogPagination currentPage={1} totalPages={totalPages} basePath="/blog" />
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
