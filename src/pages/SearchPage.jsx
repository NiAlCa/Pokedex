import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "../components/PokemonList/CardPokemon";

export const SearchPage = () => {
  const location = useLocation();

  console.log(location);

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter(pokemon =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className="p-search">
        se encontraron <span>{filteredPokemons.length}</span> resultados: {" "}
      </p>

      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
