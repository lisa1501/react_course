import React from "react";
import "./Meme.css"
import memesData from "../memesData.js"

let url
function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        console.log('clicked')
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        // console.log(randomNumber)
        // url = memesArray[randomNumber].url
        // console.log(url)
        setMemeImage(memesArray[randomNumber].url)

    }
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs"  
                />
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form--inputs"  
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
        
        
    )
}
export default Meme;