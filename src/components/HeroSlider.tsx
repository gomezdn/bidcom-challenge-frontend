"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { useScroll } from '@/lib/hooks'
import sliderLeftIcon from '@public/slider-left-arrow-icon.svg'
import sliderRightIcon from '@public/slider-right-arrow-icon.svg'

export default function HeroSlider({ images }: { images: string[]}) {
    const ref = useRef<HTMLDivElement | null>(null)

    const { scrollLeft, scrollRight } = useScroll({ ref })

    return (
        <div className='flex gap-2 md:w-max w-screen'>
            <Image className='cursor-pointer md:visible invisible' onClick={scrollLeft} src={sliderLeftIcon} width={32} height={32} alt='Scroll slider to the left'/>
            <div ref={ref} className='flex overflow-x-auto scroll-smooth snap-mandatory snap-x md:w-[673px] w-full h-[309px] md:h-[740px] items-center'>
                {images.map(img => {
                    return (
                        <div key={img} className='snap-start shrink-0 md:w-[673px] w-full h-[309px] md:h-[740px] relative rounded-xl'>
                            <Image src={img} fill alt='A portrait of the owner' className='object-cover rounded-xl'/>
                        </div>
                    )
                })}
            </div>
            <Image className='cursor-pointer md:visible invisible' onClick={scrollRight} src={sliderRightIcon} width={32} height={32} alt='Scroll slider to the right'/>
        </div>
    )
}