import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { POSTS, paginate, type Category } from "@/lib/blog";

const CATEGORY: Category = "Commercial Painting";
const categoryPosts = POSTS.filter((post) => post.categories.includes(CATEGORY));

export const metadata: Metadata = {
  title: "Commercial Painting | Blog | Page 4 | Priority One Coatings",
  description:
    "Commercial painting tips, guides and expert advice from Priority One Coatings — Sydney's residential and commercial painting specialists.",
};

export default function CommercialPaintingCategoryPageFour() {
  const { items, totalPages } = paginate(categoryPosts, 4);

  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title={CATEGORY} parent={{ label: "Blog", href: "/blog/" }} />

        <section className="bg-[#f6f7fc] pb-[60px] pt-[50px] lg:pt-[80px]">
          <div className="mx-auto max-w-[1430px] px-[15px]">
            <div className="flex flex-col gap-[25px] lg:flex-row">
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] sm:grid-cols-2">
                  {items.map((post) => (
                    <PostCard key={post.href} post={post} />
                  ))}
                </div>

                <BlogPagination
                  currentPage={4}
                  totalPages={totalPages}
                  basePath="/category/commercial-painting"
                />
              </div>

              <BlogSidebar activeCategory={CATEGORY} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
