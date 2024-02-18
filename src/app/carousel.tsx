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
import CardMovie from "./cardmovie";
import bg from "../../public/stars.jpg";
import Image from "next/image";

interface MainProps {}

const CarouselMovies: FC<MainProps> = () => {
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
    <div className="grid place-items-center">
      <div className="">
        <Carousel className="w-80 place-items-center align-middle ">
          <CarouselContent className="">
            {data.Search.map((movie: Movie) => (
              <CarouselItem key={movie.imdbID}>
                <CardMovie
                  title={movie.Title}
                  year={movie.Year}
                  img={movie.Poster}
                />
                {/* <p>IMDB ID: {movie.imdbID}</p>
                <p>Type: {movie.Type}</p> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMovies;
