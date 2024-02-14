'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./main";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

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
    <div>

    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
    <ResizablePanelGroup
    direction="horizontal"
    className="max-w-md rounded-lg border"
    >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-[200px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
      </div>
  ) 
}