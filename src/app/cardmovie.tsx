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
    <div>
      <Card className="w-80  grid place-items-center bg-slate-700 overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Year {year}</CardDescription>
        </CardHeader>
        <CardContent className="w-52">
          <img src={img} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardMovie
