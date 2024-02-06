import React from "react"

function NewStoreForm({ handleSubmit, setName, setImage, setSeason, setEpisode, name, image, season, episode }) {

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" onChange={(event) => setName(event.target.value)} value={name}/>
            <input type="text" id="image" placeholder="Image URL" onChange={(event) => setImage(event.target.value)} value={image}/>
            <input type="number" id="season" placeholder="Season" step="1" onChange={(event) => setSeason(Number(event.target.value))} value={season}/>
            <input type="number" id="episode" placeholder="Episode" step="1" onChange={(event) => setEpisode(Number(event.target.value))} value={episode}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;