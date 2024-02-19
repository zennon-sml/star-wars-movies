import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Movie from "@/types/movie";


const CardMovie = ({movie}: {movie: Movie}) => {
  return (
      <Card className="w-80 grid place-items-center bg-slate-800 border-0 outline-none overflow-hidden">
        <CardHeader>
          <CardTitle className="text-slate-50">{movie.title}</CardTitle>
          <CardDescription className="text-slate-400">Year {movie.release_date}</CardDescription>
        </CardHeader>
        <CardContent className="">
          <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className="w-72" />
        </CardContent>
      </Card>
  );
};

export default CardMovie
