import { MainContainer } from "@/components/MainContainer";
import Image from "next/image";
import NotFound from "./not_found.png";

export default function NotFoundPage({
  params,
}: {
  params: { crumbId: string };
}) {
  return (
    <MainContainer>
      <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
        <Image className="m-auto mb-6 hover-grow" src={NotFound} alt="Logo" width={260} />
        <h1 className="text-dark-brown font-bold text-4xl">
          Nothing to see here
        </h1>
        <h3 className="text-middle-brown">
          Maybe you did something wrong ?
        </h3>
      </div>
    </MainContainer>
  );
}
