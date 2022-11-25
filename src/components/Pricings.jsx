import React from 'react'
import PriceCard from './PriceCard'

const Pricings = ({pricingapi : {title, text, btn1, btn2, plans}}) => {
  return (
    <>
    <div className='my-16 relative'>
        <div className='travigo-container'>
            <div className='grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2'>
                <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
                <p className='text-2xl text-gray-600 my-10 md:my-5 sm:text-base'>{text}</p>
                <div className='ring-1 ring-slate-100 rounded-full py-1.5 px-2 flex items-center justify-between gap-5 my-5 shadow-md shadow-slate-200'>
                    <button className='button-solid sm:w-auto' type='button'>{btn1}</button>
                    <button className='button-light sm:w-auto shadow-slate-300 bg-slate-100' type='button'>{btn2}</button>
                </div>
            </div>
            <div className='grid items-center grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5 m-auto'>
                {
                    plans?.map((plan, index)=> (
                        <PriceCard key={index} plan={plan} />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricings