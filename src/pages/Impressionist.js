import { Outlet, useOutletContext  } from "react-router-dom"
import ImpressionistContainer from '../components/ImpressionistContainer'

function Impressionist() {

    const contextObj = useOutletContext()
    console.log(contextObj)
    const impressionists = contextObj.impressionists
    

    const impressionistInfo = impressionists.map(impressionist => 
         <ImpressionistContainer key={impressionist.id} impressionist={impressionist}/>)
    

   return (

        <main> 
            <h3>Impressionist Paintings</h3>
             <Outlet context={impressionists}/>
             {impressionistInfo}    
        </main>
   )
}

export default Impressionist

