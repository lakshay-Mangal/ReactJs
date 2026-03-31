import { useState , useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8);
  const [addNumbers, setAddNumbers]= useState(false);
  const [addSpecialChar, setAddSpecialChar]= useState(false);
  const [password, setPassword]= useState("");
  // use ref hook
  //it can work even without passwordRef but we use it for effects and other things
  const passwordRef= useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(addNumbers) str+="0123456789";
    if(addSpecialChar) str+="@#!$%^&*+-"
    for(let i=1 ;i<= length;i++){
      let char = Math.floor(Math.random()* str.length)
      pass += str.charAt(char);
    }
      setPassword(pass);
    
  },[length, addNumbers,addSpecialChar, setPassword])


  const copyPasswordToClipboard =useCallback(()=> {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,9) 
    window.navigator.clipboard.writeText(password)},[password])
  useEffect(()=>{passwordGenerator()},[length,addNumbers,addSpecialChar,passwordGenerator])
  return (
    <>
    
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700 mb-3'>
   <h1 className='text-white text-center my-3'>
    Password generator
   </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-5'>
      <input type='text' value={password} className='outline-none w-full py-2 px-3' placeholder='password' readOnly ref={passwordRef}/>
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex-items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
        />
          <label>Length: {length} </label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={addNumbers}
        id="numberInput"
        onChange={()=>{
          setAddNumbers((prev)=> !prev);
        }} />
        <label htmlFor='numberInput'> Numbers</label>
     </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={addSpecialChar}
        id="characterInput"
        onChange={()=>{
          setAddSpecialChar((prev)=> !prev);
        }} />
        <label htmlFor='characterInput'> Characters</label>
     </div>
    </div>
   </div>
    </>
  )
}

export default App
