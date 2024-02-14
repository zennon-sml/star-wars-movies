'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./main";

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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  ) 
}