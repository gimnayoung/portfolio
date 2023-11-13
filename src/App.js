import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./page/main";
import About from "./page/about";
import Modal from "./components/modal";
import Main2 from "./page/main2"
import Modal2 from './components/projectModal'

import "./App.css";

import { ThemeProvider } from "./store/themeProvider";
import { GlobalStyle } from "./them/GlobalStyles";
import { styled } from "styled-components";
import Skills from "./page/Skills";
import Contact from "./page/contact";
import Projects from "./page/project";

const Wrap=styled.div`
max-width: 1300px;
width: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Wrap>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main2></Main2>
                </>
              }
            ></Route>
            {/* <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            ></Route> */}
            <Route
              path="/skills"
              element={
                <>
                  <Skills />
                </>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            ></Route>
          </Routes>
          </Wrap>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
