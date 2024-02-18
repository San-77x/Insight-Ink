import { TrendingUp } from "lucide-react";
import Card from "./Card";

function FeaturedCard() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b border-darkk mb-5 flex justify-between text-sm">
          <div className="text-darkk flex items-center pb-2 pr-2 border-b-2 border-black uppercase">
            <TrendingUp />
            <div className="font-semibold inline-block px-2">
              Trending On Insight-Ink
            </div>
          </div>
          <div>See All</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <Card
            tag={"Blog"}
            image={"https://i.ibb.co/FVdHNzX/imagenotfound.jpg"}
            title={"Black Keyboard RGB Mechanical"}
          />
          <Card
            tag={"Blog"}
            image={"https://i.ibb.co/FVdHNzX/imagenotfound.jpg"}
            title={"Why to eat salad?"}
          />
          <Card
            tag={"Blog"}
            image={"https://i.ibb.co/FVdHNzX/imagenotfound.jpg"}
            title={" Best FastFood Ideas (Yummy)"}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
