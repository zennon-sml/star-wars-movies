"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MainProps {}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Main: FC<MainProps> = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["mydata"],
    queryFn: async () => {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=6a10f4a2&s=Star%20Wars"
      );
      return response.data; // Return the parsed JSON data directly
    },
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the first movie object

  return (
    <div className="mx-auto max-w-6xl ny-12 space-y-6 px-5">
      <Carousel>
        <CarouselContent>
          {data.Search.map((movie: Movie) => (
            <CarouselItem
              key={movie.imdbID}
              className="inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
              <p>IMDB ID: {movie.imdbID}</p>
              <p>Type: {movie.Type}</p>
              <img className="w-40" src={movie.Poster} alt={movie.Title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Main;
