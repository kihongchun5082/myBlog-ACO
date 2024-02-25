import Image from "next/image";
import Link from "next/link";
import path from "path";
import profileImage from "../../public/전기홍_noBorder.png"
// import profileImage from "/Users/kihongchun/Library/Mobile Documents/com~apple~CloudDocs/myBlog/public/전기홍1.jpg"

export default function Hero() {
  return (
    // <section className="text-center mx-auto bg-slate-400">
    <section className='text-center p-2'>
      <Image
        src={profileImage}
        alt='전기홍 사진'
        className=" rounded-full mx-auto"
        width={250}
        height={250}
        priority
      />
      {/* <div className=" p-1 bg-yellow-300"> */}
      {/* <h3 className=" text-base">전기홍입니다. 예방의학을 전공했어요.</h3> */}
      <h2 className=" text-2xl font-bold mt-2 mb-2">
        {'안녕하십니까? 전기홍입니다.'}
      </h2>
      <h3 className=" text_2xl font-semibold mb-2">
        {'예방의학을 전공했습니다. 보건정책과 관리가 전문분야입니다.'}
      </h3>
      {/* <p className=" text-sm">저의 바람은 더 많은 사람들이 노년을 건강하고 행복하게 지내는겁니다.</p> */}
      <p className=" text-sm sm:text-base">저의 바람은 더 많은 사람들이 노년을 건강하고 행복하게 지내는겁니다.</p>
      {/* <p className=" text-sm">철학적이고 어려운 주제지만 영원히 추구해야 할 가치라고 생각해요.</p> */}
      <p className=" text-sm sm:text-base">철학적이고 어려운 주제지만 영원히 추구해야 할 가치라고 생각합니다.</p>
      {/* </div> */}
      <Link href='/contact'>
        {/* <button className="p-1 text-sm font-bold rounded-lg bg-yellow-500 border-violet-900 border-2">이멜 주소</button> */}
        <button className="font-bold rounded-xl bg-blue-500 py-1 px-4 mt-2">
          이멜 주소
        </button>
      </Link>
    </section>
  );
}
