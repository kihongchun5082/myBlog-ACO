import { getAllPost, getFeaturedPost } from "../service/posts";
import DocuGrid from "./DocuGrid";

export default async function MyThoughts() {
  const posts = await getFeaturedPost()
  return (
    <section className=" my-4">
      <h2 className=" text-2xl font-bold my-2">나는 이렇게 생각해요.</h2>
      <DocuGrid posts={posts}/>
    </section>
  );
}

