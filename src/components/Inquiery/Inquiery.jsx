import React from 'react'

const Inquiery = () => {
    return (
        <div className='inquiery flex justify-center items-center bg-blue-500 py-36'>
            <div className="inputs w-[80%] my-0 mx-auto gap-3 grid justify-center items-center grid-cols-1 text-white font-medium md:grid-cols-2">
                <div className="input flex flex-col gap-3">
                    <p>Search Destination</p>
                    <input type="text" placeholder='Enter Destination' className='h-12 bg-white pl-4 text-black rounded-full w-full' />
                </div>
                <div className="input flex flex-col gap-3">
                    <p>Fax Number</p>
                    <input type="text" placeholder='No. of People' className='h-12 bg-white pl-4 text-black rounded-full w-full' />
                </div>
                <div className="input flex flex-col gap-3">
                    <p>Checkin Date</p>
                    <input type="date" className='placeholder:font-normal h-12 bg-white pl-4 text-black rounded-full w-full' />
                </div>
                <div className="input flex flex-col gap-3">
                    <p>Checkout Date</p>
                    <input type="date" className='placeholder:font-normal h-12 bg-white pl-4 text-black rounded-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Inquiery
