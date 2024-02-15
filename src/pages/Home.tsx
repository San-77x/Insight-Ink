import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="mt-3 bg-litee">
        <div className=" py-[100px] bg-litee ">
          <div className="max-w-[1200px] h-full  mx-auto sm:flex sm:justify-between items-center pb-10">
            <h1 className="font-mono font-extrabold text-8xl mx-8 text-darkk ">
              Stay <br /> Curious <br />
              <Button
                variant={"destructive"}
                className="bg-darkk text-litee font-ui-serif font-semibold px-12 py-5 hover:bg-darkk/80 hidden sm:visible"
                size={"lg"}
              >
                Get Started
              </Button>
            </h1>
            <p className="max-w-[500px] font-mono leading-6 text-justify text-black text-base mx-16 mt-10">
              "Explore a world of narratives, insights, and wisdom spanning an
              array of subjects, brought to life by a diverse ensemble of
              writers. Delve into the depths of knowledge and creativity across
              any topic, where every piece is a journey through the minds of
              those who dare to express, question, and explore."
            </p>
          </div>
        </div>
        <div className="h-3 bg-white" />
        <div className="m-3">
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}

export default Home;
