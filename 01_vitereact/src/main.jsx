import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp(){
    return (
        <>
            <h1> Custom App</h1>
        </>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit Google</a>
)
// const anElement= (
//     'a', {href : 'https://google.com', target: '_blank'}, 'Click me to viist google'
// )
createRoot(document.getElementById('root')).render(

    <>
    <App/>
    {/* <MyApp/>
    {anotherElement} */}
    
    </>
)
 // i can also write <MyApp/> as MyApp() as it is a function only