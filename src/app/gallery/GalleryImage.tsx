import Image from 'next/image'
import { FC } from 'react'
import { GalleryGridSpan } from '@/library/types'

interface GalleryImageProps {
  src: string
  alt?: string
  colSpan?: GalleryGridSpan
  rowSpan?: GalleryGridSpan
}

export const GalleryImage: FC<GalleryImageProps> = ({ src, alt = '', colSpan = 1, rowSpan = 1 }) => {
  return (
    <figure className={`relative col-span-${colSpan} row-span-${rowSpan}`}>
      <Image src={src} alt={alt} fill className="rounded-[5px] object-cover" />
    </figure>
  )
}
