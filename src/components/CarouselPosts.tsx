import { getNonFeaturedPost } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import Link from "next/link";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPost()
  return (
    <section className=" my-4">
      <h2 className=" text-2xl font-bold m-2">참고 하십시오.</h2>
      <MultiCarousel>

        {posts.map((post) => (
          <li key={post.path}>
            <Link href={`/docu/${post.path}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}
      </MultiCarousel>
    </section>
  );
}
