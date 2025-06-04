"use client"
import React, { useState } from 'react';

interface TopBarProps {
    isMonthly: boolean;
    togglePlan: () => void;
  }
  

const TopBar = ({ isMonthly, togglePlan }: TopBarProps) => {
      
    return (
        <div className='flex flex-col items-center my-[3rem]'>
            <h3 className='text-[#3490DC]'>THE PLAN</h3>
            <h1 className='font-bold text-4xl'>Pricing Plans</h1>
            <p className='text-[#00000099] mb-4 text-center'>We believe that all should be accessible to all customers, no matter the size.</p>
            <div className="inline-flex text-sky-500 border-2 border-sky-500 rounded-full p-1">
                <button
                    onClick={togglePlan}
                    className={`px-4 py-1 font-medium rounded-full text-sm ${isMonthly ? 'bg-[#3490DC] text-white' : ''}`}
                >
                    Monthly
                </button>
                <button
                    onClick={togglePlan}
                    className={`px-4 py-1  font-medium rounded-full text-sm ${!isMonthly ? 'bg-sky-500 text-white' : ''}`}
                >
                    Annual
                </button>
            </div>
        </div>
    );
}

export default TopBar;
