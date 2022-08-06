import { List } from "../components/list";

export default () => (
  <div
    className="ml2-ns h-100 shadow-ns bg-white pv4-ns pb4 ph3 lh-copy f6 mid-gray overflow-auto"
    style={{ maxWidth: "34rem" }}
  >
    <p className="ma0 pb3">
      I'm a womenswear fashion designer based in London. I enjoy working for
      fast pace, fashion forward high-street brands.
    </p>
    <p className="ma0 pb3">
      Get in touch at
      <a
        href="mailto:chloelindsaysmith@gmail.com"
        className="no-underline blue"
      >
        chloelindsaysmith@gmail.com
      </a>{" "}
      and{" "}
      <a
        href="https://drive.google.com/open?id=0ByV_PN8aNFFOSXU3QkxTc08wVU0"
        target="_blank"
        className="no-underline blue"
      >
        download my CV
      </a>
    </p>
    <List
      title="Employment"
      items={[
        {
          name: "ASOS",
          description:
            "January 2016 to Present - Design Assistant on Going Out Dresses",
        },
      ]}
      className="ma0 pb3"
    />
    <List
      title="Internships"
      items={[
        {
          name: "ASOS",
          description: "Womenswear Design Intern and Freelance Assistant",
        },
        {
          name: "Debenhams",
          description: "Womenswear Design Intern and Accessories Design Intern",
        },
        {
          name: "Jasper Conran",
          description: "Womenswear Design Intern",
        },
        {
          name: "Anderson & Sheppard Savile Row Tailors",
          description: "Pattern Cutting and Manufacturing Intern",
        },
        {
          name: "Caslazur",
          description: "Studio Assistant",
        },
        {
          name: "Strictly Come Dancing",
          description: "Costume Department",
        },
      ]}
      className="ma0 pb3"
    />
    <List
      title="Education"
      items={[
        {
          name: "Ravensbourne",
          description: "BA (hons) Fashion - Womenswear Design - Grade 2:1",
        },
        {
          name: "Ravensbourne",
          description:
            "UAL Level 3 Foundation Diploma - Fashion and Textiles - Grade Distinctiont",
        },
      ]}
      className="ma0 pb2"
    />
    <div className="tc tl-ns mb3">
      <a
        href="https://instagram.com/chloe_smith_london/"
        target="_blank"
        className="mr2 dib black no-underline ss-instagram"
      ></a>
      <a
        href="http://uk.linkedin.com/pub/chloe-smith/36/820/412/en"
        target="_blank"
        className="mr2 dib black no-underline ss-linkedin"
      ></a>
    </div>
  </div>
);
