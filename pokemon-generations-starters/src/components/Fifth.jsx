import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fifth = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const firstgen = ['snivy', 'tepig', 'oshawott']
    const [pokemon, setPokemon] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [pokemon3, setPokemon3] = useState(null)

    useEffect(() => {
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
    }, [])

    if (pokemon && pokemon2 && pokemon3) {
        return (
            <div className='wrapper'>
                <div>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon.sprites.other['official-artwork'].front_default} />
                    <span id='pokemon' className={pokemon.types[0].type.name}>{pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)}</span>
                    {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon2.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon2.sprites.other['official-artwork'].front_default} />
                    <span id='pokemon' className={pokemon2.types[0].type.name}>{pokemon2.types[0].type.name[0].toUpperCase() + pokemon2.types[0].type.name.slice(1)}</span>
                    {pokemon2.types[1] && <span className={pokemon2.types[1].type.name}>{pokemon2.types[1].type.name[0].toUpperCase() + pokemon2.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon3.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon3.sprites.other['official-artwork'].front_default} />
                    <span id='pokemon' className={pokemon3.types[0].type.name}>{pokemon3.types[0].type.name[0].toUpperCase() + pokemon3.types[0].type.name.slice(1)}</span>
                    {pokemon3.types[1] && <span className={pokemon3.types[1].type.name}>{pokemon3.types[1].type.name[0].toUpperCase() + pokemon3.types[1].type.name.slice(1)}</span>}
                </div>

            </div>
        )
    }
}

export default Fifth