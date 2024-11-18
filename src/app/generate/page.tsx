'use client'
import QRForm from '../components/QRForm'
import Nav from '../components/Nav'
import ToggleMode from '../components/ToggleMode'

const Generate = () => {
  return (    
    <div className='w-full justify-center text-center overflow-x-hidden bg-gradient-to-br from-gray-300 to-gray-200 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-cyan-700'>
      <Nav/>
      <ToggleMode/>
      <main className='w-full grid' style={{height: `calc(100vh - 6rem)`}}>
        <QRForm />
      </main>
    </div>
  )
}

export default Generate