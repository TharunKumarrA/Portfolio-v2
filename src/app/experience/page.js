import ExpMainDiv from "../components/ExpMainDiv";
import NSSAttributes from "../components/NSSAttributes";
import AnokhaAttributes from "../components/AnokhaAttributes";
import IETEAttributes from "../components/IETEAttributes";
import ASCIIAttributes from "../components/ASCIIAttributes";
import LogicFloAttributes from "../components/LogicFloAttributes";
import PragatiAttributes from "../components/PragatiAttributes";
import AmritotsavamAttributes from "../components/AmritotsavamAttributes"; // 👈 Add this

export default function Experience() {
  const experienceData = [
    {
      expImages: ["/LogicFlo.png"],
      expImgAlt: "LogicFlo",
      role: ["Full-stack", "Intern"],
      company: "LogicFlo",
      companyDetails:
        "LogicFlo is a startup revolutionizing life sciences with an AI workforce platform, automating workflows, ensuring compliance, and enhancing productivity.",
      start: "OCT 2024",
      end: "DEC 2024",
      expDetails:
        "Developed and delivered 5+ production-ready features for a live AI application using React and Django. Designed interactive interfaces with React Flow, enhanced user experience with custom solutions, and integrated external libraries while maintaining scalable code. Thrived in a fast-paced startup environment.",
      attList: <LogicFloAttributes />,
    },
    {
      expImages: [
        "/DSC_0470.JPG",
        "/DSC_0367.JPG",
        "/DSC_0053.JPG",
        "/DSC_1618.JPG",
        "/DSC_0173.JPG",
      ],
      expImgAlt: "NSS",
      role: ["NSS Student", "Coordinator"],
      company: "NSS",
      companyDetails:
        "The National Service Scheme (NSS), started in 1969, promotes youth involvement in social welfare with the motto 'Not Me But You.' It fosters leadership, discipline, and community awareness through activities like health camps and disaster relief.",
      start: "MAR 2023",
      end: "MAR 2025",
      expDetails:
        "I have served as the Student Coordinator for NSS Unit-3, organizing and managing 7+ events, including a 6-day NSS Special Camp with 50+ participants and a blood donation camp with 170+ donors and 300+ attendees. I also led Drug Awareness Week, engaging 200+ participants, and contributed to the C20 Summit",
      attList: <NSSAttributes />,
    },
    {
      expImages: ["/Pragati_2.jpg", "/Pragati.png", "/Pragati_3.png"],
      expImgAlt: "Pragati",
      role: ["Lead Project", "Coordinator"],
      company: "Pragati '25",
      companyDetails:
        "Pragati is the flagship techno-cultural-management fest by the Amrita School of Business, showcasing innovation through technology, sustainability, and AI-powered solutions.",
      start: "DEC 2024",
      end: "APR 2025",
      expDetails:
        "Led frontend development for Pragati '25 – built the official website, admin panel, and an OpenAI-powered chatbot. Also worked as a Project Coordinator ensuring timely delivery and smooth collaboration across 3 teams of 14 members.",

      attList: <PragatiAttributes />,
    },
    {
      expImages: ["/DSC_0054.jpg", "/DSC_0054_1.jpg"],
      expImgAlt: "Anokha WebDev",
      role: ["Frontend", "Developer"],
      company: "Anokha",
      companyDetails:
        "Anokha, the National Techfest of Amrita Vishwa Vidyapeetham, Coimbatore campus, is a 3-day technical congregation of the brightest minds in India.",
      start: "DEC 2023",
      end: "MAR 2024",
      expDetails:
        "As a frontend web developer for Anokha 2024, I contributed to designing and building the tech fair's website, ensuring a seamless and engaging online presence. The role involved tackling tight deadlines, late-night coding sessions, and coordinating effectively with the team to deliver a robust platform that supported the event's success.",
      attList: <AnokhaAttributes />,
    },
    {
      expImages: [
        "/Amritotsavam.png",
        "/Amritotsavam_2.jpg",
        "/Amritotsavam_3.jpg",
      ],
      expImgAlt: "Amritotsavam",
      role: ["Web Dev", "Coordinator"],
      company: "Amritotsavam '25",
      companyDetails:
        "Amritotsavam is the annual cultural fest of Amrita Vishwa Vidyapeetham, Coimbatore, featuring vibrant performances, events, and celebrations of tradition and creativity.",
      start: "FEB 2025",
      end: "MAR 2025",
      expDetails:
        "Built and deployed the official Amritotsavam 2025 website. Handled complete frontend development, coordinated with the cultural team for dynamic content, and ensured smooth user flow for 2500+ registrations.",
      attList: <AmritotsavamAttributes />,
    },
    {
      expImages: ["/IETE_2.JPG", "/IETE_3.jpg", "/DSC_0055.JPG"],
      expImgAlt: "IEEE",
      role: ["IETE Web", "Dev Lead"],
      company: "IETE",
      companyDetails:
        "The IETE Club at Amrita Vishwa Vidyapeetham bridges computer science and electronics, offering opportunities in AI, web development, robotics, and event management through workshops, hackathons, and guest lectures.",
      start: "NOV 2024",
      end: "Present",
      expDetails:
        "As Web Development Lead, I oversaw the design and development of the IETE website. Additionally, I played a key role in the successful conduction of WebX – a 3-hour web development challenge for students, overseeing the event, guiding participants, and judging the submissions.",
      attList: <IETEAttributes />,
    },
    {
      expImages: ["/DSC_0056.png"],
      expImgAlt: "Editor",
      role: ["Editor", "& Designer"],
      company: "ASCII - Dept of CSE",
      companyDetails:
        "ASCII is the official student-run magazine of the Department of Computer Science and Engineering at Amrita School of Engineering, Coimbatore.",
      start: "JAN 2025",
      end: "MAR 2026",
      expDetails:
        "As an editor and designer for ASCII, I contributed articles, designs, and illustrations for the magazine. I collaborated with student writers and editors to create engaging and informative content for the readers. This role allowed me to explore my creativity, communication, and storytelling skills, enhancing my overall writing and design abilities.",
      attList: <ASCIIAttributes />,
    },
  ];

  return (
    <div>
      <ExpMainDiv experienceData={experienceData} />
    </div>
  );
}
