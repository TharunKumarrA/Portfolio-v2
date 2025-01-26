import ExpMainDiv from "../components/ExpMainDiv";
import NSSAttributes from "../components/NSSAttributes";
import AnokhaAttributes from "../components/AnokhaAttributes";
import IETEAttributes from "../components/IETEAttributes";
import ASCIIAttributes from "../components/ASCIIAttributes";

export default function Experience() {
  const experienceData = [
    {
      expImg: "/1.png",
      expImgAlt: "NSS",
      role: ["NSS Student", "Coordinator"],
      company: "NSS",
      companyDetails:
        "It's an active part of the National Service Scheme, focused on community welfare, environmental sustainability, and awareness programs.",
      start: "JUL 2023",
      end: "MAR 2025",
      expDetails:
        "As a coordinator and volunteer in NSS Unit 3, I took part in organizing awareness campaigns, cleanliness drives, and sustainability projects. I worked with peers to address social issues, promote education and health, and engage with local communities. These experiences strengthened my leadership, teamwork, and organizational skills.",
      attList: <NSSAttributes />,
    },
    {
      expImg: "/2.png",
      expImgAlt: "Anokha WebDev",
      role: ["Web", "Development"],
      company: "Anokha",
      companyDetails:
        "Anokha is the annual tech fest of Amrita School of Engineering, Coimbatore.",
      start: "DEC 2023",
      end: "MAR 2024",
      expDetails:
        "As a team lead in the Web Development team, I managed a group of developers to build and maintain the official website of Anokha. I contributed to the design, development, and deployment of the site, ensuring a seamless user experience. This role helped me enhance my technical skills, project management, and collaboration abilities.",
      attList: <AnokhaAttributes />,
    },
    {
      expImg: "/LogicFlo.png",
      expImgAlt: "IEEE",
      role: ["IETE Web", "Dev Head"],
      company: "IETE",
      companyDetails:
        "IETE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
      start: "JUL 2024",
      end: "MAR 2026",
      expDetails:
        "As an IETE member, I participated in workshops, seminars, and technical events to expand my knowledge and skills in various domains. I collaborated with peers on projects, research, and competitions, gaining valuable insights and experiences. These activities helped me stay updated on the latest trends, technologies, and innovations in the field of engineering.",
      attList: <IETEAttributes />,
    },
    {
      expImg: "/AI-Study-Mate.png",
      expImgAlt: "Editor",
      role: ["Editor", "& Designer"],
      company: "ASCII - Dept of CSE",
      companyDetails:
        "ASCII is the official student-run magazine of the Department of Computer Science and Engineering at Amrita School of Engineering, Coimbatore.",
      start: "JAN 2025",
      end: "MAR 2026",
      expDetails:
        "As an editor and designer for ASCII, I contributed articles, designs, and illustrations for the magazine. I collaborated with writers, artists, and editors to create engaging and informative content for the readers. This role allowed me to explore my creativity, communication, and storytelling skills, enhancing my overall writing and design abilities.",
      attList: <ASCIIAttributes />,
    },
  ];
  return (
    <div>
      <ExpMainDiv experienceData={experienceData} />
    </div>
  );
}
