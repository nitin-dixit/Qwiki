import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WikiCardProps {
  title: string;
  author: string;
  date: string;
  summary: string;
  href: string;
}

export function WikiCard({
  title,
  author,
  date,
  summary,
  href,
}: WikiCardProps) {
  return (
    <Card className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border-0 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <CardTitle className="text-xl text-stone-800 dark:text-stone-100 font-serif">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-0">
        <CardDescription className="text-stone-500 dark:text-stone-400 leading-relaxed">{summary}</CardDescription>
      </CardContent>
      <CardFooter className="pt-4">
        <Link
          href={href}
          className="text-stone-800 dark:text-stone-200 hover:underline text-sm font-medium"
        >
          Read article &rarr;
        </Link>
      </CardFooter>
    </Card>
  );
}
