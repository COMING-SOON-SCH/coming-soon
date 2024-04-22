import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 현재 경로가 /admin으로 시작하면 Navbar를 렌더링하지 않음
  const renderNavbar = !router.pathname.startsWith("/admin");

  return (
    <>
      {renderNavbar && <Navbar />}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
