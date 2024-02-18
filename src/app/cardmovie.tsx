import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



const CardMovie = ({title, year, img}) => {
  return (
      <Card className="w-80 grid place-items-center bg-slate-800 border-0 outline-none overflow-hidden">
        <CardHeader>
          <CardTitle className="text-slate-50">{title}</CardTitle>
          <CardDescription className="text-slate-400">Year {year}</CardDescription>
        </CardHeader>
        <CardContent className="">
          <img src={img} className="w-72" />
        </CardContent>
      </Card>
  );
};

export default CardMovie
