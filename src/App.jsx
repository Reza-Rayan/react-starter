import {ArrowPathIcon} from '@heroicons/react/20/solid'

const App = () => {
  return (
    <div className="h-screen bg-[#212121] flex flex-col justify-center items-center
    text-white">
      <h1 className="text-3xl font-semibold flex gap-5">
        <ArrowPathIcon className="h-10 w-10  text-indigo-600" />
        Start your project with edit App.js
      </h1>
      <h2 className='mt-5 text-2xl font-semibold mb-2'>Packages:</h2>
      <ul className='text-center text-lg font-semibold  w-[60%]'>
        <li className='p-2 rounded-xl hover:bg-indigo-500  transition-all'>React + Vite</li>
        <li className='p-2 rounded-xl hover:bg-indigo-500  transition-all'>Tailwindcss</li>
        <li className='p-2 rounded-xl hover:bg-indigo-500  transition-all'>React Router </li>
        <li className='p-2 rounded-xl hover:bg-indigo-500  transition-all'>Hero Icons</li>
      </ul>
    </div>
  )
}

export default App