import { Route } from "@/interfaces/router";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temporal Origin",
  description: "A Pokémon TCG fansite",
};

const routes: Route[] = [
  {
    label: "Home",
    uri: "/",
  },
  {
    label: "About",
    uri: "/about",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {routes.map((route) => (
            <Link href={route.uri}>{route.label}</Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
