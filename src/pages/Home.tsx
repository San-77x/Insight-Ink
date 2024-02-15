import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="">
        <div className="h-[350px] bg-pink-100 border-b border-black">
          <div className="max-w-[1100px] h-full  mx-auto flex justify-between items-end pb-10 ">
            <h1 className="font-mono font-extrabold text-7xl mx-8 ">
              Stay <br /> Curious
            </h1>
            <p className="max-w-[500px] font-mono leading-6">
              "Explore a world of narratives, insights, and wisdom spanning an
              array of subjects, brought to life by a diverse ensemble of
              writers. Delve into the depths of knowledge and creativity across
              any topic, where every piece is a journey through the minds of
              those who dare to express, question, and explore."
            </p>
          </div>
        </div>
        <div>
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}

export default Home;
