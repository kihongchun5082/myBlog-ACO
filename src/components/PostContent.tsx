import { PostData } from "@/service/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiTwotoneCalendar } from 'react-icons/ai'

export default function PostContent({post}: {post: PostData}) {
  const { title, description, content, date } = post

  return (
    <section className=" bg-green-50 flex flex-col p-1 w-full">
        <div className=" flex items-center self-end text-sky-700">
          <AiTwotoneCalendar />
          <p className=" font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className=" text-3xl font-bold">{title}</h1>
        <p className=" text-xl font-bold">{description}</p>
        <div className=" w-44 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
  );
}

