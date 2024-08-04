import axios from "axios";

export type Pokemon = {
	name: string;
	types: { type: { name: string } }[];
	weight: number;
	height: number;
	sprites: {
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
};

export type PokemonPage = {
	results: { name: string }[];
	next: string | null;
	previous: string | null;
};

const api = axios.create({
	baseURL: "https://pokeapi.co/api/v2/",
	timeout: 5000,
});

export const getPokemon = async (name: string) => {
	const response = await api.get<Pokemon>("/pokemon/" + name);
	return response.data;
};

export const getPokemonPage = async (page: number, pageSize = 12) => {
	const response = await api.get<PokemonPage>(
		`/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
	);
	return response.data;
};

export const setNickname = async (pokemon: Pokemon, nickname: string) => {
	return { ...pokemon, name: nickname };
};
