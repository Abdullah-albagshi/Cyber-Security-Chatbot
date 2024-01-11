'use client'

import { useLanguage } from '@/lib/hooks/useLanguage';
import React from 'react'

const PasswordPage = () => {
  const [passwordLength, setPasswordLength] = React.useState(8);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const {translations:passwordGeneratorTranslations,language} = useLanguage()
  const translations = passwordGeneratorTranslations[language];


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
        <h1 className="text-4xl font-bold mb-8">{translations['title']}</h1>
        <div className="flex flex-col mb-4">
          <label className="mb-2">{translations['passwordLengthLabel']}</label>
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
          <label>{translations['includeSpecialCharactersLabel']}</label>
        </div>
        <div className="mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <h2 className="text-xl font-bold mb-2">{translations['strongPasswordsTitle']}</h2>
          <ul className="list-disc list-inside">
            {translations['strongPasswordsList'].map((item: string, index: any) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => generatePassword()}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          {translations['generatePasswordButton']}
        </button>
        {/* generated password */}
        {password && (
          <div className="flex flex-col mt-4">
            <label className="mb-2">{translations['generatedPasswordLabel']}</label>
            <input
              type="text"
              value={password}
              className="rounded-lg border px-4 py-2"
            />
          </div>
        )}
      </div>
    </div>
  )


}

export default PasswordPage