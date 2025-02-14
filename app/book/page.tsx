'use client'
import { useState } from "react";

export default function Page() {
    const lawyers: string[] = [
        "Thurman Matthews",
        "Eliza Ford",
        "Grace Montgomery",
        "Lucas Sullivan",
        "Adrian Clarke",
        "Jasper Blackwell",
      ]

    const services: string[] = [
        "Personal Injury",
        "Insurance Claims",
        "Family Law",
    ]
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [desiredLawyer, setDesiredLawyer] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [messageShow, setMessageShow] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(true);

    const handleOnClick = () => {
        if(!fullName || !email){
            setMessageSuccess(false);
            setTimeout(()=>{
                setMessageShow(false);
            }, 3000);
        }else{
             setTimeout(()=>{
            setMessageShow(false);
            setFullName("");
            setEmail("");
            setPhoneNumber("");
            setDesiredLawyer("");
            setService("");
            setDate("");
            setTime("");
             }, 3000);
            setMessageSuccess(true);
        }
        setMessageShow(true);
       
    }
    
    return (
        <div>
            <div className='flex flex-row px-14 mt-5'>
                <div className='w-5/6'>
                    <div className="p-6 w-3/4 max-w-lg flex flex-col gap-2">
                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Full Name*</label>
                            <input
                                type="text"
                                className="w-3/4 h-12 border border-black px-2"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Email*</label>
                            <input
                                type="email"
                                className="w-3/4 h-12 border border-black px-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Phone Number</label>
                            <input
                                type="tel"
                                className="w-3/4 h-12 border border-black px-2"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Desired Lawyer</label>
                            <select 
                                className="w-3/4 h-12 border border-black px-2"
                                value={desiredLawyer}
                                onChange={(e) => setDesiredLawyer(e.target.value)}
                            >
                                <option value="">Select a Lawyer</option>
                                {lawyers.map((lawyer: string)=>{
                                    return <option key={lawyer} value={lawyer}>{lawyer}</option>
                                })}
                            </select>
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Service</label>
                            <select 
                                className="w-3/4 h-12 border border-black px-2"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            >
                                <option value="">Select a Service</option>
                                {services.map((service: string)=>{
                                    return <option key={service} value={service}>{service}</option>
                                })}
                            </select>
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Date</label>
                            <input
                                type="date"
                                className="w-3/4 h-12 border border-black px-2"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center mb-2">
                            <label className="w-1/4 font-semibold">Time</label>
                            <input
                                type="time"
                                className="w-3/4 h-12 border border-black px-2"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <span className="text-xs ml-10"> fields marked by * are required </span>
                        <div className="text-center w-2/3 mt-3 mx-auto">
                            <button
                                className="w-full text-3xl bg-gold text-white px-6 py-3 border border-black rounded-lg disabled:bg-gray"
                                onClick={handleOnClick}
                                disabled={messageShow}
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/** Confirmation menu */}
            {messageShow && 
            <div className="my-auto mx-auto" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                {messageSuccess ? 
                    <div className="flex flex-col gap-10 items-center text-center px-4 py-4 rounded rounded-lg bg-dblue">
                        <span className="text-3xl text-gold">Confirmation Successful</span>
                        <span className="text-3xl text-white">A confirmation email has been sent to {email}</span>
                        {
                        date && time &&
                        <span className="text-3xl text-white">Your appointment is now scheduled for {date} at {time}</span>
                        }
                    </div> 
                    : 
                    <div className="flex flex-col gap-10 items-center text-center px-4 py-4 rounded rounded-lg bg-dblue">
                        <span className="text-3xl text-red-400">Error confirming your booking</span>
                        <span className="text3xl text-white">Please ensure all the required fields are set</span>
                    </div>
                }
            </div>
            }

        </div>
    )
}
