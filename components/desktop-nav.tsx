import Link from "next/link";
import React from "react";
import { projects } from "../projects";

export function DesktopNav() {
  const currentProject = "TODO";
  const currentPath = "TODO";

  const projectClass = (id: string) =>
    `
      mid-gray no-underline bb transition pb1
      ${currentProject === id ? "b--silver" : "b--transparent"}
    `;

  const linkClass = (name: string) =>
    `
      mid-gray no-underline bb bw-small transition pb1
      ${currentPath.includes(name) ? "b--gray" : "b--transparent"}
    `;

  return (
    <div className="pv4 tracked">
      <div className="bt br bb bw2 pv3 b--black ph3 f4 serif dib mb4 serif">
        <span className="mr2">Chloe</span>
        <span>Smith</span>
      </div>

      <div className="ph3 mid-gray">
        <Link href={projects[0].id}>
          <a className="dib mb2 b mid-gray no-underline f6">Portfolio</a>
        </Link>
        <div className="pl3 mb3">
          {projects
            .filter((project) => project.id !== "portfolio")
            .map((project) => (
              <div className="mb2 pb1 f7" key={project.id}>
                <Link href={`/${project.id}`}>
                  <a className={projectClass(project.id)}>{project.name}</a>
                </Link>
              </div>
            ))}
        </div>
        <div className="mb3 b f6">
          <Link href="/about">
            <a className={linkClass("about")}>About & Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
