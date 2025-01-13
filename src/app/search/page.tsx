import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;

  if (!term) {
    return redirect("/");
  }

  return (
    <div>
      <h1>Search Results for {term}</h1>
    </div>
  );
}
