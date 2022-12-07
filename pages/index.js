import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";

const Index = () => {
  return (
    <Layout>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary bg-dark">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/profile-image.jpg"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8 text-light">
                <h1>Jane Doe</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit
                  ridiculus turpis, mauris massa sociis volutpat. Ridiculus duis
                  nisi gravida nisl vivamus natoque vehicula mollis donec,
                  sapien ultricies neque luctus sociis lacus feugiat risus
                  varius, ligula praesent nec dictum faucibus auctor metus
                  nulla. Tempus nascetur suscipit netus porta vestibulum posuere
                  dapibus imperdiet, cras orci senectus sodales non proin
                  hendrerit pellentesque, nullam primis tellus placerat fusce
                  quisque libero. Urna parturient dui turpis sociis lobortis
                  donec nam, penatibus justo non sagittis tortor placerat,
                  aptent libero vitae praesent netus luctus. Cras tempus primis
                  tristique sagittis dignissim metus per ullamcorper, torquent
                  ridiculus quis dapibus venenatis habitant hendrerit quisque
                  curae, eget leo facilisis aliquet nulla vestibulum accumsan.
                  Donec ridiculus molestie semper proin ad integer faucibus
                  potenti torquent lobortis, arcu facilisi nisi pulvinar mollis
                  rutrum augue nulla dapibus. Magnis inceptos accumsan pulvinar
                  conubia venenatis parturient tempor nullam aliquam nascetur,
                  ultrices egestas tempus potenti quisque pellentesque netus
                  habitant ante dapibus nam, ad ligula ridiculus cum gravida
                  elementum leo sollicitudin tortor.
                </p>
                <a className="text-light" href="/hireme">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second section */}
      <div className="row py-3">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progress-bar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map(({ title, description, from, to }, i) => (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Link legacyBehavior href="/experiences">
              <a className="btn btn-light">Know more.</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {projects.map(({ name, content, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt="Image not found"
                        className="card-img-top"
                      />
                    </div>

                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{content}</p>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <Link legacyBehavior href="/portfolio">
                <a className="btn btn-outline-light">More projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
