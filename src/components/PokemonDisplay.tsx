"use client";

import usePokemon from "@/lib/usePokemon";
import Link from "next/link";
import { FormEvent } from "react";
import { Spinner, Form, Button } from "@/lib/bootstrap";
import Image from "next/image";
import { setNickname } from "@/lib/api";

export const PokemonDisplay = ({
	pokemonName,
	pageNumber,
}: {
	pokemonName: string;
	pageNumber: number;
}) => {
	const { pokemon, pokemonLoading, mutatePokemon } = usePokemon(pokemonName);

	const handleSubmitNickname = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target;
		if (!(target instanceof HTMLFormElement)) return;
		const formData = new FormData(target);
		const nickname = formData.get("nickname")?.toString().trim();

		if (!pokemon || !nickname) return;

		const update = await setNickname(pokemon, nickname);

		mutatePokemon(update, { revalidate: false });
	};

	return (
		<>
			<div className="d-flex flex-column align-items-center">
				<p>
					<Link href={`/?page=${pageNumber}`} className="link-light">
						← PokèDex
					</Link>
				</p>
				{pokemonLoading && <Spinner animation="grow" />}
				{pokemon === null && <p>Pokemon not found</p>}
				{pokemon && (
					<>
						<h1 className="text-center text-capitalize">{pokemon.name}</h1>
						<Image
							src={pokemon.sprites.other["official-artwork"].front_default}
							alt={`Pokemon: ${pokemon.name}`}
							width={400}
							height={400}
							priority
						></Image>
						<div className="d-inline-block mt-2">
							<div>
								<strong>Types:</strong>{" "}
								{pokemon.types.map((type) => type.type.name).join(", ")}
							</div>
							<div>
								<strong>Height:</strong> {pokemon.height * 10} cm
							</div>
							<div>
								<strong>Weight:</strong> {pokemon.weight / 10} kg
							</div>
						</div>
						<Form onSubmit={handleSubmitNickname} className="mt-4">
							<Form.Group controlId="pokemon-nickname-input" className="mb-3">
								<Form.Label>Give this Pokemon a nickname</Form.Label>
								<Form.Control
									name="nickname"
									placeholder="E.g. Ferdinard"
								></Form.Control>
							</Form.Group>
							<Button type="submit">Set nickname</Button>
						</Form>
					</>
				)}
			</div>
		</>
	);
};
