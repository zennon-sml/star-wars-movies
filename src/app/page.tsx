"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarouselMovies from "./carousel";
import Image from "next/image";

interface MoviesResponse {
  Search: Movie[];
  Response: string;
  Error?: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default async function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center gap-4">
      <div className="w-full bg-slate-950 h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Star Wars</h1>
      </div>
      <div>
        <CarouselMovies />
      </div>
      </div>
    </QueryClientProvider>
  );
}
