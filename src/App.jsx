import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App
