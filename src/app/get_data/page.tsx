'use client'

import Nav from "@/app/components/Nav"
import ToggleMode from "@/app/components/ToggleMode"
import { useRouter } from 'next/navigation';
import React, { useState } from "react"
import jsQR from "jsqr"
import { getQrCodeByData } from "@/utils/getQrCodeByData"
import { IoClose } from "react-icons/io5";

export default function GetDataHomePage() {
    const router = useRouter();
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [uploadedQrCodeData, setUploadedQrCodeData] = useState('')

    const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = async (e: ProgressEvent<FileReader>) => {
                    if (e.target?.result) {
                      const imageDataUrl = e.target.result.toString();
                      const img = new Image();
                      img.onload = () => {
                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");
                        if (!ctx) return; // Exit if context is not available
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, img.width, img.height);
                        //console.log(imageData)
                        const qrCode = jsQR(imageData.data, img.width, img.height);
                        if (qrCode) {
                          //console.log("QR Code data:", qrCode.data);
                          setUploadedQrCodeData(qrCode.data); // Update state with QR code data
                        }
                      };
                      img.src = imageDataUrl;
                    }
                  };
                reader.readAsDataURL(file)
            }
        }
    }
    const handleUpload = async() => {
        setIsLoading(true)

        const response = await getQrCodeByData(uploadedQrCodeData)
        console.log(response)
        if(response.message){
            setIsLoading(false)
            setError(response.message)
        }else{
            setIsLoading(false)
            router.push(`/get_data/${response}`)
        }
    }

  return (
    <div className='w-full justify-center text-center overflow-x-hidden bg-gradient-to-br from-gray-300 to-gray-200 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-cyan-700'>
    <Nav/>
    <ToggleMode/>
    <main className='w-full grid sm:w-[90%] sm:mx-[5%]' style={{height: `calc(100vh - 6rem)`}}>
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
            
            <div className='w-full h-full flex flex-col items-center justify-center sm:block'>
                <h1 className='text-3xl font-bold text-gray-800 dark:text-white my-8 sm:float-left ml-8'>Upload QR Code</h1>
                <input type="file" accept="image/*" onChange={handleUploadFile} className="cursor-pointer py-2 px-4 sm:px-0 rounded bg-sky-800 text-sky-200 hover:bg-sky-900 dark:text-sky-950 dark:bg-sky-300 dark:hover:bg-sky-200"/>
                <button type="button" className="py-2 px-4 mt-16 rounded bg-sky-800 text-sky-200 text-2xl hover:bg-sky-900 dark:text-sky-950 dark:bg-sky-300 dark:hover:bg-sky-200" onClick={handleUpload}>Get QR Code Data</button>
            </div>
        }
      
    </main>
  </div>
  )
}