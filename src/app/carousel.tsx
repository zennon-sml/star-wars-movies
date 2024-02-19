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
import Movie from "@/types/movie";

interface MainProps {}

const CarouselMovies: FC<MainProps> = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["mydata"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=9b6ea262cead427dd28fc0d5a6de8c61&query=Star%20Wars&with_keywords=Star%20Wars%20Saga"
      );
      return response.data; // Return the parsed JSON data directly
    },
  });

  if (!data) {
    return <div className="text-slate-50">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the first movie object

  return (
    <div className="grid place-items-center">
      <div className="">
        <Carousel className="w-80 place-items-center align-middle ">
          <CarouselContent className="text-slate-50">
            {data.results.map((movie: Movie) => (
              <CarouselItem >
                <CardMovie movie={movie}/> 
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
