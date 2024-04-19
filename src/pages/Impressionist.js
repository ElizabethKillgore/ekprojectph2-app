import { Outlet, useOutletContext  } from "react-router-dom"
import ImpressionistContainer from '../components/ImpressionistContainer'

function Impressionist({handleAddPainting, setImpressionists}) {

    const contextObj = useOutletContext()
    console.log(contextObj)
    const impressionists = contextObj.impressionists
    
    
    const impressionistInfo = impressionists.map(impressionist => 
         <ImpressionistContainer key={impressionist.id} impressionist={impressionist} handleAddPainting={handleAddPainting}/>)
    
     

   return (
        <main> 
            <h3>Impressionist Paintings</h3>
             <Outlet context={impressionists} handleAddPainting={handleAddPainting} setImpressionists={setImpressionists}/>
             {impressionistInfo}    
        </main>
   )
}

export default Impressionist

