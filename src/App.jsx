import { useState } from 'react'
import './index.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-col gap-3 p-3 root-body dialogue h-full'>
            <h1 className="dialogue text-3xl font-bold underline p-3">
                Hello world!
            </h1>
            <h1 className="dialogue text-3xl font-bold underline p-3">
                Hello world!
            </h1>
            <h1 className=" dialogue text-3xl font-bold underline p-3">
                Hello world!
            </h1>
            <button className='dialogue bg-red-500 p-3'>ndssd</button>
            <></>
        </div>
    )
}

export default App;