import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import DateAndTime from './DateAndTime';

const NavBar = () => {
    return (
        <div className="h-16 w-screen bg-zinc-300 flex justify-between items-center px-20 text-gray-700 border-b border-gray-400 drop-shadow-lg">
            <div className="w-72 flex items-center justify-between text-center ">
                <BrowserRouter>
                    <Link
                        to="/"
                        className="relative group overflow-hidden pr-4 w-36 h-16 text-xl font-semibold flex justify-center items-center"
                    >
                        <div className="bg-green-500 w-28 h-8 -skew-x-12 absolute -translate-x-20 group-hover:-translate-x-0 transition-all duration-300" />
                        <h2 className="z-10">To-Do</h2>
                    </Link>
                    <Link
                        to="/"
                        className="relative group overflow-hidden pr-4 w-36 h-16 text-xl font-semibold flex items-center justify-center"
                    >
                        <div className="bg-red-400 w-28 h-8 -skew-x-12 absolute -translate-x-20 group-hover:-translate-x-0 transition-all duration-300" />
                        <h2 className="z-10">Diary</h2>
                    </Link>
                </BrowserRouter>
            </div>
            <div className="font-mono">
                <DateAndTime />
            </div>
        </div>
    );
};

export default NavBar;
