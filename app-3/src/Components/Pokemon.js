import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const { name } = props.match.params;
    // const { type } = props.match.params;
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          setPokemon(res.data)
          console.log(res.data)
        })
      }, [name])

      // useEffect(() => {
      //   axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`)
      //   .then((res) => {
      //     setPokemon(res.data)
      //   })
      // }, [type])
    
      const typesMap = pokemon.types?.map((type) => {
        return (
          <div>
            <h4>{type.type.name}</h4>

          </div>
        )
      })

    return (
        <div>
            <h1>{pokemon.name}</h1> 
            {typesMap}
            <img alt={pokemon.name} src={pokemon.sprites?.front_shiny} />
        </div>
    )
}
export default Pokemon;