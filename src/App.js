import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Firstcomponent from './components/View/Firstcomponent';
import Secontcomonent from './components/View/Secontcomonent';
import Lamination from './components/View/Lamination';

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Firstcomponent />} />
        <Route path='/Secontcomonent' element={<Secontcomonent />} />
        <Route path='/lamination' element={<Lamination />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
