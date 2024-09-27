# 🕵️‍♂️ Pokémon Fuzzy Search API

<p align="justify">Este proyecto es un pequeño backend desarrollado con Deno.js y el framework Oak, que realiza una búsqueda difusa sobre una lista de pokemons obtenidos desde la <a href="https://pokeapi.co/" target="_blank" >PokeAPI</a></p>


## 🚀 Funcionalidades

- 🔍 Búsqueda difusa: Permite buscar pokemons por su nombre utilizando un algoritmo de coincidencia difusa.

- 📡 Datos en tiempo real: Los pokemons se obtienen desde la PokeAPI al iniciar el servidor.

## 🛠️ Tecnologías

- ⚡ [Deno.js](https://deno.com/): Un entorno de ejecución seguro para JavaScript y TypeScript.

- 🐿️ [Oak](https://oakserver.org/): Un middleware framework para Deno similar a Koa.

- 🐱‍👤 [PokeAPI](https://pokeapi.co/): La API pública de donde se extraen los datos de los pokemons.

## 💻 Instalación

1. Asegúrate de tener instalado Deno. Si no lo tienes, puedes instalarlo siguiendo las instrucciones en https://deno.land/#installation.

2. Clona este repositorio:

```sh
git clone https://github.com/JoanRojasMejia/backend-prueba-global66.git
```

3. Entra en el directorio del proyecto:

```sh
cd backend-prueba-global66
```

4. Inicia el servidor:


```sh
deno run --allow-net server.ts
```

## 🚦 Uso

### 📡 Endpoint de búsqueda

- Ruta: `/searchPokemon`
- Método: `GET`
- Parámetros:
  - 🔤 `pokemonName`: El nombre del pokemon o parte del nombre que deseas buscar.

<br />

- Ejemplo de uso:

```bash
curl "http://localhost:3000/searchPokemon?pokemonName=char"
```
- Respuesta:

```json
[
  {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/"
  },
  {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/"
  },
  {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/"
  },
  ...
]

```