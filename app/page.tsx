import EmbedPage from "../components/EmbedPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 데스크톱: 배경 이미지와 임베드 */}
      <div className="hidden md:flex relative w-full h-full items-start justify-end">
        <Image
          src="/wrapper2.png"
          alt="배경"
          fill
          className="object-cover -z-10"
        />
        <div
          className="z-10"
          style={{
            position: "absolute",
            right: "max(2rem, min(14rem, calc(100vw - 375px - 2rem)))",
            top: "max(2rem, min(3.5rem, calc(100vh - 812px - 2rem)))",
          }}
        >
          <div
            className="bg-black rounded-lg overflow-hidden shadow-2xl"
            style={{
              width: "min(375px, calc(100vw - 4rem))",
              height: "min(812px, calc(100vh - 4rem))",
              aspectRatio: "375 / 812",
              maxWidth: "375px",
              maxHeight: "812px",
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
