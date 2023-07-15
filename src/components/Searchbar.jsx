import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom';


export default function Searchbar() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const { keyword } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }
    const handleInputChange = (e) => {
        setText(e.target.value);
    }
    useEffect(() => { setText(keyword || "") }, [keyword])
    return (
        <div>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input className="w-7/12 p-2 outline-none bg-black text-gray-50 rounded-md" type='text' placeholder='Search...'
                    name='search' onChange={handleInputChange} value={text} />
                <button className="">
                    <span className="">
                        <BiSearch />
                    </span>
                </button>
            </form >
        </div >
    );
}

