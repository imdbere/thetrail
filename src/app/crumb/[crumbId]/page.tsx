import { MainContainer } from "@/components/MainContainer";
import Image from "next/image";
import { redirect } from "next/navigation";
import Logo from "../../logo.png";
import { validCrumbs } from "../validCrumbs";

const invitationLink = "https://discord.gg/xNBVzDYXXJ";

export default function CrumbPage({ params }: { params: { crumbId: string } }) {
  const crumb = validCrumbs.find((c) => c.code == params.crumbId);
  if (!crumb) {
    return redirect("/not-found");
  }

  return (
    <MainContainer>
      <div className="grow flex flex-col justify-center items-center">
        <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
          <Image className="m-auto mb-6" src={Logo} alt="Logo" width={260} />
          <h1 className="text-dark-brown font-bold text-4xl">The Trail</h1>
          <h3 className="text-middle-brown">
            <span className="font-semibold">Found Crumb Id: </span>
            {crumb.code} <br />
            <span className="font-semibold">Location: </span>
            {crumb.location}
          </h3>
          <p className="mt-4 font-semibold mb-1">
            Congratulations, you found a secret spot on the internet :) We are
            trying to build a community of people all over the world that find
            randomly placed hints left by others. <br /> If you want to know
            what we are up to,
          </p>
          <a
            className="hover:text-orange text-xl font-bold text-middle-brown"
            href={invitationLink}
          >
            join us on Discord
          </a>
        </div>
      </div>
    </MainContainer>
  );
}
