import React, { useState, useEffect, useCallback, useRef } from 'react';
import { wordsArray } from './Words';

function PassphraseGenerator() {
  const [length, setLength] = useState(3);
  const [passphrase, setPassphrase] = useState('');
  //useref hook
  const passwordRef = useRef(null)

//   const [numberAdd, setNumberAdd] = useState(false);
//   const [charAdd, setCharAdd] = useState(false);

  const generatePassphrase = useCallback(() => {
    let phrase = '';
    // if(numberAdd) phrase+= '0123456789'
    // if(charAdd) phrase+= '!@#$%^&*-_+=[]{}~`'
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * wordsArray.length);
      phrase += wordsArray[randomIndex] + ' ';
    }
    setPassphrase(phrase.trim());
  }, [length, setPassphrase]);
//   }, [length, numberAdd,charAdd, setPassphrase]);

  useEffect(() => {
    generatePassphrase();
  }, [generatePassphrase, setPassphrase]);
//   }, [generatePassphrase, numberAdd,charAdd, setPassphrase]);

const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(passphrase)
  }, [passphrase])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4 h-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Passphrase Generator</h1>
        <div><p className="text-xl text-gray-700 mb-6 text-center">{passphrase}</p></div>
    <div className="flex justify-center items-center gap-2 mb-6">
        <div className='flex justify-center items-center'>
        <label className="text-gray-700 font-semibold mr-1">
          Length:
          </label>
          <input
            type="range"
            min="3"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div> 
        {/* <div className="text-gray-700 font-semibold mr-1" >
            <input
            className="mr-1"
            type="checkbox" 
            defaultChecked={charAdd}
            onChange={()=>{
                setCharAdd((prev) => !prev)
            }}
            />
            <label htmlFor="">Add Character</label>
        </div>
        <div className="text-gray-700 font-semibold mr-1">
            <input type="checkbox" 
            className="mr-1"
            defaultChecked={numberAdd}
            onChange={()=>{
                setNumberAdd((prev) => !prev)
            }}
            />
            <label htmlFor="">Add Number</label>
        </div> */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
    type="text" 
    value={passphrase}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />

    <button
    className='outline-none bg-purple-700 text-white px-3 py-0.5 shrink-0 hover:bg-purple-900'
    onClick={copyPasswordToClipboard}
    >Copy</button>
    </div>

    </div>
        <button
          onClick={generatePassphrase}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Passphrase
        </button>
      </div>
    </div>
  );
}

export default PassphraseGenerator;
