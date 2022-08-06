import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../projects";

export default function Project() {
  const router = useRouter();
  const { project: projectId } = router.query;
  const projectIndex =
    projects.findIndex((project) => project.id === projectId) || 0;
  const project = projects[projectIndex];
  const nextProject = projects[projectIndex + 1]
    ? projects[projectIndex + 1]
    : projects[0];

  return (
    <>
      <Head>
        <title>Chloe Smith - {project?.name}</title>
      </Head>
      <div id={project?.id} className="pa0-ns pa2 ml2-ns">
        {project?.images.map((img) => (
          <div className="bg-white relative" key={img.src}>
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
        ))}
        <div className="tc mb2 dn-ns db">
          <Link href={`/${nextProject.id}`}>
            <a className="black no-underline f6 dib ba b--black mv2 pv2 ph3 bg-white-95 ttu shadow">
              Next Project
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
