const imageLoader = (src: string, width: number, quality: number) => {
    return `https://i.imgur.com${src}?w=${width}&q=${quality || 75}`
}

export default imageLoader