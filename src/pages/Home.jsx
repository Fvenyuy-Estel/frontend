// import { Routes, Route, Navigate, } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { Link,  } from 'react-router-dom'
// import Navigation from "./Navigations";

// import "./App.css";

function Home(props) {

    return (
        <>
            {/* <Navigation/> */}
            <div className="text-center font-extrabold text-5xl my-10"><h1>Welcome to Our Categories</h1></div>
            <div className="flex justify-between px-5 mb-5">
                <Link to='/categories'><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Modify Categories</button></Link>
                <Link to='/form'><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Create Category</button></Link>
            </div>
            <div className="bg-slate-400 xl:grid xl:grid-cols-4 xl:gap-5 p-5 grid grid-cols-1 gap-7 lg:grid lg:grid-cols-3 lg:gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
                {props.category.map((item) => <CategoryCard key={item.id} name={item.name} description={item.description} image={item.image} />)}

            </div>
        </>
    );
}

export default Home;
