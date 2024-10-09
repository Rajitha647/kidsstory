import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CommentProvider } from './components/commentprovider';
import Headernav from './components/headernav';
import Usememoex from './components/usememoex';
import UseCallback from './components/usecallback';
import Homepage from './components/homepage';

const Hpage = lazy(() => import('./components/homepage'));
const Apage = lazy(() => import('./components/about'));

function App() {
  return (
    <>
      <CommentProvider>
        <Headernav />
        <Usememoex/>
       
        <section>
          <Suspense
            fallback={
              <div>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            
            <Routes>
              <Route path="/" element={<Hpage />} />
              <Route path="/about" element={<Apage />} />
            </Routes>
          </Suspense>
        </section>
      </CommentProvider>
    
       {/* <UseCallback/> */}
    </>
  );
}

export default App;