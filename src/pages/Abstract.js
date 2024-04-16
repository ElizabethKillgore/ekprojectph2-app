import React from 'react'
import { Outlet, useOutletContext  } from "react-router-dom"
import AbstractContainer from "../components/AbstractContainer"

function Abstract() {
    const abstracts = useOutletContext()
    console.log(abstracts)
    
    const abstractInfo = abstracts.map(abstract => 
        <AbstractContainer key={abstract.id} abstract={abstract}/>)

   return ( 
    <main>
        <h3>Abstract Paintings</h3>
             <Outlet context={abstracts}/>
             {abstractInfo}  
    </main>
   )
}

export default Abstract