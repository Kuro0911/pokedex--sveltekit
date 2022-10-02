<script>
    import Navbar from "../components/navbar.svelte";
    import { pokemon } from "../stores/pokestore";
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
    .main-wrap{
        text-align: center;
    }
    .main-wrap > h1{
        color: red;
    }
</style>