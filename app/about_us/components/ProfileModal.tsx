import { Person } from '@/type/person';
import Image from 'next/image'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

export default function ProfileModal({ setPersonModalOpen, selectedPerson }: { setPersonModalOpen: (open: boolean) => void; selectedPerson: Person | null }) {
  return (
    <div
          className="fixed top-0 left-0 w-full h-full bg-white/40 flex items-center justify-center z-50"
          onClick={() => setPersonModalOpen(false)}
        >
          <div
            className="w-3/5 h-4/5 flex bg-white relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-2xl hover:scale-130 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setPersonModalOpen(false)}
            >
              <IoMdClose />
            </button>
            <div className="w-1/3 h-full relative">
              <Image
                src={selectedPerson?.image || "/images/aboutus/cat.jpg"}
                alt={selectedPerson?.name || "project 1"}
                fill
                className={`object-cover`}
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-between p-15">
              <div className="flex flex-col gap-10">
                <h3 className="text-5xl font-thin">{selectedPerson?.name || "Chengis Khan"}</h3>
                <p>
                  {selectedPerson?.name || "Chengis Khan"} is a passionate musician with over 10 years of
                  experience in the industry. He has performed in various venues
                  and is known for his innovative approach to music.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-normal">{selectedPerson?.position || "Founder"}</h4>
                <h4 className="text-xl font-light">{selectedPerson?.company || "BUET"}</h4>
              </div>
            </div>
          </div>
        </div>
  )
}
