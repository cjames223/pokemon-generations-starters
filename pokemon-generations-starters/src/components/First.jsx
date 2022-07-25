import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const First = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const firstgen = ['bulbasaur', 'charmander', 'squirtle']
    const [pokemon, setPokemon] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [pokemon3, setPokemon3] = useState(null)

    axios.get(`${url}${firstgen[0]}`)
        .then(res => {
            setPokemon(res.data)
        })

    axios.get(`${url}${firstgen[1]}`)
        .then(res => {
            setPokemon2(res.data)
        })

    axios.get(`${url}${firstgen[2]}`)
        .then(res => {
            setPokemon3(res.data)
        })

    if(pokemon) {
        return(
            <div className='wrapper'>
                <div>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon.sprites.other['official-artwork'].front_default}/>
                </div>
                <div>
                    <h3>{pokemon2.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon2.sprites.other['official-artwork'].front_default}/>
                </div>
                <div>
                    <h3>{pokemon3.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon3.sprites.other['official-artwork'].front_default}/>
                </div>
                
            </div>
        )
    }
}    

export default First