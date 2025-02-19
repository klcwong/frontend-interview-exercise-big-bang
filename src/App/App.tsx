import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header/Header'
import Home from "../routes/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
