import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="mt-2 bg-litee">
        <div className=" py-[80px] bg-litee max-w-[1200px] mx-auto">
          <div className="max-w-[1200px] h-full  mx-auto lg:flex lg:justify-between md:items-center pb-10">
            <h1 className="font-mono font-extrabold text-8xl mx-16 text-darkk">
              Stay <br /> Curious <br />
            </h1>
            <p className="max-w-[500px] font-mono leading-6 text-justify text-black text-base mx-16 mt-10">
              "Explore a world of narratives, insights, and wisdom spanning an
              array of subjects, brought to life by a diverse ensemble of
              writers. Delve into the depths of knowledge and creativity across
              any topic, where every piece is a journey through the minds of
              those who dare to express, question, and explore."
            </p>
          </div>
          <Button
            variant={"destructive"}
            className="bg-darkk text-litee mx-16 my-5 font-mono font-semibold px-12 py-5 hover:bg-darkk/80 "
            size={"lg"}
          >
            Start Writing
          </Button>
        </div>
        <div className="h-2 bg-white" />
        <div className="m-3">
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}

export default Home;
