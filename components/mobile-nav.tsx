import Link from "next/link";
import React from "react";

export const MobileNav = () => {
  const currentPath = "TODO";

  const linkClass = (name: string, invert: boolean = false) => `
      mid-gray no-underline bb bw-small transition
      ${
        invert
          ? !currentPath.includes(name)
            ? "b--silver"
            : "b--transparent"
          : ""
      }
      ${
        !invert
          ? currentPath.includes(name)
            ? "b--silver"
            : "b--transparent"
          : ""
      }
    `;

  return (
    <div className="tc ttu tracked mb3">
      <Link href="/">
        <a className="ba bw2 pv2 b--black f4 serif ma3 db bg-white no-underline black">
          <span className="mr2">Chloe</span>
          <span>Smith</span>
        </a>
      </Link>

      <div className="mid-gray f6">
        <Link href="/">
          <a className={`mr1 ${linkClass("about", true)}`}>Portfolio</a>
        </Link>
        <Link href="/about">
          <a className={`ml1 ${linkClass("about")}`}>About</a>
        </Link>
      </div>
    </div>
  );
};
