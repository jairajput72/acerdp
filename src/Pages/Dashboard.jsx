import React from 'react';
import mask from '../assets/png/mask.png';
import cardLogo from '../assets/png/card logo.png';
import { FaCog, FaUser, FaWallet } from 'react-icons/fa';
import { activities, transactions } from '../common/Helper';
import { FiLogOut } from 'react-icons/fi';

function Dashboard() {

    return (
        <div className='py-[40px]  px-5 w-full container custom_container mx-auto '>
            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='text-white text-2xl font-medium'>Dashboard</h1>
                </div>
                {/* Logout Section */}
                <div className="xl:hidden group  py-2 text-[#FF0000]">
                    <div className=" px-8 whitespace-nowrap">
                        <div className="flex items-center gap-3 cursor-pointer text-[#FF0000]">
                            <FiLogOut className="text-2xl" />
                            <span className="font-medium text-sm text-[#909090]">Logout</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-[33px] flex-col 2xl:flex-row gap-7 '>
                {/* Left Card */}
                <div className='w-full 2xl:w-9/12  border border-gray-700  text-white bg-[#00000061]  rounded-[20px] relative'>

                    <div className='flex flex-col justify-between px-[33px] pt-[34px] pb-[50px] w-full h- full'>

                        {/* Welcome Section */}
                        <div className='flex justify-between items-start'>
                            <div className=''>
                                <p className="text-2xl font-normal text-[#8B8B8B]">Welcome back,</p>
                                <h2 className="lg:text-2xl text-xl xl:text-4xl font-bold mb-4 mt-3">Good Morning, Focused Studio 👋</h2>

                                <div className="mt-6 !grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    {/* Card 1 - Servers */}
                                    <div className=" border border-gray-700 w-[350px] lg:h-[205px] rounded-xl overflow-hidden shadow-lg bg-[#00000061] backdrop-blur-[120px] z-50 ">

                                        <div className=" z-10 p-4 text-white h-full flex flex-col justify-between  ">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-red-600 p-4 rounded-full">
                                                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27 15.625V4.25C27 2.45507 25.5449 1 23.75 1H4.25C2.45507 1 1 2.45507 1 4.25V15.625M27 15.625V23.75C27 25.5449 25.5449 27 23.75 27H4.25C2.45507 27 1 25.5449 1 23.75V15.625M27 15.625H22.7981C22.3671 15.625 21.9538 15.7962 21.649 16.101L17.726 20.024C17.4212 20.3288 17.0079 20.5 16.5769 20.5H11.4231C10.9921 20.5 10.5788 20.3288 10.274 20.024L6.35095 16.101C6.04621 15.7962 5.63288 15.625 5.2019 15.625H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <h3 className="xl:text-3xl text-xl font-medium">Servers</h3>
                                                    <p className="xl:text-base text-sm font-normal text-gray-400">All Servers</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className='flex items-end mt-4 xl:mt-0'>
                                                    <h2 className="xl:text-8xl text-6xl font-medium">21</h2>
                                                    <p className="text-red-500 text-xl font-normal px-2">Servers</p>
                                                </div>
                                                <p className="text-xl font-normal text-white/80  cursor-pointer">Show All</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 - Transactions */}
                                    <div className=" border border-gray-700  lg:h-[205px] rounded-xl overflow-hidden shadow-lg  backdrop-blur-[120px] bg-[#00000061] z-50">

                                        <div className=" z-10 p-4 text-white h-full flex flex-col justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-red-600 p-4 rounded-full">
                                                    <svg width="24" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28.4575 0C30.8733 0 32.8487 1.9565 32.9917 4.4255L33 4.71257V19.2874C33 21.7937 31.1141 23.843 28.7342 23.9914L28.4575 24H4.54253C2.12668 24 0.151301 22.0435 0.00829045 19.5745L0 19.2874V4.71257C0 2.20629 1.8859 0.156964 4.26582 0.00860038L4.54253 0H28.4575ZM30.5209 10.2374H2.47609L2.47775 19.2874C2.47775 20.3965 3.29024 21.3087 4.33142 21.4184L4.54253 21.4295H28.4575C29.5265 21.4295 30.4059 20.5866 30.5116 19.5064L30.5223 19.2874L30.5209 10.2374ZM26.8288 16.2443C27.513 16.2443 28.0677 16.8197 28.0677 17.5296C28.0677 18.1802 27.6016 18.718 26.9969 18.8031L26.8288 18.8148H22.6992C22.015 18.8148 21.4603 18.2394 21.4603 17.5296C21.4603 16.8789 21.9264 16.3412 22.5311 16.256L22.6992 16.2443H26.8288ZM28.4575 2.5705H4.54253C3.47346 2.5705 2.59414 3.4134 2.48841 4.49356L2.47775 4.71257L2.47609 7.66693H30.5209L30.5223 4.71257C30.5223 3.60348 29.7098 2.69125 28.6686 2.58155L28.4575 2.5705Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <h3 className="xl:text-3xl text-xl font-medium">Transactions</h3>
                                                    <p className="xl:text-base text-sm font-normal text-gray-400">All Transactions</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className='flex items-end mt-4 xl:mt-0'>
                                                    <h2 className="xl:text-8xl text-6xl font-medium">23</h2>
                                                    <p className="text-red-500 text-xl font-normal px-2">Orders</p>
                                                </div>
                                                <p className="text-xl font-normal text-white/80  cursor-pointer">Show All</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="z-50">
                                <button className="group bg-[linear-gradient(274.42deg,#FF00004D,#FF00008A)] text-white xl:px-4 px-2 py-2 rounded border-2 border-[#FF0000] hover:bg-red-700 whitespace-nowrap transition-all duration-300 ease-in-out">
                                    New Server
                                    <span className="inline-block transform  transition-all duration-300 ease-in-out  group-hover:rotate-[45deg] group-hover:translate-x-2">
                                        ↗
                                    </span>
                                </button>
                            </div>


                        </div>
                        <div className='absolute bottom-0 right-0 z hidden md:block'>
                            <img src={mask} alt="#" />
                        </div>
                    </div>
                </div>


                {/* Right Card */}
                <div className="relative w-full 2xl:w-1/4 p-4 bg-[#00000061] rounded-xl text-white  ">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 bg-[#00000061] z-50 p-2 rounded-[20px] ">
                        <div className="flex items-center gap-2">
                            <div className="text-red-600 p-2 rounded-full">
                                <FaUser size={20} />
                            </div>
                            <div className=''>
                                <span className="text-lg  font-medium">Focused Studio</span>
                            </div>
                        </div>
                        <FaCog size={30} className="text-red-600" />
                    </div>

                    <hr className="border-[#505050] mb-4" />

                    {/* Balance Section */}
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-red-600 p-2 rounded-full">
                            <FaWallet size={34} />
                        </div>
                        <div>
                            <h3 className="xl:text-[32px] text-2xl font-medium">Balance</h3>
                            <p className="xl:text-base text-sm font-normal text-[#9B9B9B] -mt-1">Your total balance</p>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="xl:text-8xl text-6xl mt-6 xl:mt-0 font-medium mb-4 leading-none">
                        105€
                        <span className="text-red-500 text-sm ml-1">Eur</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between xl:mt-[66px]">
                        <button className="xl:text-xl text-lg font-normal text-[#C7C7C7]">Redeem Code</button>
                        <button className="bg-[linear-gradient(274.42deg,#FF00004D,#FF000014)]  hover:bg-red-700  text-white px-5 xl:py-3 py-2 rounded font-medium xl:text-xl text-lg border-[#FF0000] border inline-block transform  transition-all duration-300 ">
                            Top Up
                        </button>
                    </div>

                    <div className=' absolute right-0 top-0'>
                        <img src={cardLogo} alt="#" />
                    </div>
                </div>

            </div>

            {/* Latest Activities & Transactions Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white mt-10 pb-16 xl:pb-0">
                {/* Latest Activities */}
                <div className="bg-[linear-gradient(274.42deg,#250909,#100707)] rounded-xl p-6 shadow-md flex flex-col justify-between">

                    <h2 className="text-lg font-semibold mb-4">Latest Activities</h2>
                    <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                        <span></span>
                        <span>Status</span>
                    </div>
                    <div className=''>
                        {activities.map((item, index) => (
                            <div key={index} className="mb-3">
                                <p className="text-sm font-normal mt-[21px]">{item.text}</p>
                                <div className="flex justify-between font-normal text-xs text-[#A0AEC0] mt-1">
                                    <span>{item.date}</span>
                                    <span className={`${item.color} font-normal text-sm`}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Latest Transactions */}
                <div className="bg-[linear-gradient(274.42deg,#250909,#100707)] rounded-xl p-6 shadow-md flex flex-col justify-between">
                    <h2 className="text-lg font-semibold mb-4">Latest Transactions</h2>
                    <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                        <span></span>
                        <span>Status</span>
                    </div>
                    {transactions.map((tx) => (
                        <div key={tx.id} className="flex justify-between items-center py-2 x`">
                            <div className="flex items-center gap-3">
                                <div className='h-[35px] w-[35px] border border-[#E31A1A] rounded-full flex justify-center items-center'>
                                    <div className="text-lg">{tx.icon}</div>
                                </div>
                                <div>
                                    <p className="font-normal text-sm ">{tx.name}</p>
                                    <p className="text-[#A0AEC0] text-sm font-normal mt-1">{tx.date}</p>
                                </div>
                            </div>
                            <div className={`font-normal text-sm ${tx.statusColor}`}>{tx.status}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
