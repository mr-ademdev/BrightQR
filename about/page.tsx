'use client'
import Image from 'next/image';
import Nav from '../components/Nav';
import ToggleMode from '../components/ToggleMode';

const About = () => {
  return (
    <div className='w-full justify-center text-center overflow-x-hidden bg-gradient-to-br from-gray-300 to-gray-200 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-cyan-700'>
        <Nav/>
        <ToggleMode/>
        <main className='w-full grid sm:w-[90%] sm:mx-[5%]' style={{height: `calc(100vh - 6rem)`}}>
            <div className="max-w-7xl mx-auto">
                <div className='mb-8 justify-center grid'>
                    <span className='text-center mb-4 2xl:block text-4xl font-bold dark:text-white text-sky-950'>Scan & Share This QR Code Of Our Website</span>
                    <Image 
                        className='rounded-lg shadow-lg' 
                        src={'https://utfs.io/f/13c9edf7-8bef-4112-97ad-fd28dfb55fd8-sj1ss4.png'} 
                        width={300} 
                        height={300} 
                        alt='BrightQR QR Code scanner'
                    />
                </div>
                <div className="text-center mb-16">
                <h1 className="text-4xl font-bold  dark:text-sky-500 text-sky-950 mb-4">About BrightQR</h1>
                <p className="text-lg  dark:text-white text-sky-950 font-bold font-titillium">
                    BrightQR is your ultimate solution for generating and managing QR codes. Whether you need to create a QR code for an image, video, portfolio, or any other URL, BrightQR has got you covered. You can also upload your existing QR codes to retrieve the information stored within them.
                </p>
                </div>
                <div className="grid">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold  dark:text-sky-500 text-sky-950 mb-4">Generate QR Codes</h2>
                    <p className=" dark:text-white text-sky-950 font-bold mb-4">
                    With BrightQR, you can easily generate QR codes for any URL. Simply enter the URL, and our tool will create a QR code for you in seconds. Whether it&lsquo;s a link to an image, video, portfolio, or any other type of content, BrightQR makes it easy to share your links with a simple scan.
                    </p>
                    <h2 className="text-3xl font-semibold  dark:text-sky-500 text-sky-950 mb-4">Upload and Decode QR Codes</h2>
                    <p className=" dark:text-white text-sky-950 font-bold">
                    Have an existing QR code? Upload it to BrightQR and instantly retrieve the information stored within it. Our advanced decoding technology ensures that you get accurate and reliable results every time.
                    </p>
                </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default About;