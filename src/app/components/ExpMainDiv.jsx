import ExpImage from "./ExpImage";
import ExpPositionContent from "./ExpPositionContent";
import ExpDateRange from "./ExpDateRange";
import AboutAttributes from "./AboutAttributes";

const ExpMainDiv = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 mb-52">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:absolute lg:-left-72 lg:-top-16">
          <ExpPositionContent
            role={["NSS Student", "Coordinator"]}
            company={"NSS"}
            details={
              "It's an active part of the National Service Scheme, focused on community welfare, environmental sustainability, and awareness programs."
            }
          />
        </div>

        <div className="flex justify-center w-full">
          <ExpImage src={"/1.png"} alt={"NSS"} />
        </div>

        <div className="lg:absolute lg:-right-52 lg:top-8">
          <ExpDateRange start={"JUL 2023"} end={"MAR 2025"} />
        </div>
        <div className="absolute max-w-md lg:-bottom-40 lg:-right-64">
          As a coordinator and volunteer in NSS Unit 3, I took part in
          organizing awareness campaigns, cleanliness drives, and sustainability
          projects. I worked with peers to address social issues, promote
          education and health,and engage with local communities. These
          experiences strengthened my leadership,teamwork, and organizational
          skills.
        </div>
        <div className="lg:absolute lg:-bottom-48 lg:-left-72">
          <AboutAttributes />
        </div>
      </div>
    </div>
  );
};

export default ExpMainDiv;
