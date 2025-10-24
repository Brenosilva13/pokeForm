import React from "react";
import Forms from "./components/Forms.jsx";
import "./App.css";
import Lista from "./components/Lista.jsx";

function App() {
  const [pokemons, setPokemons] = React.useState(() => {
    const savedPokemons = localStorage.getItem("pokemons");
    return savedPokemons ? JSON.parse(savedPokemons) : [];
  });

  const adicionarPokemon = (pokemon) => {
    const newPokemons = [...pokemons, pokemon];
    setPokemons(newPokemons);
    localStorage.setItem("pokemons", JSON.stringify(newPokemons));
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Pokédex</h1>
        <p className="app-subtitle">Cadastre seus Pokémon favoritos!</p>
      </div>
      <Forms adicionarPokemon={adicionarPokemon} />
      <Lista items={pokemons} />
    </div>
  );
}

export default App;
