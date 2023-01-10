import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page(){
    return (
        <div>
            <header>
                <nav>
                <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walkes</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is Maitained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>        
            </ol>
            <footer>
                <small>© Saipulla development. all rights reserved.</small>
            </footer>
        </div>
    )
}
root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
    <Page />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
