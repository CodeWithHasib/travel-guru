import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'Destinations', url: '/destinations' },
    { label: 'Tours', url: '/tours' },
    { label: 'Blog', url: '/blog' }
];

const NavBar = () => {
    const path = useLocation().pathname;
    // console.log(path)  
    const [navPath, setNavPath] = useState(true);
    if (path === '/user/login') {
        setNavPath(false)
    } else {
        setNavPath(true)
    }
    const navigate = useNavigate();
    return (
        <div className='w-[90%] flex justify-between items-center py-3 mx-auto'>
            <div className="">
                <img src={logo} className='h-[50px]' alt="" />
            </div>
            <div className="relative">
                <input type="text" className='px-9 py-1 border focus:outline-primary focus:border-none text-white border-white rounded-lg placeholder-white outline-none bg-[#ffffff2c]' placeholder='Search your Destination...' />
                <span className='text-white absolute left-2 text-2xl top-[6px]'><AiOutlineSearch /></span>
            </div>
            <div className="">
                <ul>
                    {
                        navbarItems.map((item, index) => (
                            <li key={index} className='inline-block mx-2'>
                                <NavLink to={item.url} className='text-white duration-200 text-base hover:text-primary'>{item.label}</NavLink>
                            </li>
                        ))
                    }
                    <li className='inline-block ml-3'>{navPath ? <button className='px-4 py-2 font-semibold rounded-md  bg-[#F9A51A]' onClick={() => navigate('user/register')}>Register</button> : <button className='px-4 py-2 font-semibold rounded-md  bg-[#F9A51A]' onClick={() => navigate('user/login')}>Login</button>}</li>
                </ul>

            </div>
        </div>
    );
};

export default NavBar;