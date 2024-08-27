import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Firstcomponent from './components/View/Firstcomponent';
import Secontcomonent from './components/View/Secontcomonent';
import Nav from './components/common/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Firstcomponent />} />
        <Route path='/Secontcomonent' element={<Secontcomonent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
