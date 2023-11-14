import { Inter } from "next/font/google";
import { OpenExampleModal } from "@/components/dialog-example";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-semibold my-5">
        Using app router (i.e: "/app" folder)
      </h1>
      <OpenExampleModal />
      <Link href="/with-pages-router" className="my-2 underline">
        see pages router version
      </Link>
    </main>
  );
}
