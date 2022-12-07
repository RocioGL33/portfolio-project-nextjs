import NavBar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ClassNames from "classnames";

const Layout = ({ children, footer = true, dark = false }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div className={ClassNames({ "bg-dark": dark })}>
      <NavBar />
      <main className="container py-4">{children}</main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1 className=" text-light">&copy; Jane Doe Portfolio</h1>
            <p>2000- {new Date().getFullYear()}</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
