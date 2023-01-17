import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CountUp from 'react-countup';
import { useFirebase } from '../../contax/UserContax';
import BodyTamplate from '../Shared/BodyTamplate';



const HeroSection = () => {
    const { user } = useFirebase();
    return (
        <div>
            <Head><title>Home - Result Rise</title></Head>
            <BodyTamplate>
                <div className="hero min-h-[calc(100vh_-_70px)] text-white ">
                    <div className="md:px-0 flex-col  md:grid md:grid-cols-2 md:w-full  h-full flex  items-center justify-between ">
                        <div className='col-span-1 md:mt-0 mt-14'>
                            <div className="mb-7">
                                <span className='bg-gradient-to-bl from-orange-600 to-orange-500
                            p-2 md:text-sm rounded-3xl text-white'>REAL RESULT, REAL SUCCESS
                                </span>
                            </div>
                            <h1 className="text-7xl font-bold mt-5"> <span className='stroke-text md:text-4xl lg:text-7xl'>Get Your Results</span> <span className=''>Easy Way</span>
                            </h1>
                            <p className="py-6">Student, Subject, Teacher, Semester, Result and Class from this project. The main objective to develop Result Management System.
                            </p>
                            <div className='flex justify-between mt-5  w-96'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='md:text-4xl text-2xl'>+ <CountUp start={0} end={50} delay={0} duration={2} /></h1>
                                    <p>Teachers </p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='md:text-4xl text-2xl'>
                                        +<CountUp start={0} end={200} delay={0} duration={2} />
                                    </h1>
                                    <p>Students </p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='md:text-4xl text-2xl'>+ <CountUp start={0} end={90} delay={0} duration={2} /></h1>
                                    <p>Parents </p>
                                </div>
                            </div>
                            <div className='mt-12'>
                                {user?.uid ? <div>
                                    <button className="btn btn-sm btn-warning bg-gradient-to-bl from-orange-600 to-orange-500 text-white font-bold">Go to Your Dashboard </button>
                                </div> :
                                    <Link href='/user/login' className="btn btn-sm btn-warning bg-gradient-to-bl from-orange-600 to-orange-500 text-white font-bold">Got To Login</Link>
                                }

                            </div>
                        </div>
                        <div className='flex justify-end  lg:w-5/6  '>
                            <img src="/heroImage.svg" alt="hero iamge " className='h-96 w-96 md:h-[520px] md:w-auto' />
                        </div>
                    </div>
                </div>
            </BodyTamplate>
        </div>
    )
}

export default HeroSection