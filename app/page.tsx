import EmbedPage from "../components/EmbedPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      {/* 데스크톱: 배경 이미지와 임베드 */}
      <div className="hidden md:block relative pt-5 w-full h-full">
        <Image
          src="/wrapper2.png"
          alt="배경"
          fill
          className="object-cover -z-10"
        />
        <div className="z-10 absolute right-4 top-4 lg:right-50 lg:top-18">
          <div
            className="bg-black rounded-lg overflow-hidden shadow-2xl"
            style={{
              width: "min(375px, 40vw)",
              height: "min(812px, calc(40vw * 812 / 375))",
              aspectRatio: "375 / 812",
            }}
          >
            <EmbedPage url="https://noonchi.ai.kr" />
          </div>
        </div>
      </div>

      {/* 모바일: EmbedPage만 전체 화면 */}
      <div className="md:hidden w-full h-full">
        <EmbedPage url="https://noonchi.ai.kr" />
      </div>
    </div>
  );
}
