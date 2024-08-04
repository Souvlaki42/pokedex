import { PokemonDisplay } from "@/components/PokemonDisplay";

type Props = {
	params: { pokemon: string };
	searchParams: { page?: string };
};

export default function PokemonDisplayPage({
	params: { pokemon },
	searchParams: { page },
}: Props) {
	const pageNumber = parseInt(page ?? "1");

	return <PokemonDisplay pokemonName={pokemon} pageNumber={pageNumber} />;
}
