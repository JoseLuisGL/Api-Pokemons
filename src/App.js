import logo from "./pokemonl.png";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import RecipeCard from "./Components/RecipeCard.js";
import { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado.js";
import Finder from "./Components/Finder.js";
import PokemonCard from "./Components/PokemonCard.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(null); 

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        {/* Añadir encabezado */}
        {<Encabezado logo={logo} titulo={"Pokemons"} />}
        <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />

        <Row xs={1} md={4} className="g-4 justify-content-center">
          {/* Renderizar la tarjeta de Pokemon encontrada si existe */}
          {pokemon && (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          )}
          {/* Renderizar las tarjetas de Pokemon desde la lista */}
          {pokemonList.map((pokemon, num) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num + 1}.png`}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
