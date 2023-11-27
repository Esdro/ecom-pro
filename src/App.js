import React from 'react';
import './App.css';
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignInComponent from "./routes/authenticate/authenticate.component.jsx";

const Shop = () => {
    return (
        <>
            <div className="p-3 text-center">
                Hello from there, I'm come from Shop Page!
            </div>
        </>
    )
}

function App() {
    return (
        <>
            <Routes>
                <Route element={<Navigation />} path='/'>
                    <Route element={<Home />} index />
                    <Route element={<Shop />} path='shop' />
                    <Route element={<SignInComponent />} path='auth' />
                </Route>
            </Routes>
        </>
    )
}

export default App;
