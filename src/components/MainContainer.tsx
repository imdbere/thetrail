import { ReactElement } from "react";

export function MainContainer({ children }: { children: ReactElement }) {
  return (
    <main className="h-screen w-full flex flex-col justify-center">
      <p className="text-center mt-2 italic text-middle-brown">
        [This page is under construction]
      </p>
      <div className="grow flex flex-col justify-center items-center">
        {children}
      </div>
    </main>
  );
}
