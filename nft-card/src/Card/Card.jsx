import React from 'react'
import { useState } from 'react';

const Card = () => {

    const [imageClick , setImageClick] = useState(false);
    console.log(imageClick);

    return(
        <div className='relative h-card-height inset-y-card-y 
                        md:w-md-card-width md:inset-x-md-card-x
                        lg:w-lg-card-width lg:inset-x-lg-card-x
                        xl:w-xl-card-width xl:inset-x-xl-card-x
                        2xl:w-2xl-card-width 2xl:inset-x-2xl-card-x
                        3xl:w-3xl-card-width 3xl:inset-x-3xl-card-x
                        4xl:w-4xl-card-width 4xl:inset-x-4xl-card-x
                        5xl:w-5xl-card-width 5xl:inset-x-5xl-card-x
                        6xl:w-6xl-card-width 6xl:inset-x-6xl-card-x
                        7xl:w-7xl-card-width 7xl:inset-x-7xl-card-x
                        8xl:w-8xl-card-width 8xl:inset-x-8xl-card-x
                        bg-neutral-card-bg rounded-layout'>
            <div className='flex flex-col relative inset-info w-info-width h-info-height'>
                <img src='/images/image-equilibrium.jpg' className='h-image-height rounded-image cursor-pointer' onClick={() => {setImageClick(!imageClick)}} />        
                {imageClick && 
                    <div className='absolute w-full h-image-height bg-primary-cyan rounded-image opacity-80 cursor-pointer' onClick={() => {setImageClick(!imageClick)}}>
                        <img src='/images/icon-view.svg' className='absolute h-eye-height w-eye-width inset-eye'/>
                    </div>
                }
                <div className='pl-1 mt-5 flex flex-col justify-between w-full h-subinfo-height select-none'>
                    <h1 className='flex items-center font-main-font font-extrabold text-neutral-white animation ease-in-out hover:text-primary-cyan hover:cursor-pointer text-2xl tracking-wide h-1/6'>Equilibrum #3429</h1>
                    <p className='font-main-font text-primary-soft-blue font-medium-400 opacity-95 text-xl h-1/5'>Our Equilibrum collection promotes balance and calm.</p>
                    <div className='flex justify-between h-1/5'>
                        <div className='flex w-value-section-width font-main-font items-center'>
                            <img src = '/images/icon-ethereum.svg' className='w-subimage-eth-width'/>
                            <h2 className='font-main-font font-bold text-lg text-primary-cyan w-5/6 pl-2'>0.041 ETH</h2>
                        </div>
                        <div className='flex w-1/3 font-main-font items-center'>
                            <img src = '/images/icon-clock.svg' className='w-subimage-clock-width'/>
                            <h2 className='pl-2 font-main-font text-time-size text-primary-soft-blue font-bold-600 opacity-75'>3 days left</h2>
                        </div>
                    </div>
                    <div className='border-t bg-neutral-line opacity-25'/>
                    <div className='flex items-center h-1/4'>
                        <img src='/images/image-avatar.png' className='h-avatar-height border-2 opacity-90 rounded-full'/>
                        <h2 className='pl-4 font-main-font text-primary-soft-blue font-medium-400    text-xl tracking-tight'>Creation of <span className='text-white hover:text-primary-cyan hover:cursor-pointer'>Jules Wyvern</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;