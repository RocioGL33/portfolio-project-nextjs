import Layout from "../components/Layout";

const Error = ({ statusCode }) => {
  return (
    <Layout>
      {statusCode ? (
        <p className="text-center">
          Sorry, could not load this page. Status Code: {statusCode}
        </p>
      ) : (
        <p>Could not load this page.</p>
      )}
    </Layout>
  );
};

export default Error;
