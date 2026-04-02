import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';




const navigationData = [
    { id: 1, name: "Home", path: "/home", method: "GET" },
    { id: 2, name: "Users", path: "/api/users", method: "GET" },
    { id: 3, name: "Create User", path: "/api/users/create", method: "POST" },
    { id: 4, name: "Products", path: "/api/products", method: "GET" },
    { id: 5, name: "Settings", path: "/settings", method: "PUT" },
];

const NavBar = () => {
    const [open, setOpen] =useState(false)
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <div className='flex' onClick={() => setOpen(!open)}>
                {
                    open? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu> 
                }

                <ul className={`md:hidden absolute bg-gray-200 duration-1000 p-3
                    ${open? 'top-8' : '-top-40'}
                    `}>
                    {links}
                </ul>
               
            <h3 className='ml-4'>My Navbar</h3>
            </div>

            <ul className='md:flex justify-center gap-5 hidden'>
                {
                    links
                }

            </ul>
          
            <button>Sign in</button>
        </nav>
    );
};

export default NavBar;