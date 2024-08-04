"use client";

import Link from "next/link";
import { Row, Col, Button, Spinner } from "@/lib/bootstrap";
import PokemonEntry from "./PokemonEntry";
import { getPokemonPage } from "@/lib/api";
import useSWR from "swr";

export const PokemonList = ({ pageNumber }: { pageNumber: number }) => {
	const { data, isLoading } = useSWR(["getPokemonPage", pageNumber], () =>
		getPokemonPage(pageNumber)
	);

	if (isLoading)
		return <Spinner animation="border" className="d-block m-auto" />;

	return (
		<>
			<Row xs={1} sm={2} lg={3} xl={4} className="g-4">
				{data?.results.map((pokemonEntry) => (
					<Col key={pokemonEntry.name}>
						<PokemonEntry name={pokemonEntry.name} pageNumber={pageNumber} />
					</Col>
				))}
			</Row>
			<div className="d-flex justify-content-center gap-2 mt-4">
				{data?.previous && (
					<Link href={`/?page=${pageNumber - 1}`}>
						<Button>← Previous page</Button>
					</Link>
				)}
				{data?.next && (
					<Link href={`/?page=${pageNumber + 1}`}>
						<Button>Next page →</Button>
					</Link>
				)}
			</div>
		</>
	);
};
