import React, { useEffect } from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Forth from './components/Forth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Eighth from './components/Eighth'
import CSS from './App.css'
import styled from 'styled-components'

const App = () => {
    
    return (
        <div>
            <div className="header">
                <header>GENERATION STARTERS</header>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 1<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <First />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 2<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Second />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 3<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Third />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 4<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Forth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 5<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Fifth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 6<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Sixth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 7<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Seventh />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 8<button className="accordion_button">+</button></h2>
                <div className="wrapper">
                    <Eighth />
                </div>
            </div>
        </div>
    )
}

export default App