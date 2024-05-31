export const getPhoto = async (galleryURL: string) => {
    let res: any = await fetch(galleryURL)
    res = await res.text()

    const pat = /https:\/\/lh3\.googleusercontent\.com\/pw\/AP1.*?\"/g;
    const urls = res.match(pat)

    // console.log('data', urls)
    return urls
}

export const setSize = (srcUrl: string, width?: number, height?: number) => {
    const base = srcUrl.split("=")[0]
    const w = 'w' + width || 200
    const h = 'h' + height || 200
    return `${base}=${w}-${h}`
}
