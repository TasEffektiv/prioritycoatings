import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { POSTS, paginate, type Category } from "@/lib/blog";

const CATEGORY: Category = "Residential painting";
const categoryPosts = POSTS.filter((post) => post.categories.includes(CATEGORY));

export const metadata: Metadata = {
  title: "Residential Painting | Blog | Page 8 | Priority One Coatings",
  description:
    "Residential painting tips, guides and expert advice from Priority One Coatings — Sydney's residential and commercial painting specialists.",
};

export default function ResidentialPaintingCategoryPageEight() {
  const { items, totalPages } = paginate(categoryPosts, 8);

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
                  currentPage={8}
                  totalPages={totalPages}
                  basePath="/category/residential-painting"
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
