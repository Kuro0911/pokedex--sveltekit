<script>
    import { pokemon } from "../stores/pokestore";
    import PokemonCard from "../components/pokemonCard.svelte";
    
    let searchTerm = "";
    let filtered = [];
    
    $: {
        if(searchTerm){
            filtered = $pokemon.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else{
            filtered = [...$pokemon];
        }
    }
</script>

<svelte:head>
    <title>pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">POKEDEX</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" 
    type="text" 
    placeholder="Search Pokemon" 
    bind:value={searchTerm}
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filtered as poke}
        <PokemonCard poke={poke}/>
    {/each}
</div>
    
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>