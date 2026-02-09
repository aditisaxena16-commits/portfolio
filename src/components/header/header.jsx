import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isActive = location.hash==="#Skills";
    const isEducationActive = location.hash ==="#Education";
    const isProjectActive = location.hash === "#Project";
    const isContactActive = location.hash === "#Contact";
    const isRolesActive = location.hash === "#Roles";
    return ( 
        <header id="Header" className="sticky z-50 top-0">
            <nav className="bg-transparent px-4 lg:px-6 py-2.5">
                <div className="flex-wrap flex justify-between items-center mx-auto max-w-screen-xl">
                                <div className='font-bold text-[#ded7d7]'>ADITI SAXENA</div>

                   
                    <div
                        className="hidden justify-between items-center w-fit lg:flex lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                           
                             <li>
                                <HashLink smooth to = ""
                                    className=
                                        "block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b text-[#ded7d7] border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    
                                >
                                    Home
                                </HashLink>
                            </li>
                             <li>
                                <HashLink smooth to = "/#Skills"
                                    className={
                                        `block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-[#ded7d7]'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    
                                >
                                    Skills
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to = "/#Education"
                                    className={
                                        `block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b ${isEducationActive ? 'text-orange-700' : 'text-[#ded7d7]'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Education
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to = "/#Roles"
                                    className={
                                        `block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b ${isRolesActive ? 'text-orange-700' : 'text-[#ded7d7]'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Responsibilities
                                </HashLink>
                            </li>
                             <li>
                                <HashLink smooth to = "/#Contact"
                                    className={
                                        `block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b ${isContactActive ? "text-orange-700" : "text-[#ded7d7]"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </HashLink>
                            </li>
                             <li>
                                <HashLink smooth to = "/#Project"
                                    className={
                                        `block cursor-pointer py-2 pr-4 pl-3 duration-200 border-b ${isProjectActive ? "text-orange-700" : "text-[#ded7d7]"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Projects
                                </HashLink>
                            </li>
                            
                        </ul>
                    </div>
                    {/*  <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div> */}
                </div>
            </nav>
        </header>
    );
}

