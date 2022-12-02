import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Thematique from "./components/Thematique";

function App() {
    return (
        /*<div className="App">
          <header className="App-header">
            <Navbar/>
          </header>
        </div>*/
        <BrowserRouter>
            <Navbar/><br/><br/><br/><br/>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
                <Route
                    path='thematiques'
                    element={
                        <div>
                            <Thematique/>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
