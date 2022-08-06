import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { projects } from "../projects";

const Project = () => {
  const router = useRouter();
  const { project: projectId } = router.query;
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      <Head>
        <title>Chloe Smith - {project?.name}</title>
      </Head>
      <div id={project?.id} className="projects-list pa0-ns pa2">
        {project?.images.map((img) => (
          <div className="h-100 w-auto dib pl2-ns mb0-ns mb1 js-image fix-vertical-image-height">
            <div className="dib fl h-100 bg-white relative">
              <img
                src={img.src}
                className="relative z-2 shadow"
                style={{ minWidth: "200px" }}
              />
              <div className="loading">
                <div className="loading-indicator white relative z-1 serif">
                  C
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="tc mb2 dn-ns db">
          <button
            className="f6 dib ba b--black pv2 ph3 bg-white-95 ttu shadow"
            onClick={console.log}
          >
            Next Project
          </button>
        </div>
        <div
          className="fixed ma3 db-ns dn z-5"
          style={{ right: "0px", bottom: "0px" }}
        >
          <button
            className="f6 dib ba b--black pv2 ph3 bg-white-95 ttu shadow"
            onClick={console.log}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
