import { ReactTyped } from "react-typed"

const TypedEffect = () => (
    <div>
        <ReactTyped 
            className="text-3xl font-mono bg-gradient-to-r from-sky-900 to-teal-600 text-transparent bg-clip-text font-bold mt-1 dark:from-sky-300 dark:to-teal-300" 
            strings={["Generate QR Codes","Store your data in QR code picture","Go next step"]} 
            typeSpeed={100} 
            loop 
        />
    </div>
)

export default TypedEffect