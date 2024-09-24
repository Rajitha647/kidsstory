
import './App.css'
import Aboutpage from './components/about';
import Cardskerala from './components/cardskerala'
import Headernav from './components/headernav'
import Homepage from './components/homepage';
import Slider from './components/slider';
import { Routes,Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';

function App() {
  const Hpage=lazy(()=> import('./components/homepage'))
  const AboutPage=lazy(()=> import('./components/about'))


  return (
    <>
    <Headernav/>
    <section>
      <Suspense fallback={<div>Loading......</div>}/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
    </Routes>
    </section>
    </>
  )
}

export default App
