import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const { name } = props.match.params
    const {pokemon, setPokemon} = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
          setPokemon(res.data)
        })
      }, [name]) //defined but never used??
    
    return (//line 16 can not read property "name" of undefined.
        <div>
            <h1>{pokemon.name}</h1> 
            <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
        </div>
    )
}
export default Pokemon;