import React, { useState, useEffect, useCallback } from 'react';
import { wordsArray } from './Words';

function PassphraseGenerator() {
  const [length, setLength] = useState(3);
  const [passphrase, setPassphrase] = useState('');

  const generatePassphrase = useCallback(() => {
    let phrase = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * wordsArray.length);
      phrase += wordsArray[randomIndex] + ' ';
    }
    setPassphrase(phrase.trim());
  }, [length]);

  useEffect(() => {
    generatePassphrase();
  }, [generatePassphrase]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 h-1/3">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Passphrase Generator</h1>
        <div><p className="text-xl text-gray-700 mb-6 text-center">{passphrase}</p></div>
        <div className="flex items-center justify-center mb-6">
          <label className="text-gray-700 font-semibold mr-4">
            Number of words:
          </label>
          <input
            type="range"
            min="3"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
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
