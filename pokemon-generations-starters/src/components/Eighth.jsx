import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Eighth = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const firstgen = ['grookey', 'scorbunny', 'sobble', 'rowlet', 'cyndaquil', 'oshawott']
    const [pokemon, setPokemon] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [pokemon3, setPokemon3] = useState(null)
    const [pokemon4, setPokemon4] = useState(null)
    const [pokemon5, setPokemon5] = useState(null)
    const [pokemon6, setPokemon6] = useState(null)

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

        axios.get(`${url}${firstgen[3]}`)
            .then(res => {
                setPokemon4(res.data)
            })

        axios.get(`${url}${firstgen[4]}`)
            .then(res => {
                setPokemon5(res.data)
            })

        axios.get(`${url}${firstgen[5]}`)
            .then(res => {
                setPokemon6(res.data)
            })
    }, [])

    if (pokemon && pokemon2 && pokemon3 && pokemon4 && pokemon5 && pokemon6) {
        return (
            <div className='wrapper'>
                <div>
                    <h3>{pokemon.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)}</span>
                    {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon2.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon2.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon2.types[0].type.name}>{pokemon2.types[0].type.name[0].toUpperCase() + pokemon2.types[0].type.name.slice(1)}</span>
                    {pokemon2.types[1] && <span className={pokemon2.types[1].type.name}>{pokemon2.types[1].type.name[0].toUpperCase() + pokemon2.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon3.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon3.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon3.types[0].type.name}>{pokemon3.types[0].type.name[0].toUpperCase() + pokemon3.types[0].type.name.slice(1)}</span>
                    {pokemon3.types[1] && <span className={pokemon3.types[1].type.name}>{pokemon3.types[1].type.name[0].toUpperCase() + pokemon3.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon4.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon4.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon4.types[0].type.name}>{pokemon4.types[0].type.name[0].toUpperCase() + pokemon4.types[0].type.name.slice(1)}</span>
                    {pokemon4.types[1] && <span className={pokemon4.types[1].type.name}>{pokemon4.types[1].type.name[0].toUpperCase() + pokemon4.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon5.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon5.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon5.types[0].type.name}>{pokemon5.types[0].type.name[0].toUpperCase() + pokemon5.types[0].type.name.slice(1)}</span>
                    {pokemon5.types[1] && <span className={pokemon5.types[1].type.name}>{pokemon5.types[1].type.name[0].toUpperCase() + pokemon5.types[1].type.name.slice(1)}</span>}
                </div>
                <div>
                    <h3>{pokemon6.name.toUpperCase()}</h3>
                    <img width={200} src={pokemon6.sprites.other['official-artwork'].front_default} />
                    <span className={pokemon6.types[0].type.name}>{pokemon6.types[0].type.name[0].toUpperCase() + pokemon6.types[0].type.name.slice(1)}</span>
                    {pokemon6.types[1] && <span className={pokemon6.types[1].type.name}>{pokemon6.types[1].type.name[0].toUpperCase() + pokemon6.types[1].type.name.slice(1)}</span>}
                </div>
            </div>
        )
    }
}

export default Eighth