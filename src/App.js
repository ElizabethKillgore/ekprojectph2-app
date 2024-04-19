import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css';


function App() {
    const [impressionists, setImpressionists] = useState([])
    const [abstracts, setAbstracts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/impressionists")
        .then(r => r.json())
        .then((impressionists) => setImpressionists(impressionists))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/abstracts")
        .then(r => r.json())
        .then((abstracts) => setAbstracts(abstracts))
    }, [])

    function handleImpressionistPainting(newPainting) {
        setImpressionists([...impressionists, newPainting])
         }

    function handleAbstractPainting(newPainting) {
        setAbstracts([...abstracts, newPainting])
    }
    
return (
    <div className="App">
        <strong>Great Paintings</strong>
        <header>
            <NavBar />
        </header>
        <Outlet context={{impressionists: impressionists, abstracts: abstracts, handleImpressionistPainting: handleImpressionistPainting, handleAbstractPainting: handleAbstractPainting}}  />  
        
    </div>
  );
}

export default App;

fetch("https://api.artic.edu/api/v1/artworks/search?q=monet&fields=id,title,date_display,image_id")
.then(r => r.json())
.then(data => console.log(data))

fetch("https://api.artic.edu/api/v1/artworks/search?q=kandinsky&fields=id,title,date_display,image_id")
.then(r => r.json())
.then(data => console.log(data))

fetch ("https://api.artic.edu/api/v1/artworks/search?q=klee&fields=id,title,date_display,image_id")
.then(r => r.json())
.then(data => console.log(data))

