import { HOMEPAGE_DATA_URL, CAROUSEL_DATA_URL } from './config'
import { Homepagedata } from './types'

async function get(url: string) {
    const res = await fetch(url)
    const data = await res.json()

    return data
}

export async function getHomepageData(): Promise<Homepagedata> {
    const homepageData = await get(HOMEPAGE_DATA_URL!)

    return homepageData
}

export async function getCarouselData() {
    const { data: carouselData } = await get(CAROUSEL_DATA_URL!)

    return carouselData.map(({ url }: { url: string }) => url)
}