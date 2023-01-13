import Head from 'next/head'
import React from 'react'
import heroImg from '../../public/heroImage.svg'



const HeroSection = () => {
    return (
        <div>
            <Head><title>Home - Result Rise</title></Head>
            <div className="hero min-h-screen text-white h-full  container px-3 md:px-12 mx-auto">
                <div className="hero-content md:px-0 flex-col  md:grid md:grid-cols-2 md:w-full">

                    <div className='col-span-1 md:mt-0 mt-14'>
                        <span className='bg-amber-400 p-3 md:text-xl rounded-3xl text-white '>REAL RESULT, REAL SUCCESS
                        </span>
                        <h1 className="text-7xl font-bold mt-5"> <span className='stroke-text'>Get Your Results</span> with Us
                        </h1>
                        <p className="py-6">Transforming Ideas into Results. Efficiency meets precision with our generator. Elevate student success with our results generator.
                        </p>
                        <div className='flex justify-between mt-5'>
                            <div>
                                <h1 className='md:text-4xl text-2xl'>+ 5</h1>
                                <p>Institute Join</p>
                            </div>
                            <div>
                                <h1 className='md:text-4xl text-2xl'>+ 200</h1>
                                <p>Students</p>
                            </div>
                            <div>
                                <h1 className='md:text-4xl text-2xl'>+ 20</h1>
                                <p>Users Reviews</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <button className="btn btn-warning no-animation bg-amber-400 text-white font-bold">Get started</button>

                            </div>
                            <div>
                                <button className="btn btn-outline btn-warning no-animation text-white font-bold">Learn more</button>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center md:mt-0 -mt-24'>


                        <img src="/heroImage.svg" alt="hero iamge " className='md:h-auth w-96 md:mt-0 mt-28' />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection