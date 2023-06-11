import Image from "next/image";
import Logo from "../../logo.png";
import NotFound from "../../not_found.png";
import { Crumb, validCrumbs } from "../validCrumbs";

const invitationLink = "https://discord.gg/xNBVzDYXXJ";

export default function CrumbPage({ params }: { params: { crumbId: string } }) {
  const crumb = validCrumbs.find((c) => c.code == params.crumbId);

  return (
    <main className="h-screen w-full flex flex-col justify-center">
      <p className="text-center mt-2 italic text-middle-brown">
        [This page is under construction]
      </p>
      <div className="grow flex flex-col justify-center items-center">
        {crumb != null ? <JoinTheTrail crumb={crumb} /> : <CrumbNotFound />}
      </div>
    </main>
  );
}

function CrumbNotFound() {
  return (
    <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
      <Image className="m-auto mb-6" src={NotFound} alt="Logo" width={260} />
      <h1 className="text-dark-brown font-bold text-4xl">Noting to see here</h1>
      <h3 className="text-middle-brown">Maybe you did something wrong ?</h3>
    </div>
  );
}

function JoinTheTrail({ crumb }: { crumb: Crumb }) {
  return (
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
          randomly placed hints left by others. <br /> If you want to know what
          we are up to,
        </p>
        <a
          className="hover:text-orange text-xl font-bold text-middle-brown"
          href={invitationLink}
        >
          join us on Discord
        </a>
      </div>
    </div>
  );
}
