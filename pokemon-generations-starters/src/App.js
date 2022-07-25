import React from 'react'
import First from './components/First'
import Second from './components/Second'
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