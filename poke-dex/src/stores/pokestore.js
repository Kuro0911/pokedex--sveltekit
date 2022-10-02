import { writable } from 'svelte/store';

export const pokemon = writable([]);
const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const loaded = data.results.map((data, ind) => {
		return {
			name: data.name,
			id: ind + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				ind + 1
			}.png`
		};
	});
	pokemon.set(loaded);
};
fetchPokemon();
