import React from "react";
import "./Meme.css"
import memesData from "../memesData.js"

let url
function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
        
    })
    const [allMemeImage, setAllMemeImages]= React.useState(memesData)
    function getMemeImage() {
        console.log('clicked')
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url =memesArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))

    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }
    return (
        <main>
            
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs" 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form--inputs"
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}  
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>


            </div>
            
        </main>
        
        
    )
}
export default Meme;