import React from 'react';

export default function Footer(props){
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <small>© Saipulla development. all rights reserved.</small>
        </footer>
    )
}