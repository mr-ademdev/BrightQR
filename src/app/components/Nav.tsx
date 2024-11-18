import Link from "next/link"
const Nav = () => {
  return (
    <nav className="h-24 border-b-2 border-sky-900 dark:border-sky-100">
        <ul className="pt-8 float-left sm:pt-4">
            <li className="inline-block mx-4 sm:w-full"><Link className="text-3xl sm:text-3xl sm:mt-0 font-bold text-cyan-900 hover:text-cyan-700 dark:text-sky-600 dark:hover:text-sky-500" href="/">BrightQR</Link></li>
            <li className="inline-block mx-4 sm:mx-0"><Link className="text-2xl sm:text-xl sm:mx-1 text-cyan-950 dark:text-cyan-600 hover:underline" href="/about">About</Link></li>
            <li className="inline-block mx-4 sm:mx-0"><Link className="text-2xl sm:text-xl sm:mx-1 text-cyan-950 dark:text-cyan-600 hover:underline" href="/generate">Generate</Link></li>
            <li className="inline-block mx-4 sm:mx-0"><Link className="text-2xl sm:text-xl sm:mx-1 text-cyan-950 dark:text-cyan-600 hover:underline" href="/get_data">Get Data</Link></li>
            <li className="inline-block mx-4 sm:mx-0"><Link className="text-2xl sm:text-xl sm:mx-1 text-cyan-950 dark:text-cyan-600 hover:underline" href="/docs">Documentation</Link></li>
            <li className="inline-block mx-4 sm:mx-0"><Link className="text-2xl sm:text-xl sm:mx-1 text-cyan-950 dark:text-cyan-600 hover:underline" href="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Nav