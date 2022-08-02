import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useEffect, useState } from 'react'
import { Accordion, AccordionTab} from 'primereact/accordion'
import { Button } from 'primereact/button'
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
import './App.css'

export const App = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            if (index === -1) {
                _activeIndex.push(itemIndex);
            }
            else {
                _activeIndex.splice(index, 1);
            }
        }

        setActiveIndex(_activeIndex);
    }

    return (
        <div className="accordion-demo">
            <div className="header">
                <header>GENERATION STARTERS</header>
            </div>
            <div className="card">
                <Accordion multiple activeIndex={[0]}>
                    <AccordionTab header="Generation 1">
                        <First />
                    </AccordionTab>
                    <AccordionTab header="Generation 2">
                        <Second />
                    </AccordionTab>
                    <AccordionTab header="Generation 3">
                        <Third />
                    </AccordionTab>
                    <AccordionTab header="Generation 4">
                        <Forth />
                    </AccordionTab>
                    <AccordionTab header="Generation 5">
                        <Fifth />
                    </AccordionTab>
                    <AccordionTab header="Generation 6">
                        <Sixth />
                    </AccordionTab>
                    <AccordionTab header="Generation 7">
                        <Seventh />
                    </AccordionTab>
                    <AccordionTab header="Generation 8">
                        <Eighth />
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}

export default App