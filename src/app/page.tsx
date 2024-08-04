import { PokemonList } from "@/components/PokemonList";

export default function HomePage({
	searchParams: { page },
}: {
	searchParams: { page?: string };
}) {
	const pageNumber = parseInt(page ?? "1");

	return (
		<div>
			<h1 className="text-center mb-4">Gotta cache &apos;em all</h1>
			<PokemonList pageNumber={pageNumber} />
		</div>
	);
}
