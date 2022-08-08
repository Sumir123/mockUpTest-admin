import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="body-mockupTest">
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
