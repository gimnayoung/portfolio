import React from 'react'
import { Suspense } from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Main from './page/main'
import About from './page/about';

import './App.css';

import { ThemeProvider } from './store/themeProvider';
import { GlobalStyle } from './them/GlobalStyles';
import { styled } from 'styled-components';
import Skills from './page/Skills';

function App() {
  return (
    <BrowserRouter>
     <ThemeProvider>
      <GlobalStyle/>
        <Suspense fallback={<div>...loading</div>}>
          <Header/>
          <Routes>
            <Route path='/' element={<><Main/></>}></Route>
            <Route path='/about' element={<><About/></>}></Route>
            <Route path='/skills' element={<><Skills/></>}></Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
