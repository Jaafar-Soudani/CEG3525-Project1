'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Page() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayMsg, setDisplayMsg] = useState("");
  const submitButton = () => {
    if(!fullName || !email || !message){
      setDisplayMsg("Error receiving request, please fill in all the required fields")
      setDisplaySuccess(true);
      setTimeout(()=>{setDisplaySuccess(false)}, 2000)
      return;
    }
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setDisplayMsg("Request sent successfully!")
    setDisplaySuccess(true);
    setTimeout(()=>{setDisplaySuccess(false)}, 2000)
  }

  return (
    <div>
       <div className="flex flex-col mx-4 mt-5 gap-5 w-10/12 mx-auto">
          <div className="mx-auto text-center text-3xl font-bold">
              Contact us
          </div>

          <div className="flex flex-row justify-between mx-auto px-5 gap-20 pt-4">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row text-center items-center  text-4xl">
                  <Image 
                    src="/phonetext.svg"
                    width={100}
                    height={100}
                    alt="Phone"
                    className="mr-5"
                  />
                  +1 (555) 555 - 5555
              </div>
              
              <div className="flex flex-row justify-center text-center items-center text-4xl">
                  <Image 
                    src="/email.svg"
                    width={100}
                    height={100}
                    alt="email"
                    className="mr-5"
                  />
                  contacts@geegees.law
              </div>

              
              <div className="flex flex-row justify-left text-left items-center text-4xl">
                  <Image 
                    src="/location.svg"
                    width={100}
                    height={100}
                    alt="email"
                    className="mr-5"
                  />
                  <div className='flex flex-col'>
                  <span>75 Laurier Ave E,</span>
                  <span>Ottawa</span>
                  <span>ON, K1N 6N5</span>
                  <span>CANADA</span>
                  </div>
              </div>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3172205220912!2d-75.68571318838384!3d45.423106370952695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1739499190347!5m2!1sen!2sca" width="400" height="400" style={{border:0,}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="mr-auto ml-20 mt-20 text-left text-3xl font-bold">
              Talk to an Expert
          </div>
          <div className='flex flex-row'>
            <div className='w-1/2'>
              <div className="bg-lgray p-6 w-3/4 max-w-lg">
                <div className="flex items-center mb-2">
                  <label className="w-1/4 font-semibold">Full Name*</label>
                  <input 
                    type="text" 
                    className="w-3/4 h-12 border border-black px-2" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                  />          
                </div>

                <div className="flex items-center mb-2">
                  <label className="w-1/4 font-semibold">Email*</label>
                  <input 
                    type="email" 
                    className="w-3/4 h-8 border border-black px-2" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="w-1/4 font-semibold">Subject</label>
                  <input 
                    type="text" 
                    className="w-3/4 h-8 border border-black px-2" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                  />
                </div>

                <div className="flex items-start mb-4">
                  <label className="w-1/4 font-semibold pt-1">Message*</label>
                  <textarea 
                    className="w-3/4 h-40 border border-black p-2" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>          
                </div>

                <div className="text-right">
                  <button 
                    className="bg-black text-white px-4 py-2 disabled:bg-lgray border border-black rounded-lg" 
                    onClick={submitButton}
                    disabled={displaySuccess}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className={displaySuccess? "" : "hidden"}>
              <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md">
                {displayMsg}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
