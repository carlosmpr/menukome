import React from 'react';

import './App.css';
import Banner from './components/Banner';
import Data from './components/Data';
import Engineering from './components/Engineering';
import Features from './components/Features';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SubMain from './components/SubMain';
import VisualEast from './components/VisualEat';
import Start from './components/Start'
import Form from './components/Form';
import Easytouse from './components/Easytouse';
function App() {
      //@ts-ignore
var lang = navigator.language || navigator.userLanguage;
console.log(lang)

  return (
    
    <div className="bg">
    <Navbar />
    {/* @ts-ignore*/}
    <Banner lang={lang}/>
    {/* @ts-ignore*/}
    <Main lang={lang}/>
    <div className="Banner">
            {lang === 'es' ?  <h1 >Ventajas</h1>:  <h1 >Advantages</h1>}
           
        </div>
      {/* @ts-ignore*/}
    <SubMain lang={lang}/>

      {/* @ts-ignore*/}
    <Engineering  lang={lang}/>
      {/* @ts-ignore*/}
    <VisualEast lang={lang}/>
    {/* @ts-ignore*/}
    <Easytouse lang={lang} />
    {/* @ts-ignore*/}
    <Features lang={lang}/>
    {/* @ts-ignore*/}
    <Data lang={lang}/>
    {/* @ts-ignore*/}
    <Start lang={lang}/>
    <Form />
    </div>
  );
}

export default App;
