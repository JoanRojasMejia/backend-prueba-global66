import { Response } from '@oak/oak/response'
import { Request } from '@oak/oak/request'

import Fuse from 'fuse.js'

type Pokemon = {
  name: string
  url: string
}

let pokemons: Pokemon[] = []
const options = {
  keys: ['name'],
  includeScore: false,
  threshold: 0.3
}

export const getPokemonsBySearch = async ({ response, request }: { request: Request; response: Response }) => {
  const pokemonName = request.url.searchParams.get('pokemonName')

  if (!pokemonName || pokemonName === '') {
    response.status = 404
    response.body = {
      message: 'You need to provide a name'
    }
    return
  }

  if (pokemons.length === 0) {
    const fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await fetchPokemons.json()
    pokemons = data.results
  }

  const fuse = new Fuse(pokemons, options)
  const resultSearch = fuse.search(pokemonName)

  const pokemonsBySearch = resultSearch.map((r) => r.item)

  response.status = 200
  response.body = pokemonsBySearch
}
