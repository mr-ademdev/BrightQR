import Image from 'next/image'
import React from 'react'
import TypedEffect from './TypedEffect'
import Link from 'next/link'

const Main = () => {
  return (
    <main className='w-full grid pt-32 sm:pt-0 xl:pt-0' style={{height: `calc(100vh - 6rem)`}}>
        <div className='w-full'>
            <div className='w-8/12 float-left mt-36 sm:mt-4 sm:w-full lg:mt-12 lg:w-full'>
                <TypedEffect/>
                <div>
                    <ul className='ml-8 mt-16 sm:w-[80%] sm:mx-[10%] lg:w-[90%] xl:mx-[5%]'>
                        <li className='flex mb-12 sm:grid sm:w-full 2xl:text-2xl'>
                            <span className='mr-4 bg-gradient-to-r from-sky-700 to-teal-700 text-transparent bg-clip-text font-bold mt-1 dark:from-sky-300 dark:to-teal-300'>Want to create a QR code for your image, video, url or any other data? Try it now</span>
                            <br className='hidden sm:block w-full'/>
                            <Link href={'/generate'} className='bg-gradient-to-r from-sky-700 to-teal-700 font-bold text-2xl rounded px-4 py-1 text-sky-400 hover:text-sky-300'> Generate</Link>
                        </li>
                        <li className='flex sm:grid sm:w-full 2xl:text-2xl'>
                            <span className='mr-4 mt-1 bg-gradient-to-r from-sky-700 to-teal-700 text-transparent bg-clip-text font-bold dark:from-sky-300 dark:to-teal-300'>Do you have a QR code from BrightQR? try to get informations about this QR code</span>
                            <br className='hidden sm:block w-full'/>
                            <Link href={'/get_data'} className='bg-gradient-to-r from-sky-700 to-teal-700 font-bold text-2xl rounded px-4 py-1 text-sky-400 hover:text-sky-300'>Get Data</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-4/12 float-right sm:w-full sm:pt-8 lg:w-full lg:pt-12 lg:grid text-center justify-center xl:mt-16'>
                <span className='hidden 2xl:block text-4xl font-bold dark:text-white text-sky-950'>Scan & Share This QR Code Of Our Website</span>
                <Image 
                    className='mr-12 mt-44 lg:mt-12 rounded-lg lg:mr-0 sm:my-12 sm:mr-0 sm:mx-8 2xl:mt-4 2xl:ml-8' 
                    src={'https://utfs.io/f/13c9edf7-8bef-4112-97ad-fd28dfb55fd8-sj1ss4.png'} 
                    width={300} 
                    height={300} 
                    alt='BrightQR QR Code scanner'
                />
            </div>
        </div>
    </main>
  )
}

export default Main
