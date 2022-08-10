// import { Routes, Route, Navigate, } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./pages/categories";
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Form from './components/Form';
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
	const [category, setCategory] = useState([]);

	const getCategory = async () => {
		try {
			const url = 'https://simplor.herokuapp.com/api/category/categories';
			const data = await axios.get(url)
			console.log(data)
			setCategory(data.data)
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCategory();
	}, []);
	console.log(category)
	const user = JSON.parse(localStorage.getItem('user'))
	return (
		
        <BrowserRouter>
            <Routes>

                 <Route path='/' exact element={user?<Home category={category}/>: <Navigate to='/login'/>}/>
                 <Route path='/categories' exact element={user?<Categories category={category}/>: <Navigate to='/login'/>}/>
                 <Route path='/form' exact element={user?<Form/>: <Navigate to='/login'/>}/>
                 <Route path='/login' exact element={<Login/>}/>
                 <Route path='/signup' exact element={<Signup/>}/>
                 {/* <Route path='/signin' exact element={<Signin/>}/> */}
                 {/* <Route path='/*' exact element={<NotFoundPage/>}/> */}
            </Routes>
        </BrowserRouter>
	);
}

export default App;
