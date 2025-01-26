import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/hero";

export default function Home() {

  return (
    <div>
      <div className="h-screen mt-16">  
        <Hero />
      </div>
      <FeaturedProjects />
    </div>
  );
}
