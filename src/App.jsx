import './App.scss'
import { Home } from './home/Home'
import { Button } from "@/components/ui/button"

function App() {
    return (
        <div className='px-6'>
            <Home />
            <Button>Click me</Button>
            <div className="card">
            </div>
        </div>
    )
}

export default App
