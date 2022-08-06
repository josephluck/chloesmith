import Head from "next/head";
import { useRouter } from "next/router";
import { projects } from "../projects";

const Project = () => {
  const router = useRouter();
  const { project: projectId } = router.query;
  const project = projects.find((project) => project.id === projectId);

  return (
    <p>
      <Head>
        <title>Chloe Smith - {project?.name}</title>
      </Head>
      Project: {project?.name}
      {project?.images.map((image) => (
        <img src={image.src} />
      ))}
    </p>
  );
};

export default Project;
