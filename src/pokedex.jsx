import { useState, useEffect } from 'react';
import './pokedex.css';

function Pokedex() {

    const [abrirPokedex, alteraAbrirPokedex] = useState(false);
    const [pokemon, alteraPokemon] = useState([]);
    const [pesquisa, alteraPesquisa] = useState('');

    async function pesquisarPokemon() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pesquisa);
        const data = await response.json();
        console.log(data);
        alteraPokemon(data);
    }


    return (

        <div>


            {abrirPokedex == true ? (
              []
            ) 
            : 
            (
                <button className="botaoAbrir" onClick={() => alteraAbrirPokedex(true)}>
                    Abrir Pokédex
                </button>
            )}

            {abrirPokedex && (
                <>
                <div className="pokedexGrupo">
                    <button className="botaoFechar" onClick={() => alteraAbrirPokedex(false)}>
                        Fechar Pokédex
                    </button>


                <div className='cameraGrupo'>
                    <div className='camera'></div>
                    <div className='camera2'></div>
                </div>

                <div className="bordaVisor">
                    <div className="visorPokedex">
                        <h1 className="titulo">Pokédex</h1>
                        <p className="descricao">Consulte um Pokémon</p>

                        <input className="inputPesquisa" onChange={(e) => alteraPesquisa(e.target.value)} placeholder="Buscar Pokémon" />
                        <button className="botaoPesquisar" onClick={pesquisarPokemon}>🔎Pesquisar</button>
                    </div>

                </div>

                </div>

            <div className="informacoesPokemon">
                <div className="bordaVisorInformacoes">
                    <div className="visorInformacoes">
                        <h2 className="nomePokemon">Nome: {pokemon.name}</h2>
                        <p className="tipoPokemon">Tipo: {pokemon.types?.[0]?.type.name}</p>

                        <img className="imagem" src={pokemon.sprites?.front_default} width="250" />
                      
                        <p className="habilidadesPokemon">Habilidades: {pokemon.abilities?.[0]?.ability.name}</p>
                    </div>
                </div>
            </div>
                </>
            )}


        </div>
    )
}
export default Pokedex;