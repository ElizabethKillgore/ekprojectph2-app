import React, { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"

function NewAbstractForm() {
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    const contextObj = useOutletContext()
    console.log(contextObj.handleAbstractPainting)

    return (
        <div>
            
        </div>
    )


}

export default NewAbstractForm