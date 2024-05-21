"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  //will make a call to API and return data from it
  try {
    const response = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    //console.log(data);
    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error as needed
  }
};
