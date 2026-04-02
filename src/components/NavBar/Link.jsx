import React from 'react';

const Link = ({ route }) => {
    console.log(route)
    return (
        <div>
            <li className='hover:text-violet-400'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;