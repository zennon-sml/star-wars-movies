"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarouselMovies from "./carousel";
import { Github, Star } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
        <div className="grid w-full h-full place-items-center bg-slate-950 h-24 font-bold  text-slate-50 text-xl py-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex">
                <Star className="text-yellow-300" />
                <h1>Star Wars</h1>
                <Star className="text-yellow-300" />
              </NavigationMenuItem>
              <NavigationMenuItem className="flex">
                <Github />
                Github
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <CarouselMovies />
        </div>
      </div>
    </QueryClientProvider>
  );
}
