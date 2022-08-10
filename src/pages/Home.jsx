// import { Routes, Route, Navigate, } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { Link, } from 'react-router-dom'
// import Navigation from "./Navigations";

// import "./App.css";

function Home(props) {

    return (
        <>
            {/* <Navigation/> */}
            <div className="bg-blue-500 -mt-10 text-white py-5">
                <div className="text-center font-extrabold text-5xl my-10"><h1>Welcome BridgeLabs Onboarding</h1></div>
                <div className="flex justify-between px-5 mb-5 w-10/12 mx-auto">
                    <Link to='/categories'><button className="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded-full">Modify Categories</button></Link>
                    <Link to='/form'><button className="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded-full">Create Category</button></Link>
                </div>
            </div>
            <div className="bg- xl:grid xl:grid-cols-4 xl:gap-5 p-5 grid grid-cols-1 gap-7 lg:grid lg:grid-cols-3 lg:gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
                {props.category.map((item) => <CategoryCard key={item.id} name={item.name} description={item.description} image={item.image} />)}

            </div>
        </>
    );
}

export default Home;
