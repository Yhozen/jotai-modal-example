import { Inter } from "next/font/google";
import { OpenExampleModal } from "@/components/dialog-example";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center last:p-24">
      <h1 className="font-semibold my-5">
        Using pages router (i.e: "/pages" folder)
      </h1>
      <OpenExampleModal />
      <Link href="/" className="my-2 underline">
        see app router version
      </Link>
    </main>
  );
}
