import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

export default function App(){
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div>
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    )
};
