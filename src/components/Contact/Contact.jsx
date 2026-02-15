import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <HeaderComponent title="Contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white p-10">
                <div className="box-border border border-[2px] border-[#2a2e5a] bg-[#181723] rounded-xl">
                    <div className="flex flex-row">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-violet-600">
                        </div>
                        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-violet-700 to-transparent">
                        </div>
                    </div>
                    <div className="p-2 md:p-10">
                    <p className="text-3xl font-bold flex items-center text-[#ded7d7] text-center mb-6 pl-10 pt-5">
                        <FaPhoneAlt className="text-3xl text-center justify-center mr-2" /> Get in Touch</p>
                    <p className="text-center text-[#ded7d7] mb-10"> I’d love to hear from you! Whether you have a project idea, want to collaborate, or just say hello. </p>
                    <div className="space-y-4 md:text-left">
                        <p className="flex items-center text-[#ded7d7]">
                            <FaEnvelope className="mr-2 text-orange-700" />
                            Email: <a href="mailto:aditi@example.com" className="text-orange-700 font-bold ml-2">aditisaxena16@gmail.com</a>
                        </p>
                        <p className="flex items-center text-[#ded7d7]"> <FaLinkedin className="mr-2 text-orange-700" />  LinkedIn: <a href="https://www.linkedin.com/in/aditi-saxena-0793b480/" className="text-orange-700 font-bold ml-2">linkedin.com/in/aditi</a></p>
                        <p className="flex items-center text-[#ded7d7]"> <FaGithub className="mr-2 text-orange-700" /> GitHub: <a href="https://github.com/aditisaxena16-commits" className="text-orange-700 font-bold ml-2">github.com/aditisaxena16-commits</a></p>
                    </div>
                    </div>
                </div>

                <div className="box-border border border-[2px] border-[#2a2e5a] bg-[#181723] rounded-xl">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex flex-row">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-violet-600">
                        </div>
                        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-violet-700 to-transparent">
                        </div>
                    </div>
                    <form name="contact" method="POST" data-netlify="true" action="/thank-you">
                    <input type="hidden" name="form-name" value="contact" />
                        <div className="p-2">
                        <label className="text-[#ded7d7] text-bold">Your Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 ring-0 px-3 py-2" required />
                        </div>
                        <div className="p-2">
                        <label className="text-[#ded7d7] text-bold" >Email</label>

                        <input type="email" name="email" placeholder="Your Email" className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 ring-0 px-3 py-2" required />
                        </div>
                        <div className="p-2">
                        <label className="text-[#ded7d7] text-bold">Message</label>
                     
                        <textarea name="message" placeholder="Your Message" className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 ring-0 px-3 py-2" rows="4" required></textarea>
                        </div>
                        <div className="flex items-center justify-center mb-2">
                        <button type="submit" className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold">Send</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}