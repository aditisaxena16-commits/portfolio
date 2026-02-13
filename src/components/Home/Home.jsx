import React from 'react'
import { Link } from 'react-router-dom';
import image2 from '../../assets/Hi.gif';
import image1 from '../../assets/image_Aditi.jpeg'

export default function Home() {
    return (
        <div id ="home" className="mx-auto w-full max-w-7xl">
            <aside className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-5">
                 <div className="p-10 left-10 w-fit md:mt-20 sm:pt-1 pt-0 h-full">
                    <img className="w-full h-[400px] object-contain border border-gray-100 rounded-xl" src={image1} alt="image1" />
                </div>
                <div className="z-10 px-4 pb-20 pt-10 sm:py-24 md:mx-auto sm:px-6 lg:px-8">
                    <div className="sm:mt-1 md:mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h6 className="font-bold text-[#ded7d7] mb-0 text-xl md:text-2xl">
                           Hello, <img className="w-10 inline" src={image2} alt="image1" /> I 'm
                        </h6>
                          <h1 className="text-xl md:text-6xl text-[#ded7d7] mb-2">Aditi Saxena</h1>
                          <h4 className=" text-l md:text-2xl text-orange-700 font-bold mb-2">Frontend Developer</h4>
                          <h6 className="text-justify text-sm text-[#ded7d7] mb-2 font-bold">Experienced UI Developer with 9+ years of expertise in building responsive, user‑friendly web applications using modern front‑end technologies. Passionate about crafting intuitive interfaces, optimizing performance, and collaborating with cross‑functional teams to deliver impactful digital solutions.</h6>
                        <a
                            className="inline-flex mt-5 md:mt-0 text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            href="/Aditi_Saxena_Resume.pdf"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download Resume
                        </a>
                    </div>
                </div>

               
            </aside>

           

            
        </div>

        
    );
}
