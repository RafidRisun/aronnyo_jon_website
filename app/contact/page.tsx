"use client";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  return (
    <div
      className="flex flex-col items-center w-full py-32 gap-10 text-[#104649] bg-white p-5"
      onClick={clickedAnywhere}
    >
      <h3 className="text-4xl font-light">Get in touch with us</h3>
      <div className="flex flex-col w-3/5 gap-5 items-start">
        <div className="flex-1 text-justify"><p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea . Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p></div>
        <div className="flex-1 flex flex-col w-full items-start gap-2">
          <span className="font-light">Email : info@aronnyojon.com</span>
          <span className="font-light">Phone : +8801712345678</span>
          <span className="font-light">Address : Dhaka, Bangladesh</span>
        </div>
      </div>
      <h3 className="text-2xl font-light">Or Send Us a Message</h3>
      <div className="flex w-full items-center justify-center gap-5">
        <form
          // action="https://formspree.io/f/mnqvydqv"
          // method="POST"
          className="flex flex-col w-3/5 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border-b border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border-b border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border-b border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-[#104649] text-white p-2 hover:bg-[#0d3b34] transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex w-full items-center justify-center gap-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912.3183198340303!2d90.2631423!3d23.8444278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eb0071d45c65%3A0x899a58f445439e43!2sAronnyojon_Construction%20Studio!5e0!3m2!1sen!2sbd!4v1784440970423!5m2!1sen!2sbd"
          width="1000"
          height="500"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
