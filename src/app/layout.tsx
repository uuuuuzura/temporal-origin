import { Route } from "@/interfaces/router";
import { getMetadataTitle } from "@/utils/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: getMetadataTitle(),
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
  {
    label: "Writings",
    uri: "/writings",
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
          {routes.map((route, routeIndex) => (
            <Link key={routeIndex} href={route.uri}>
              {route.label}
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
