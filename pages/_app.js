import '../public/assets/css/app.2afad0c.bundle.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import 'react-modal-video/css/modal-video.css';
import Head from '../components/Head/Head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
    <Head />
    <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}

      </AnimatePresence>

    </>
  )
}

export default MyApp
