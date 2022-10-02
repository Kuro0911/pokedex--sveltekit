<svelte:head>
    <title>pokemon</title>
</svelte:head>
<script>
   import { page } from '$app/stores';
   let poke = $page.data;
</script>
<h1 class="text-4xl text-center my-8 uppercase">{poke.name}</h1>
