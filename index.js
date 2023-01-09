// create new h1 elemet
// give it some textContent
// give it a class name of "header"



// append it as a child of the div#root
const h1 = document.createElement("h1")
h1.textContent = "I'm learing React Course"
h1.className = "header"
document.getElementById("root").append(h1)
console.log(h1)


const element = (<h2 className="header">This is JSX</h2>)
console.log(element)

ReactDOM.createRoot(document.getElementById('root')).render(element);


// challenge:
const navbar = (
    <nav>
        <h1>My page</h1>
        <ul>
            <li>About me</li>
            <li>Resume</li>
            <li>contact me</li>
        </ul>

    </nav>

)
ReactDOM.createRoot(document.getElementById('root')).render(navbar);
