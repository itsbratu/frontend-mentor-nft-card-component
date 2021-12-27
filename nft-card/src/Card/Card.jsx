import React from 'react'

const Card = () => {
    return(
        <div className='relative inset-x-card-x inset-y-card-y w-card-width h-card-height bg-neutral-card-bg rounded-3xl'>
            <div className='flex flex-col relative inset-info w-info-width h-info-height'>
                <img src='/images/image-equilibrium.jpg' className='h-image-height rounded-2xl'></img>
                <div className='mt-5 flex flex-col justify-evenly w-full h-subinfo-height'>
                    <h1 className='font-main-font font-bold-600 text-neutral-white text-2xl tracking-wide'>Equilibrum #3429</h1>
                    <p className='font-main-font text-primary-soft-blue font-light text-xl'>Our Equilibrum collection promotes balance and calm.</p>
                    <div className='flex justify-between'>
                        <div className='flex w-value-section-width font-main-font items-center'>
                            <img src = '/images/icon-ethereum.svg' className='w-subimage-eth-width'/>
                            <h2 className='font-main-font text-lg text-primary-cyan w-5/6 pl-2'>0.041 ETH</h2>
                        </div>
                        <div className='flex w-1/3 font-main-font items-center'>
                            <img src = '/images/icon-clock.svg' className='w-subimage-clock-width'/>
                            <h2 className='pl-2 font-main-font text-time-size text-primary-soft-blue font-semibold'>3 days left</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;