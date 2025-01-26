import ExpMainDiv from "../components/ExpMainDiv";

export default function Experience() {
  return (
    <div>
      <ExpMainDiv
        expImg={"/1.png"}
        expImgAlt={"NSS"}
        company={"NSS"}
        companyDetails={
          "It's an active part of the National Service Scheme, focused on community welfare, environmental sustainability, and awareness programs."
        }
        role={["NSS Student", "Coordinator"]}
        start={"JUL 2023"}
        end={"MAR 2025"}
        expDetails={
          "As a coordinator and volunteer in NSS Unit 3, I took part in organizing awareness campaigns, cleanliness drives, and sustainability projects. I worked with peers to address social issues, promote education and health, and engage with local communities. These experiences strengthened my leadership, teamwork, and organizational skills."
        }
      />
    </div>
  );
}
