import ExpMainDiv from "../components/ExpMainDiv";
import NSSAttributes from "../components/NSSAttributes";
import AboutAttributes from "../components/AboutAttributes";

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
      attList: <AboutAttributes />,
    },
    {
      expImg: "/LogicFlo.png",
      expImgAlt: "IEEE",
      role: ["IEEE Student", "Member"],
      company: "IEEE",
      companyDetails:
        "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
      start: "JUL 2024",
      end: "MAR 2026",
      expDetails:
        "As an IEEE member, I participated in workshops, seminars, and technical events to expand my knowledge and skills in various domains. I collaborated with peers on projects, research, and competitions, gaining valuable insights and experiences. These activities helped me stay updated on the latest trends, technologies, and innovations in the field of engineering.",
      attList: <AboutAttributes />,
    },
    {
      expImg: "/AI-Study-Mate.png",
      expImgAlt: "Hackathons",
      role: ["Hackathons", "Participant"],
      company: "Hackathons",
      companyDetails:
        "Hackathons are events where individuals or teams come together to solve problems, build projects, and showcase their skills.",
      start: "JAN 2025",
      end: "MAR 2026",
      expDetails:
        "I participated in hackathons to challenge myself, learn new technologies, and work on innovative projects. I collaborated with diverse teams, brainstormed ideas, and developed solutions within a limited timeframe. These experiences honed my problem-solving, creativity, and adaptability, pushing me to think outside the box and explore new possibilities.",
      attList: <AboutAttributes />,
    },
  ];
  return (
    <div>
      <ExpMainDiv experienceData={experienceData} />
    </div>
  );
}