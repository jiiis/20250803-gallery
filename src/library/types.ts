export type GalleryGridSpan = 1 | 2 | 3

export interface GalleryItem {
  src: string
  alt?: string
  colSpan?: GalleryGridSpan
  rowSpan?: GalleryGridSpan
}
