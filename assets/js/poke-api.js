
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name=pokeDetail.name

    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)

    //pegando a primeira posição do array:
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.home.front_default


    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response)=> response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset=0, limit=20) => {
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch (url)
//converte para json
    .then((response)=> response.json())
//json mto detalhados e altera para o map
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest)=> Promise.all(detailRequest))
    .then((pokemonsDetails)=> pokemonsDetails)
}

