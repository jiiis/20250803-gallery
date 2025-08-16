import type { FC } from 'react'

import { galleryItems } from '@/data/galleryItems'

import { GalleryImage } from '@/app/gallery/GalleryImage'

const Gallery: FC = () => (
  <div
    className="grid grid-flow-dense auto-rows-[200px] gap-2.5"
    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
  >
    {galleryItems.map(({ src, alt, colSpan, rowSpan }) => (
      <GalleryImage key={src} src={src} alt={alt} colSpan={colSpan} rowSpan={rowSpan} />
    ))}
  </div>
)

export default Gallery
