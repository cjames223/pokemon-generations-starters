import React from 'react'
import First from './First'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const AccordionSection = styled.div
const Container = styled.div

const Accordion = () => {
    return (
        <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
            <AccordionSection>
                <container>
                    <First />
                </container>
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default Accordion
