import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css';


function App() {
    const [impressionistPaintings, setImpressionistPaintings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/impressionistPaintings")
        .then(r => r.json())
        .then((impressionistPaintings) => setImpressionistPaintings(impressionistPaintings))
    }, [])
  
return (
    <div className="App">
        <strong>Great Artists</strong>
        <header>
            <NavBar />
        </header>
    </div>
  );
}

export default App;
