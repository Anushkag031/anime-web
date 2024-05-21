"use server";

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
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error as needed
  }
};
