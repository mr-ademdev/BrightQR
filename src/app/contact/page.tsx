'use client'

import Link from 'next/link';
import Nav from '../components/Nav';
import ToggleMode from '../components/ToggleMode';

const ContactPage = () => {
  return (
    <div className='min-h-screen items-center w-full justify-center text-center overflow-x-hidden bg-gradient-to-br from-gray-300 to-gray-200 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-cyan-700'>
        <Nav/>
        <ToggleMode/>
        <div className='flex mt-40 justify-center items-center'>
            <div className="bg-sky-50 dark:bg-transparent dark:border dark:border-sky-50 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl dark:text-sky-200 text-sky-800 font-bold mb-4 text-center">Contact Me</h1>
                <p className="text-sky-900 dark:text-sky-200 mb-6 text-center">
                Feel free to reach out to me on LinkedIn!
                </p>
                <div className="flex justify-center">
                <Link href="https://www.linkedin.com/in/ramzi-benchadi" className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition duration-300" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
