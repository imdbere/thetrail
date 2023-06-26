import { incrementClicks } from "@/backend/mutations";
import { getCrumbByCode } from "@/backend/queries";
import { MainContainer } from "@/components/MainContainer";
import Image from "next/image";
import { redirect } from "next/navigation";
import Logo from "../../public/logo.png";

const invitationLink = "https://discord.gg/xNBVzDYXXJ";

// This disables the cache to make sure we always get an up-to-date click counter (could be solved more efficiently)
// https://nextjs.org/docs/app/building-your-application/data-fetching/caching
export const fetchCache = "only-no-store";

export default async function CrumbPage({
  params,
}: {
  params: { crumbCode: string };
}) {
  const crumb = await getCrumbByCode(params.crumbCode);
  if (!crumb) {
    return redirect("/not-found");
  }

  if (process.env.NODE_ENV == "production")
    await incrementClicks(params.crumbCode);

  return (
    <MainContainer>
      <div className="grow flex flex-col justify-center items-center">
        <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
          <Image
            className="m-auto mb-6 hover-grow"
            src={Logo}
            alt="Logo"
            width={260}
          />
          <h1 className="text-dark-brown font-bold text-4xl">The Trail</h1>
          <h3 className="text-middle-brown">
            <span className="font-semibold">Found Crumb Code: </span>
            {params.crumbCode} <br />
            <span className="font-semibold">Location: </span>
            {crumb.description} <br />
            <span className="font-semibold">Created By: </span>
            {crumb.createdBy} <br />
            <span className="font-semibold">Clicks so far: </span>
            {crumb.clicks} <br />
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
