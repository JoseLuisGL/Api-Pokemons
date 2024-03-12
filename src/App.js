import React, { useEffect, useState } from "react";
import logo from "./pokemonl.png";
import "./App.css";
import { Container } from "react-bootstrap";
import Encabezado from "./Components/Encabezado.js";
import Finder from "./Components/Finder.js";
import PokemonCard from "./Components/PokemonCard.js";
import PokemonStatsCard from "./Components/PokemonStatsCard.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonStats, setPokemonStats] = useState([]);

  const buscarPokemonAbilities = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      const stats = data.stats.map((stat) => stat.stat.name);
      setPokemonStats(stats);
    } catch (error) {
      console.error("Error no se encuentran las estadisticas:", error);
    }
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <Encabezado logo={logo} titulo={"Pokemons"} />
        <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        {pokemon && (
          <>
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              onSeeAbilities={() => buscarPokemonAbilities(pokemon.name)}
            />
            {pokemonStats.length > 0 && (
              <PokemonStatsCard abilities={pokemonStats} />
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default App;

