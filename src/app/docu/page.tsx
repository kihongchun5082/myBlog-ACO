import FilterablePosts from "@/components/FilterablePosts";
import { getAllPost } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '전기홍 글',
  description: '국민 건강수명 연장을 위해 우리가 해야 할 것에 대한 글'
}

export default async function Docu() {
  const posts = await getAllPost();
  // console.log('posts;', posts)
  const postCategory = posts.map((post) => post.category)
  // console.log('postCategory;', postCategory)
  const categories = [...new Set(postCategory)]
  // console.log('categories;', categories)
  // const newSet = new Set(posts.map((post) => post.category))
  return <FilterablePosts posts={posts} categories={categories} />
}

// tsconfig.json에  "downlevelIteration": true, 를 추가해야 타입스크립트 이터레이션 Set() 가능9   함