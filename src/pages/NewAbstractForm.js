import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

function NewAbstractForm() {
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    const contextObj = useOutletContext()
    const handleAbstractPainting = contextObj.handleAbstractPainting
    
    function handleSubmit(e) {
        e.preventDefault() 
        const abstractPaintingData = {
            artist: artist,
            title: title,
            date: date,
            image: image
        }

        fetch("http://localhost:3000/abstracts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json", 
            },
            body: JSON.stringify(abstractPaintingData)
        })
            .then((r) => r.json())
            .then((newPainting) => handleAbstractPainting(newPainting))
        }
        
    return (
        <div className="new-painting-form" >
            <h2>New Abstract Painting</h2>  
          <form onSubmit={handleSubmit} >
            <input type="text" artist="artist" value={artist} placeholder="Artist" onChange={(e) => setArtist(e.target.value)} />
            <input type="text" title="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" date="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)} />
            <input type="text" image="image" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
            <button type="submit">Add Painting</button> 
          </form>
        </div>
    )
}

export default NewAbstractForm