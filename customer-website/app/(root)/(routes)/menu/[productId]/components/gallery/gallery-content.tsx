"use client"

import Image from "next/image";

interface GalleryContentImageProps{
    url:string
}
const GalleryContentImage = ({url} :GalleryContentImageProps) => {
    return (
    <div className="w-full h-full aspect-square sm:rounded-lg overflow-hidden">
        <Image src={url} alt={url} className="w-full h-full object-contain" fill>
        </Image>
    </div>);
}
 
export default GalleryContentImage;