const offset = 0 
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function converterPokemonTypesToLis(pokemonTypes){
    return pokemonTypes.map((typeSlopt)=> `<li class="type">${typeSlopt.type.name}</li>`)

}

function converterPokemonNoHtml(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${converterPokemonTypesToLis(pokemon.types).join(' ')}
            </ol>

            <img src="${pokemon.sprites.other.home.front_default}" 
            alt="${pokemon.name}" />
        </div>
    </li>
`
}

const pokemonListaRenderizada = document.getElementById('pokemonList')
//fetch retorna uma promise(promessa de um resultado.)

// converter para uma lista HTML:
pokeApi.getPokemons().then((pokemonList = [])=> {
    pokemonListaRenderizada.innerHTML +=  pokemonList.map(converterPokemonNoHtml).join('')

    })
