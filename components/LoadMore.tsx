"use client"; //hooks are not supported in server side rendering
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2; // default page number

function LoadMore() {
  const { ref, inView } = useInView(); //eliminates the need of next button, it will load more [...data, ...res.data]); //appending the data] when the user reaches the end of the page

  const [data, setData] = useState<AnimeProp[]>([]); //type defining the data

  useEffect(() => {
    //runs once something happens
    if (inView) {
      fetchAnime(page).then((res) => {
        //after getting response from fetchAnime
        setData([...data, ...res]); //appending the data
        page++; // incrementing the page number
      });
    }
  }, [inView, data]); //dependency array

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {" "}
          {/* we will know when scroll , i.e through ref */}
          <Image //loader
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
export default LoadMore;
