export const load = async ({ params }) => {
	const slug = params.slug;
	const url = `https://pokeapi.co/api/v2/pokemon/${slug}`;
	const res = await fetch(url);
	const poke = await res.json();
	console.log(poke);
	return poke;
};
