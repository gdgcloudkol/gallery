export const getPhoto = async (galleryURL: string) => {
    let res: any = await fetch(galleryURL)
    res = await res.text()

    const pat = /https:\/\/lh3\.googleusercontent\.com\/pw\/AP1.*?\"/g;
    const urls = res.match(pat)

    const titleRegex = /<title>(.*?)<\/title>/i;
    const title = res.match(titleRegex);

    if (title && title[1]) {
        // Extract the title content
        let titleTemp = title[1];

        // Replace multiple spaces and new lines with a single space
        titleTemp = titleTemp.replace(/\s+/g, ' ').trim();

        // Remove the hyphen and the part after it (if needed)
        titleTemp = titleTemp.split('-')[0].trim();

        // console.log('data', urls)
        return { images: urls, title: titleTemp }
    }
}
export const setSize = (srcUrl: string, width?: number, height?: number) => {
    const base = srcUrl.split("=")[0]
    const w = 'w' + width || 200
    const h = 'h' + height || 200
    return `${base}=${w}-${h}`

}
