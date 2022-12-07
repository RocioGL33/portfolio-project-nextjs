import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => {
  return (
    <Layout footer={false} dark>
      <div className="text-center text-light">
        <h1 className="text-light">404</h1>
        <p>Sorry! This page is still in working. Come back soon! </p>
        <img src="llave-inglesa.png" alt="Not found" className="tool" />
        <p>
          Return to {""}
          <Link legacyBehavior href="/">
            <a className="text-light">Portfolio</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default custom404;
