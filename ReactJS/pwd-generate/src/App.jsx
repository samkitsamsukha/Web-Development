// Import necessary hooks from React
import { useState, useCallback, useEffect, useRef } from 'react';

// Define the main component
function App() {
  // useState hooks for managing state
  const [length, setLength] = useState(8); // initial password length is 8
  const [numAllow, setNumAllow] = useState(false); // initially numbers are not allowed in password
  const [charAllow, setCharAllow] = useState(false); // initially special characters are not allowed in password

  // useRef hook for managing reference to the password input field
  const pwdRef = useRef(null);

  // useState hook for managing password state
  const [pwd, setPwd] = useState("");

  // useCallback hook for generating password
  const pwdGenerator = useCallback(() => {
    let pass = ""; // initialize password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // initialize string of allowed characters
    if(numAllow) str = str + "0123456789"; // if numbers are allowed, add them to the string
    if(charAllow) str = str + "!@#$%^&*()_+-="; // if special characters are allowed, add them to the string

    // generate password of specified length
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1); // get a random character from the string
      pass = pass + str.charAt(char); // add the character to the password string
    }

    setPwd(pass); // update the password state
  }, [length, numAllow, charAllow, setPwd]); // dependencies array

  // useEffect hook for generating password when state changes
  useEffect(() => {pwdGenerator()}, [length, numAllow, charAllow, setPwd]); // dependencies array

  // useCallback hook for copying password to clipboard
  const copyToClipboard = useCallback(() => {
    pwdRef.current?.select(); // select the password in the input field
    window.navigator.clipboard.writeText(pwd) // copy the password to clipboard
  }, [pwd]); // dependencies array

  // Return the JSX for rendering the component
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-700'>
        <h1 className='text-4xl text-center text-white mb-7'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value = {pwd} // bind the password state to the input field
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly={true} // make the input field read-only
            ref = {pwdRef} // bind the ref to the input field
          />
          {/* button for copying password to clipboard */}
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button> 
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-white'>
            <input
              type="range"
              min={6}
              max={100}
              value={length} // bind the length state to the range input
              className='cursor-pointer'
              onChange={(x) => {
                setLength(x.target.value) // update the length state when the range input changes
              }}
            />
             {/* display the current length */}
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
              <input
                type="checkbox"
                defaultChecked={numAllow} // set the default checked state based on the numAllow state
                id="numberInput"
                onChange={()=>{
                  setNumAllow((x)=> !x) // toggle the numAllow state when the checkbox changes
                }}
              />
              {/*label for the checkbox */}
              <label>Numbers</label> 
          </div>
          <div className='flex items-center gap-x-1 text-white'>
              <input
                type="checkbox"
                defaultChecked={charAllow} // set the default checked state based on the charAllow state
                id="charInput"
                onChange={()=>{
                  setCharAllow((x)=> !x) // toggle the charAllow state when the checkbox changes
                }}
              />
              {/*label for the checkbox */}
              <label>Characters</label> 
          </div>
        </div>
      </div>
    </>
  )
}

// Export the App component for use in other modules
export default App