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
        .then((impressionistData) => setImpressionists(impressionistData))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/abstracts")
        .then(r => r.json())
        .then((abstractData) => setAbstracts(abstractData))
    }, [])

return (
    <div className="App">
        <strong>Great Paintings</strong>
        <header>
            <NavBar />
        </header>
        <Outlet context={impressionists} /> 
        <Outlet context={abstracts} />
    </div>
  );
}

export default App;


