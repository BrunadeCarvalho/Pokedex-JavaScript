const offset = 0 
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function converterPokemonNoHtml(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" 
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
