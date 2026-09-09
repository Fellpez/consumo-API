import { useState, useEffect } from 'react';


function Pokedex(){

    const [pokemon, alteraPokemon] = useState([]);
    const [pesquisa, alteraPesquisa] = useState('');

    async function pesquisarPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`);
        const data = await response.json();
        console.log(data);
        alteraPokemon(data);
    }


    return(
        <div>
            <h1>Pokedex</h1>
            <p>Consulte um Pokémon</p>

            <input onChange={(e) => alteraPesquisa(e.target.value)} placeholder="Buscar Pokémon"/>
            <button onClick={pesquisarPokemon}>🔎Pesquisar</button>

            <hr/>

            <h2>Nome: {pokemon.name}</h2>
            <p>Tipo: </p>

            <img />
            
        </div>
    )
}
export default Pokedex;