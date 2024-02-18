"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarouselMovies from "./carousel";

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
      <div className="bg-slate-500 w-full h-screen flex justify-center items-center">
        <CarouselMovies />
      </div>
    </QueryClientProvider>
  );
}
