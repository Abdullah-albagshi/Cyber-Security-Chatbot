'use client'
import { useLanguage } from '@/lib/hooks/useLanguage';
// components/About.js
import React from 'react'
interface UserCardProps {
  name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  return (
    <div className=" text-black dark:text-white p-4 rounded-lg   mb-4 flex flex-col items-center">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-4">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {name.charAt(0)}
        </span>
      </div>
      <p className="text-lg font-semibold">{name}</p>
      {/* Add any additional user information here */}
    </div>
  );
};

const About: React.FC = () => {

  const {translations,language} = useLanguage()

  return (
    <div className="container mx-auto mt-8 p-8 text-black dark:text-white rounded-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">
          {translations[language][`Creators`]}
        </h1>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <UserCard name="Amna Albagshi" />
        <UserCard name="Layla Albagshi" />
        <UserCard name="Zainab Albagshi" />
        <UserCard name="Heba Alaithan" />
      </div>
      
      <p className="mx-4 text-xl text-center mt-8 font-bold">
        {translations[language][`welcomeText5`]}
        {/* This website is created as a graduation project for four computer engineering students specializing in cybersecurity. */}
      </p>

      <p className='mt-4 text-md text-center'>
        {translations[language][`welcomeText6`]}
        {/*
        This achievement reflects dedication and skill in integrating
        engineering knowledge with a profound understanding of the cybersecurity
        domain. The website showcases a level of commitment and innovation in
        addressing digital security challenges.
        */}
      </p>
    </div>
  );
};




export default About
