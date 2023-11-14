import { ModalsProvider } from "@/modal/modals.provider";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </div>
  );
}
