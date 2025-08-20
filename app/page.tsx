import EmbedPage from "../components/EmbedPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative pt-5 w-screen h-screen">
      <Image
        src="/wrapper.png"
        alt="배경"
        fill
        className="object-cover -z-10"
      />
      <div className="z-10 absolute right-4 top-4 lg:right-50 lg:top-8">
        <div
          className="bg-black rounded-lg overflow-hidden shadow-2xl"
          style={{
            width: "min(375px, 90vw)",
            height: "min(812px, calc(90vw * 812 / 375))",
            aspectRatio: "375 / 812",
          }}
        >
          <EmbedPage url="https://noonchi.ai.kr" />
        </div>
      </div>
    </div>
  );
}
