import { useState } from 'react'
import './App.scss'
import { Home } from './home/Home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='px-6'>
            <Home />

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App
