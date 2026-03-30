import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-red-500 text-white p-4 rounded-xl">Test</div>
      <Card 
          title= "User Profile"
          subtitle= "Developer"
          footer= "Good Evening Gov'nor">
            <p> Name: Lakshay</p>
            <p> Skills: React , c++, Tailwind </p>
          </Card>
    </>
  )
}

export default App
