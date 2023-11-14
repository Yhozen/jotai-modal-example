import { OpenExampleModal } from "@/components/open-example-modal";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { OpenStateModal } from "@/components/open-state-modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center last:p-24">
      <h1 className="font-semibold my-5">
        Using pages router (i.e: &quot;/pages&quot; folder)
      </h1>
      <div className="w-60">
        <Separator className="my-4" />
        <OpenExampleModal />
        <Separator className="my-4" />
        <OpenStateModal />
        <Link href="/" className="my-2 underline">
          see app router version
        </Link>
      </div>
    </main>
  );
}
