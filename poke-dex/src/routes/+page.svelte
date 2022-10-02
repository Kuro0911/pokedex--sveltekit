<script>
    import Navbar from "../components/navbar.svelte";
    import { pokemon } from "../stores/pokestore";
    console.log($pokemon);
</script>

<svelte:head>
    <title>pokedex</title>
</svelte:head>

<div class="main-wrap">
    <h1>POKEDEX</h1>
    <Navbar/>
</div>
<div>
    {#each $pokemon as poke}
        <p>{poke.name}</p>
    {/each}
</div>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .main-wrap{
        text-align: center;
    }
    .main-wrap > h1{
        color: red;
    }
</style>