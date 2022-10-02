<script>
    import Navbar from "../components/navbar.svelte";
    import { pokemon } from "../stores/pokestore";
    import PokemonCard from "../components/pokemonCard.svelte";   
</script>

<svelte:head>
    <title>pokedex</title>
</svelte:head>

<div class="p-8 nax-w-6xl mx-auto">
<Navbar/>
<h1 class="text-4xl text-center my-8 uppercase">POKEDEX</h1>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemon as poke}
        <PokemonCard poke={poke}/>
    {/each}
</div>
</div>
    
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>