import EmbedPage from "../components/EmbedPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative pt-5 w-screen h-screen">
      <Image src="/www.png" alt="배경" fill className="object-cover -z-10" />
      <div className="w-[375px] h-[812px] z-10 absolute right-50 top-10">
        <EmbedPage url="https://noonchi.ai.kr" />
      </div>
    </div>
  );
}
