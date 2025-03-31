import Image from 'next/image'
import Link from 'next/link'
import { inter, lato } from '@/lib/fonts'
import { getCarouselData, getHomepageData } from '@/lib/services'
import leftArrow from '@public/button-arrow-left-icon.svg'
import icon from '@public/icon.svg'
import menuICon from '@public/menu-icon.svg'
import HeroSlider from '@/components/HeroSlider'

export default async function Home() {
  const carouselImages = await getCarouselData()

  const {
    headline,
    title,
    description,
    button: { 
      title: buttonTitle,
      link: buttonLink
    }
  } = await getHomepageData()

  return (
    <main className='flex flex-col w-screen min-h-screen py-[64px] md:px-[72px] px-3 justify-between items-center'>
      <Image src={menuICon} width={32} height={32} className='self-end cursor-pointer' alt='menu icon'/>

      <div className='m-auto flex md:flex-row flex-col w-full md:gap-0 gap-4 justify-around items-center'>
        <div className='md:flex flex-col gap-4 w-[369px] md:w-[593px] h-[286px] md:text-left text-center contents'>
          <div className={`flex flex-col gap-4 items-center md:items-start ${inter.className}`}>
            <p className='text-xs md:text-sm font-[400]'>{headline.replace('--', '—')}</p>
            <h1 className={`font-[400] text-3xl md:text-5xl`} dangerouslySetInnerHTML={{__html: '¡' + title}}/>
            <p className='font-[300] text-base text-left'>{description + description + description}</p>
          </div>
          <Link className='order-last w-full' href={buttonLink}>
            <div className='flex justify-center gap-2 font-[700] w-full md:w-[157px] h-[54px] text-sm bg-black rounded-[10px] text-white'>
              <button className={`${lato.className}`}>{buttonTitle}</button>
              <Image src={leftArrow} width={12} height={12} alt='Arrow icon indicating to follow link'/>
            </div>
          </Link>
        </div>
        <HeroSlider images={carouselImages}/>
      </div>
      <Image src={icon} width={40} height={40} className='self-center cursor-pointer' alt='logo icon'/>
    </main>
  )
}
