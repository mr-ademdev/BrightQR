'use client'
import Main from './components/Main'
import Nav from './components/Nav'
import ToggleMode from './components/ToggleMode'
const Page = () => {    
  return (
    <div className='w-full justify-center text-center overflow-x-hidden bg-gradient-to-br from-gray-300 to-gray-200 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-cyan-700'>
      <Nav/>
      <ToggleMode/>
      <Main />
    </div>
  )
}
export default Page
