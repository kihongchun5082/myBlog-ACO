import Image from "next/image";
import Link from "next/link";
import path from "path";
import profileImage from "../../public/전기홍1.jpg"
// import profileImage from "/Users/kihongchun/Library/Mobile Documents/com~apple~CloudDocs/myBlog/public/전기홍1.jpg"

export default function Hero() {
  
  return (
    <section className="text-center mx-auto bg-slate-400">
      <Image
        // src="/전기홍1.jpg"
        src={profileImage}
        alt="전기홍 사진"
        className="mx-auto p-1"
        width={80}
        height={100}
      />
      <div className=" p-1 bg-yellow-300">
        <h3 className=" text-base">전기홍입니다. 예방의학을 전공했어요.</h3>
        <p className=" text-sm">저의 바람은 더 많은 사람들이 노년을 건강하고 행복하게 지내는겁니다.</p>
        <p className=" text-sm">철학적이고 어려운 주제지만 영원히 추구해야 할 가치라고 생각해요.</p>
      </div>
      <Link href="/contact">
        <button className="p-1 text-sm font-bold rounded-lg bg-yellow-500 border-violet-900 border-2">이멜 주소</button>
      </Link>
    </section>
  );
}
