import React from 'react'
import { useOutletContext } from "react-router-dom"
import AbstractCard from "../components/AbstractCard"

function Abstract() {
    
    const contextObj = useOutletContext()
    const {abstracts} = contextObj
    console.log(abstracts)
    
    const abstractInfo = abstracts.map(abstract => 
        <AbstractCard key={abstract.id} abstract={abstract}/>)

    return ( 
        <main>
            <h3>Abstract Paintings</h3>
                {abstractInfo}  
        </main>
    )
}

export default Abstract

