import { Button } from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/layout';
import Login from '@/pages/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
