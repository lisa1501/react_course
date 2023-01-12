import React from "react";
import "./Meme.css"


function Meme() {
    return (
        <main>
            <form className="form">
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
                <button className="form--button">Get a new meme image🖼</button>
            </form>
        </main>
        
        
    )
}
export default Meme;