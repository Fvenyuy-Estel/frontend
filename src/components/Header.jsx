import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <>
            <div className='bg-blue-500 h-4/12 w- py-10 flex justify-between'>
                <h1 className='mx-10 my-5 text-white text-xl w-6/12'>BridgeLabs Onboarding {">  "}{props.name}</h1>
                <div className='my-5 w-3/12 md:flex md:justify-between'>
                    <div className='w-4/12 text-center '>
                        <Link to='/'><p className='text-white text-2xl hover:underline text-center'>Home</p></Link>
                    </div>
                    <div className='w-4/12 text-center'>
                        <Link to='/categories'><p className='text-white text-2xl hover:underline '>Categories</p></Link>
                    </div>
                    <div className='w-4/12 mt-2 mx-auto'>
                    <Link to='/form'><button onClick={logout} className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-black py-2 px-4 border border-white  rounded-full">LogOut</button></Link>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header