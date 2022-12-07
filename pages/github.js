import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  console.log(user);
  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center text-light">Project created by</h1>
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="Img not found" />
            <p className="mt-3">{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to Github profile
            </a>
            <a href="/" className="btn btn-outline-secondary mt-2">
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const result = await fetch("https://api.github.com/users/RocioGL33");
  const data = await result.json();
  const statusCode = result.status > 200 ? result.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
