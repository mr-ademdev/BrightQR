import { useState } from "react";
import { generateQR } from "@/utils/generateQR";
import { useRouter } from 'next/navigation';
import { FaInfo } from "react-icons/fa";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function QRForm() {
    const router = useRouter();
    const [content, setContent] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setContent(event.target.value)
    }
    const handleSubmit = async () => {
        setIsLoading(true)
        const response = await generateQR(content)
        //console.log(response)
        if(response.message){
            setIsLoading(false)
            setError(response.message)
        }else{
            setIsLoading(false)
            console.log(response.id)
            router.push(`/get_data/${response.id}`)
        }
    }
    return (
        <div className="w-[60%] mx-[20%] pt-8 rounded sm:w-[90%] sm:mx-[5%] sm:pb-8">
            {error ? 
                <div className="fixed top-32 right-4">
                    <span className="float-left "><IoClose onClick={()=>setError('')} className="w-16 h-16 rounded-full mr-8 mt-6 bg-red-300 hover:bg-red-400 cursor-pointer text-red-50" /></span>
                    <div className=" bg-red-400 p-0 rounded-lg py-2 px-8 float-right">
                        <h1 className='text-3xl font-bold text-red-50 my-8'>{error}</h1>
                    </div>
                </div>
            : null}
            {isLoading ? 
                <div className="fixed inset-0 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            : 
            <>
                <div id="messages">
                    <span className="flex float-left text-xl font-semibold text-sky-700 dark:text-sky-500 my-4"><FaInfo className="mx-4 mr-6 mt-1" />Enter the url of your data (image, video, url, text etc...)</span>
                    <span className="flex float-left text-xl font-semibold text-sky-700 dark:text-sky-500 my-4"><FaInfo className="mx-4 mt-1" />Click for Generate to generate a QR code for what you choose. And you&lsquo;ll return to see your QR code. </span>
                    <span className="flex float-left text-xl font-semibold text-sky-700 dark:text-sky-500 mb-8"><FaInfo className="mx-4 mt-1" />After you see you QR code you can download it or just to copy the qrcode and use it on anyplace. </span>
                </div>
                <input onChange={handleContent} className="w-full p-4 rounded" name="content" type="text" required={true} placeholder="Enter URl you want to create QR code for it"/>
                <button onClick={handleSubmit} type="submit" className="bg-gradient-to-r from-sky-700 to-teal-700 font-bold text-2xl rounded px-4 py-4 text-sky-400 hover:bg-sky-300 float-right mt-8 flex dark:text-sky-300">Generate QR <MdOutlineGeneratingTokens className="h-8 w-8 ml-4" /></button>
            </>
            }
            
        </div>
    );
  }