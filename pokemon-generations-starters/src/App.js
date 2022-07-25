import React from 'react'
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
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const AccordionSection = styled.div
const Container = styled.div

const App = () => {
    
    return (
        <div>
            <div className="header">
                <header>GENERATION STARTERS</header>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 1</h2>
                <span>+</span>
                <div className="wrapper">
                    <First />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 2</h2>
                <span>+</span>
                <div className="wrapper">
                    <Second />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 3</h2>
                <span>+</span>
                <div className="wrapper">
                    <Third />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 4</h2>
                <span>+</span>
                <div className="wrapper">
                    <Forth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 5</h2>
                <span>+</span>
                <div className="wrapper">
                    <Fifth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 6</h2>
                <span>+</span>
                <div className="wrapper">
                    <Sixth />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 7</h2>
                <span>+</span>
                <div className="wrapper">
                    <Seventh />
                </div>
            </div>
            <div className="generation">
                <h2 className="gen-header">GENERATION 8</h2>
                <span>+</span>
                <div className="wrapper">
                    <Eighth />
                </div>
            </div>
        </div>
    )
    
    //return (
        //<IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
            //<AccordionSection>
                //<container>
                    //<h1>test</h1>
                //</container>
            //</AccordionSection>
        //</IconContext.Provider>
    //)
}

export default App