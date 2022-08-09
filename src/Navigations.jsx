import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/categories';
import Form from './components/Form';


function Navigation(props) {
    console.log(props)
    return (
        <BrowserRouter>
            <Routes>

                 <Route path='/' exact element={<Home props={props}/>}/>
                 <Route path='/categories' exact element={<Categories props={props}/>}/>
                 <Route path='/form' exact element={<Form/>}/>
                 {/* <Route path='/*' exact element={<NotFoundPage/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;