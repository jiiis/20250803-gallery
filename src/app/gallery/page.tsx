import type { FC } from 'react'

import { galleryItems } from '@/data/galleryItems'

import { GalleryImage } from '@/app/gallery/GalleryImage'

const Gallery: FC = () => (
  <div className="grid grid-flow-dense auto-rows-[210px] grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-2">
    {galleryItems.map(({ src, alt, colSpan, rowSpan }) => (
      <GalleryImage key={src} src={src} alt={alt} colSpan={colSpan} rowSpan={rowSpan} />
    ))}
  </div>
)

export default Gallery
