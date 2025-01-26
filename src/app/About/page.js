import AboutAttributes from "../components/AboutAttributes";
import AboutMainDiv from "../components/AboutMainDiv";


export default function About() {
  return (
    <div className="mt-12">
      <AboutMainDiv />
      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row justify-between mx-4 gap-8 lg:gap-0">
        {/* Attributes Section */}
        <AboutAttributes />
        {/* Paragraph Section */}
        <div className="relative max-w-[480px] text-p text-justify md:text-left lg:-top-12 lg:-left-10">
          Hey there, Vanakam! I&apos;m a developer and tech enthusiast with a
          passion for creating intuitive and impactful web experiences. I enjoy
          solving problems, turning ideas into functional designs, and building
          solutions that make a difference. When I&apos;m not coding, I love
          exploring space, geopolitics, and non-fiction, always looking for new
          ideas and inspiration. These interests keep me curious and creative,
          shaping how I think and work.
        </div>
      </div>
    </div>
  );
}
