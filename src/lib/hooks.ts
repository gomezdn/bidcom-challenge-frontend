import { RefObject } from "react"

export function useScroll({ ref }: { ref: RefObject<HTMLDivElement | null>}) {
    function scrollRight() {
        if (ref && ref.current) {
            ref?.current?.scrollBy({
                left: 1,
                behavior: 'smooth'
            })
        }
    }

    function scrollLeft() {
        if (ref && ref.current) {
            ref?.current?.scrollBy({
                left: -1,
                behavior: 'smooth'
            })
        }
    }

    return {
        scrollRight,
        scrollLeft
    }
}