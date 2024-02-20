"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarouselMovies from "./carousel";
import { Star } from "lucide-react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


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
      <div className="w-full bg-slate-950 h-24 flex flex-row items-center justify-center text-slate-50 text-xl">
      <Star className="text-yellow-300"/>
      <h1>Star Wars </h1>
      <Star className="text-yellow-300"/>
      </div>
      <div>
        <CarouselMovies />
      </div>
      </div>
    </QueryClientProvider>
  );
}
