import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "tachyons/css/tachyons.css";
import { DesktopNav } from "../components/desktop-nav";
import { MobileNav } from "../components/mobile-nav";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <div className="mobile-nav bg-white">
        <MobileNav />
      </div>
      <div className="flex vh-100 vw-100 bg-near-white-ns">
        <div className="js-nav-bar desktop-nav bg-white-95 shadow-medium relative z-5">
          <DesktopNav />
        </div>

        <div className="content js-scroll-container">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
