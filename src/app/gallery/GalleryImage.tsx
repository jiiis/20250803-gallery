import Image from 'next/image'

import type { FC } from 'react'

import type { GalleryGridSpan } from '@/library/types'

import '@/app/gallery/index.css'

interface GalleryImageProps {
  src: string
  alt?: string
  colSpan?: GalleryGridSpan
  rowSpan?: GalleryGridSpan
}

export const GalleryImage: FC<GalleryImageProps> = ({
  src,
  alt = '',
  colSpan = 1,
  rowSpan = 1,
}) => (
  <figure
    className={`relative col-span-${colSpan} row-span-${rowSpan} max-[564px]:col-span-full`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="rounded-xs object-cover"
    />
  </figure>
)
