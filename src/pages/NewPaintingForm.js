import React, { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"

function NewPaintingForm() {
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    const contextObj = useOutletContext()
    console.log(contextObj.handleAddPainting)

    function handleSubmit(e) {
        e.preventDefault() 
        const paintingData = {
            artist: artist,
            title: title,
            date: date,
            image: image
        }
    
    fetch("http://localhost:3000/impressionists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paintingData)
    })
    .then((r) => r.json())
    .then((newPainting) => contextObj.handleAddPainting(newPainting))
    }

    return (
        <div className="new-painting-form" onSubmit={handleSubmit} >
            <h2>New Painting</h2>
            <Outlet />
         <form>
            <input type="text" artist="artist" value={artist} placeholder="Artist" onChange={(e) => setArtist(e.target.value)}/>
            <input type="text" title="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" date="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
            <input type="text" image="image" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)}/>
            <button type="submit">Add Painting</button>
         </form>

        </div>
    )

}

export default NewPaintingForm