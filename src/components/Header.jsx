import React from 'react';
import { Link } from 'react-router-dom';
import { SiYoutube } from 'react-icons/si';
import Searchbar from './Searchbar';
import Darkmode from './Darkmode';


export default function Header() {
    return (
        <div className='bg-orange_lt h-30 w-100 flex p-4 text-2xl mb-4'>
            <Link to='/' className='flex items-center'>
                <SiYoutube className='text-orange_dk' />
                <h1 className='font-bold ml-2 text-orange_dk'>Metube</h1>
            </Link>

            <Searchbar />
            <Darkmode />
        </div>
    );
}

