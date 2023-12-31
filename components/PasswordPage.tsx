'use client'

import React from 'react'

const PasswordPage = () => {
  const [passwordLength, setPasswordLength] = React.useState(8);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = React.useState(false);
  const [password, setPassword] = React.useState('');

  // create a password generator
  const generatePassword = () => {
    // create a string of all the characters that can be used in a password
    // create a string of all the special characters that can be used in a password
    // create a string of all the numbers that can be used in a password
    // create a string of all the letters that can be u
    // create a string of all the letters that can be used in a password
    const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // create a string of all the characters that can be used in a password
    let characters = letters + capitalLetters + numbers;
    // if the user wants to include special characters, add them to the characters string
    if (includeSpecialCharacters) {
      characters += specialCharacters;
    }
    // create a string to store the password
    let password = '';
    // loop through the characters string
    for (let i = 0; i < passwordLength; i++) {
      // randomly select a character from the characters string
      const character = characters.charAt(Math.floor(Math.random() * characters.length));
      // add the character to the password string
      password += character;
    }
    setPassword(password);
  }

  return (
    // center the password generator div add an input for the length of the password ask the user if they want to include special characters
    // give the user suggestions for how to make a strong password
    // create a button to generate a password
    <div className="flex justify-center items-center h-[95vh] w-[100%] bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Password Generator</h1>
        <div className="flex flex-col mb-4">
          <label className="mb-2">Password Length</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value as any)}
            className="rounded-lg border px-4 py-2"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={includeSpecialCharacters}
            onChange={(e) => setIncludeSpecialCharacters(e.target.checked)}
            className="mr-2"
          />
          <label>Include Special Characters</label>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Strong Passwords</h2>
          <ul className="list-disc list-inside">
            <li>Use a minimum of 8 characters</li>
            <li>Use a combination of letters, numbers, and special characters</li>
            <li>Do not use personal information</li>
            <li>Do not use dictionary words</li>
            <li>Do not use common substitutions</li>
          </ul>
        </div>
        <button
          onClick={() => generatePassword()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Generate Password
        </button>
        {/* generated password */}
        {
          password && (
            <div className="flex flex-col mt-4">
              <label className="mb-2">Generated Password</label>
              <input
                type="text"
                value={password}
                className="rounded-lg border px-4 py-2"
              />
            </div>
          )
        }

      </div>
    </div>
  )


}

export default PasswordPage