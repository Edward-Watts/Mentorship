import './App.css';

import Layout from './layout/layout';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import Signin from './views/signin/signin';
import Register from './views/register/register';
import Field from './views/field/field';
import Mentor from './views/mentor/mentor';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/field/:id' element={<Field />} />
          <Route path='/mentor/@:id' element={<Mentor />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
