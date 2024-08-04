import { Pokemon, PokemonPage } from "@/types/Pokemon";
import api from "./axiosInstance";

export const getPokemon = async (name: string) => {
	const delay = Math.random() * 2000;
	await new Promise((r) => setTimeout(r, delay));
	const response = await api.get<Pokemon>("/pokemon/" + name);
	return response.data;
};

export const getPokemonPage = async (page: number) => {
	const pageSize = 12;
	const response = await api.get<PokemonPage>(
		`/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
	);
	return response.data;
};

export const setNickname = async (pokemon: Pokemon, nickname: string) => {
	return { ...pokemon, name: nickname };
};
