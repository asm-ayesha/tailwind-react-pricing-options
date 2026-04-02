import React from 'react';
import Link from './Link';


const navigationData = [
  { id: 1, name: "Home",        path: "/home",             method: "GET"  },
  { id: 2, name: "Users",       path: "/api/users",        method: "GET"  },
  { id: 3, name: "Create User", path: "/api/users/create", method: "POST" },
  { id: 4, name: "Products",    path: "/api/products",     method: "GET"  },
  { id: 5, name: "Settings",    path: "/settings",         method: "PUT"  },
];

const NavBar = () => {
    return (
        <nav>

           <ul className='flex justify-center gap-5'>
             {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
            }
            
           </ul>
            {/* <ul className='flex justify-center gap-5'>
                {
                    navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}




            {/* <ul className='flex justify-center gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul> */}
        </nav>
    );
};

export default NavBar;