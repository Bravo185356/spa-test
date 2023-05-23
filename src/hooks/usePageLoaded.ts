import { useState } from "react"

export const usePageLoaded = function() {
    const [pageLoaded, setPageLoaded] = useState(false)
    setTimeout(() => setPageLoaded(true), 500)
    return pageLoaded
}