import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home/home';
import { Sessoes } from './Pages/Sessoes/Sessoes';
import { Checkout } from './Pages/Checkout/Checkout';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:id" element={<Sessoes/>} />
        <Route path="/movie/checkout" element={<Checkout/>} />
      </Routes>
    </Router>

    // <div className="App">
    //   <Navbar/>
    // <div className='Conteudo'>
    //   <Filmes/>
    // </div>
    //   <Footer/>
    // </div>
  );
}

export default App;
