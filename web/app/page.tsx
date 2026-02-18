"use client"

import ConnectingArrow from "@/components/ConnectingArrow"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import destinations from "@/constants/destinations"
import { spaceGrotesk } from "@/constants/fonts"
import origins from "@/constants/origins"
import Image from "next/image"
import { useState } from "react"

const page = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<number>(0);
  const [selectedDestination, setSelectedDestination] = useState<number>(0);
  const [combinations, setCombinations] = useState<{ origin: number, destination: number }[]>([])
  return (
    <div>

      <Header />

      <Container className=" py-10 bg-[#F9F9FB]">
        <div className="flex  overflow-x-auto ">
          <div className="flex-1">
            <h3 className={`text-lg text-[#001414] font-medium ${spaceGrotesk.className}`}>
              Origins
            </h3>
            <div>
              {
                origins.map(({ title, description, image }, index) => (
                  <div key={title} className={`flex h-[110px] items-center p-5 gap-5 shadow-md rounded-xl mt-5  cursor-pointer hover:bg-[#F3F4F7] transition-colors duration-200 min-w-[350px] ${selectedOrigin === (index + 1) ? 'bg-[#E8E8FF] border border-[#3434F4]' : 'border border-[#E7E9EF]'}`} onClick={() => setSelectedOrigin(index + 1)} >
                    <Image src={image} alt={title} width={52} height={52} />
                    <div>
                      <p className="text-[#001414] text-sm  font-bold">
                        {title}
                      </p>
                      <p className="text-[#515867] text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="min-h-full pt-12 pb-2 min-w-15">
            {
              (selectedOrigin && selectedDestination) ? <ConnectingArrow origin={selectedOrigin} destination={selectedDestination} /> : null
            }
          </div>
          <div className="flex-1">
            <h3 className={`text-lg text-[#001414] font-medium ${spaceGrotesk.className}`}>
              Destinations
            </h3>
            <div>
              {
                destinations.map(({ title, description, image }, index) => (
                  <div key={title} className={`flex h-[110px] items-center p-5 gap-5 shadow-md rounded-xl mt-5  cursor-pointer hover:bg-[#F3F4F7] transition-colors duration-200 min-w-[350px] ${selectedDestination === (index + 1) ? 'bg-[#E8E8FF] border border-[#3434F4]' : 'border border-[#E7E9EF]'}`} onClick={() => setSelectedDestination(index + 1)}>
                    <Image src={image} alt={title} width={52} height={52} />
                    <div>
                      <p className="text-[#001414] text-sm  font-bold">
                        {title}
                      </p>
                      <p className="text-[#515867] text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <button className="px-8 py-3 bg-[#5050EC] rounded-lg text-lg font-bold text-white mt-10  mx-auto block" onClick={() => {
          if (selectedOrigin && selectedDestination) {
            setCombinations([...combinations, { origin: selectedOrigin, destination: selectedDestination }])
            setSelectedOrigin(0);
            setSelectedDestination(0);
          }
        }}>
          Save combination
        </button>

        {combinations.length > 0 ? (
          <>
            {
              combinations.map((combination, index) => {
                const origin = origins[combination.origin - 1]
                const destination = destinations[combination.destination - 1]

                return (
                  <div className={`flex h-[110px] items-center p-5 gap-5 shadow-md rounded-xl mt-5  cursor-pointer hover:bg-[#F3F4F7] transition-colors duration-200 min-w-[350px] border border-[#E7E9EF]`}>
                    <Image src={origin?.image} alt={origin?.title} width={52} height={52} />
                    <Image src={destination?.image} alt={destination?.title} width={52} height={52} />
                    <div>
                      <p className="text-[#001414] text-sm  font-bold">
                        {origin?.title} + {destination?.title}
                      </p>
                      <p className="text-[#515867] text-sm">
                        {origin?.description} + {destination?.description}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null}
      </Container>
      <Container className="py-15 lg:py-20">
        <h2 className={`text-[#001414] text-[30px] lg:text-[40px] font-bold text-center ${spaceGrotesk.className}`}>
          Didn’t see your target website?
        </h2>
        <p className="text-[#515867] text-center font-medium mt-3">
          We can scrape any website on the internet. Try it out for free!
        </p>
        <div className="w-4/5 max-w-174 mx-auto mt-10 md:mt-20">
          <p className="text-sm font-medium text-[#515867]">
            URL to Scrape
          </p>
          <div className="w-full flex items-center mt-3 gap-4 flex-col md:flex-row">
            <div className='flex-1 scrape-input-wrapper rounded-xl p-1 w-full md:w-[unset]'>
              <input className="text-[#7575F0] font-semibold text-sm py-3 px-5 bg-white w-full rounded-xl outline outline-[rgba(0,0,0,0.2)] focus:outline-[rgba(117,117,240,1)]" placeholder="https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8" />
            </div>
            <button className="px-8 py-3 bg-[#5050EC] rounded-lg text-sm font-bold text-white mx-auto block cursor-pointer w-full md:w-[unset]">
              Scrape URL
            </button>
          </div>
        </div>
      </Container>

      <Footer />


    </div >
  )
}

export default page