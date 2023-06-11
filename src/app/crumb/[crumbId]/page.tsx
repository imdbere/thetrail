import Image from "next/image";
import Logo from "../../logo.png";

const invitationLink = "https://discord.gg/xNBVzDYXXJ";

export default function CrumbPage({ params }: { params: { crumbId: string } }) {
  return (
    <main className="h-screen w-full flex flex-col justify-center">
      <p className="text-center mt-2 italic text-middle-brown">
        [This page is under construction]
      </p>
      <div className="grow flex flex-col justify-center items-center">
        <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
          <Image className="m-auto" src={Logo} alt="Logo" width={260} />
          <h1 className="text-dark-brown font-bold text-4xl">The Trail</h1>
          <h3 className="text-middle-brown font-semibold">
            Found Crumb Id: {params.crumbId}
          </h3>
          <p className="mt-4 font-semibold mb-1">
            Congratulations, you found a secret spot on the internet :) We are
            trying to build a community of people all over the world that find
            randomly placed hints left by others. If you want to know what we
            are up to,
          </p>
          <a
            className="hover:text-orange text-xl font-bold text-middle-brown"
            href={invitationLink}
          >
            join us on Discord
          </a>
        </div>
      </div>
    </main>
  );
}
