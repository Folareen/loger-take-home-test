import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <Container className='py-10 bg-[#001414]'>

            <div className='flex items-start justify-between flex-wrap gap-10 my-10'>
                <div className='max-w-[320px]'>
                    <Link href="#" className="flex items-center gap-2">
                        <div className='bg-white w-5 h-5 rounded-full '>
                        </div>
                        <p className={`text-xl text-white`}>
                            navlogo
                        </p>
                    </Link>
                    <p className="text-[#8D95A5] text-sm mt-5">
                        Web scraping API handles all anti-bot bypass for you with rotating proxies, headless browsers and more.
                    </p>
                </div>
                <div className='flex items-center gap-10'>
                    <Image src='/capterra.svg' width={90} height={44} alt='Capterra' />
                    <Image src='/g2.svg' width={96} height={48} alt='G2' />
                </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-10">
                <div className='flex items-center gap-2 '>
                    <div className='bg-[rgba(0,175,121,0.2)] w-3.5 h-3.5 rounded-full flex  items-center justify-center'>
                        <div className='bg-[#00AF79] w-1/2 h-1/2 rounded-full animate-ping'>
                        </div>
                    </div>
                    <p className='text-[#8D95A5] text-sm '>
                        All services are online
                    </p>
                </div>
                <p className="text-[#8D95A5] segoe-ui text-sm">
                    © 2024 Navlogo. All rights reserved.
                </p>
                <div className='flex items-center gap-3'>
                    <Image src="/x.svg" width={24} height={24} alt="X" />
                    <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" className='mx-4' />
                </div>
            </div>

        </Container>
    )
}

export default Footer