import { TrendingUp } from "lucide-react";
import Card from "./Card";
import { useState, useEffect } from "react";

function FeaturedCard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const allPosts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("post-")) {
        const post = JSON.parse(localStorage.getItem(key));
        allPosts.push({
          key,
          ...post,
        });
      }
    }
    setPosts(allPosts);
  }, []);
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
          {posts.map(({ title, description, tag, date, image }) => (
            <Card
              head={title}
              description={description}
              image={image}
              tag={tag}
              date={date}
            />
            //    key={index}
            //   title={post.title}
            //   content={post.description}
            //   image={post.image}
            //   date={post.relativeDate}
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
