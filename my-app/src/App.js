// import logo from './logo.svg';
import './App.css';
// import Header  from './components/Header';
import Footer from './Components/Footer';
// import MainContent from './components/MainContent';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

// import Navbar from 'reactstrap/lib/Navbar';
// import Nav from 'reactstrap/lib/Nav';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App(){
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
};
