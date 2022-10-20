import { useState } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
    return (
        <div className="border-box">
            <Nav />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
