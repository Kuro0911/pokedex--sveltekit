<svelte:head>
    <title>pokemon</title>
</svelte:head>
<script>
   import { page } from '$app/stores';
   let poke = $page.data;
   console.log(poke);
</script>
<h1 class="text-4xl text-center my-8 uppercase">{poke.name}</h1>
<div class="flex w-full items-center justify-center">
    <img class="h-50 w-60" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt=""/>
</div>
<div class="flex w-full items-center justify-center">
    <div class="flex flex-col">
        <br/>
        {#each poke.stats as st}
            <h2 class="text-xl uppercase">{st.stat.name} :&nbsp{st.base_stat}</h2>
        {/each}
        <br/>
        <div class="flex flex-row">
            <h2 class="text-xl uppercase">Type :&nbsp</h2>
            {#each poke.types as typ}
                <h2 class="text-xl uppercase">{typ.type.name}&nbsp</h2>
            {/each}
        </div>
        <br/>
        <div class="flex flex-row ">
            <h2 class="text-xl uppercase">Abilities :&nbsp</h2>
            {#each poke.abilities as ab}
                <h2 class="text-xl uppercase">{ab.ability.name}&nbsp</h2>
            {/each}
        </div>
        <h2 class="text-xl my-8 uppercase">
            weight: {poke.weight}
        </h2>
    </div>
</div>
