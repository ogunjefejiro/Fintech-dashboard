import "../styles/globals.css";
import { ActiveContextProvider } from "../context/ActiveContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ActiveContextProvider>
        <Component {...pageProps} />
      </ActiveContextProvider>
    </>
  );
}

export default MyApp;
