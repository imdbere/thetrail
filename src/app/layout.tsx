import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "The Trail",
  description: "Be the trail - join us now",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",

  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="h-full scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <body
        style={{ colorScheme: "light" }}
        className={`min-h-full bg-bg-brown ${poppins.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
