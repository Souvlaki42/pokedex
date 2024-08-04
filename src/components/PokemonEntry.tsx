import usePokemon from "@/lib/usePokemon";
import Link from "next/link";
import styles from "./PokemonEntry.module.css";
import { Spinner } from "@/lib/bootstrap";
import Image from "next/image";

export default function PokemonEntry({
	name,
	pageNumber,
}: {
	name: string;
	pageNumber: number;
}) {
	const { pokemon, pokemonLoading } = usePokemon(name);

	return (
		<Link href={`/${name}?page=${pageNumber}`}>
			<div className={styles.entry}>
				{pokemonLoading && <Spinner animation="grow" />}
				{pokemon && (
					<div className={styles.card}>
						<h1 className="text-center text-capitalize">{pokemon.name}</h1>
						<Image
							src={pokemon.sprites.other["official-artwork"].front_default}
							alt={`Pokemon: ${pokemon.name}`}
							width={200}
							height={200}
						></Image>
					</div>
				)}
			</div>
		</Link>
	);
}
