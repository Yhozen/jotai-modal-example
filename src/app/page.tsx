import { OpenExampleModal } from "@/components/open-example-modal";
import Link from "next/link";
import { OpenStateModal } from "@/components/open-state-modal";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="font-semibold my-5">
        Using app router (i.e: &quot;/app&quot; folder)
      </h1>
      <div className="w-60">
        <Separator className="my-4" />
        <OpenExampleModal />
        <Separator className="my-4" />

        <OpenStateModal />
        <Link href="/with-pages-router" className="my-2 underline">
          see pages router version
        </Link>
      </div>
    </main>
  );
}
