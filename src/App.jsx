import React from 'react'
import Forms from './components/Forms.jsx'
import './App.css'
import Lista from './components/Lista.jsx'

function App() {

  const [pokemons, setPokemons] = React.useState([])

  const adicionarPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  return (
    <>
      <div>
        <h1>Pokédex</h1>
        <Forms adicionarPokemon={adicionarPokemon} />
        <Lista items={pokemons} />
      </div>
    
    </>
  )
}

export default App
